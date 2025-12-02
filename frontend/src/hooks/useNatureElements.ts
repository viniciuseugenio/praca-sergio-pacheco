import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { natureElementsApi } from "../utils/api";
import type { NatureElement, UpdateNatureElementDto } from "../types/nature";

// Query key factory for nature elements
export const natureElementKeys = {
  all: ["nature-elements"] as const,
  lists: () => [...natureElementKeys.all, "list"] as const,
  list: (filters?: Record<string, any>) =>
    [...natureElementKeys.lists(), filters] as const,
  details: () => [...natureElementKeys.all, "detail"] as const,
  detail: (id: number) => [...natureElementKeys.details(), id] as const,
};

// Hook to get all nature elements
export function useNatureElements() {
  return useQuery<NatureElement[]>({
    queryKey: natureElementKeys.lists(),
    queryFn: natureElementsApi.getAll,
    staleTime: 30 * 1000, // Consider fresh for 30 seconds
  });
}

// Hook to create a new nature element
export function useCreateNatureElement() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: natureElementsApi.create,
    onMutate: async (newElement) => {
      // Cancel outgoing queries
      await queryClient.cancelQueries({ queryKey: natureElementKeys.lists() });

      // Snapshot previous value
      const previousElements = queryClient.getQueryData<NatureElement[]>(
        natureElementKeys.lists()
      );

      // Optimistically update
      if (previousElements) {
        queryClient.setQueryData<NatureElement[]>(natureElementKeys.lists(), [
          ...previousElements,
          { ...newElement, id: Date.now(), image_url: '' } as any, // Temporary ID
        ]);
      }

      return { previousElements };
    },
    onError: (_err, _newElement, context) => {
      // Rollback on error
      if (context?.previousElements) {
        queryClient.setQueryData(natureElementKeys.lists(), context.previousElements);
      }
    },
    onSettled: () => {
      // Refetch to get server truth
      queryClient.invalidateQueries({ queryKey: natureElementKeys.lists() });
    },
  });
}

// Hook to update a nature element
export function useUpdateNatureElement() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, element }: { id: number; element: UpdateNatureElementDto }) =>
      natureElementsApi.update(id, element),
    onMutate: async ({ id, element }) => {
      await queryClient.cancelQueries({ queryKey: natureElementKeys.lists() });

      const previousElements = queryClient.getQueryData<NatureElement[]>(
        natureElementKeys.lists()
      );

      if (previousElements) {
        queryClient.setQueryData<NatureElement[]>(
          natureElementKeys.lists(),
          previousElements.map((e) => (e.id === id ? { ...e, ...element } : e))
        );
      }

      return { previousElements };
    },
    onError: (_err, _variables, context) => {
      if (context?.previousElements) {
        queryClient.setQueryData(natureElementKeys.lists(), context.previousElements);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: natureElementKeys.lists() });
    },
  });
}

// Hook to delete a nature element
export function useDeleteNatureElement() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: natureElementsApi.delete,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: natureElementKeys.lists() });

      const previousElements = queryClient.getQueryData<NatureElement[]>(
        natureElementKeys.lists()
      );

      if (previousElements) {
        queryClient.setQueryData<NatureElement[]>(
          natureElementKeys.lists(),
          previousElements.filter((e) => e.id !== id)
        );
      }

      return { previousElements };
    },
    onError: (_err, _id, context) => {
      if (context?.previousElements) {
        queryClient.setQueryData(natureElementKeys.lists(), context.previousElements);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: natureElementKeys.lists() });
    },
  });
}
