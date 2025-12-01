import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { eventsApi } from "../utils/api";
import type { Event, UpdateEventDto } from "../types/event";

// Query key factory for events
export const eventKeys = {
  all: ["events"] as const,
  lists: () => [...eventKeys.all, "list"] as const,
  list: (filters?: Record<string, any>) =>
    [...eventKeys.lists(), filters] as const,
  details: () => [...eventKeys.all, "detail"] as const,
  detail: (id: number) => [...eventKeys.details(), id] as const,
};

// Hook to get all events
export function useEvents() {
  return useQuery<Event[]>({
    queryKey: eventKeys.lists(),
    queryFn: eventsApi.getAll,
    staleTime: 30 * 1000, // Consider fresh for 30 seconds
  });
}

// Hook to create a new event
export function useCreateEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: eventsApi.create,
    onMutate: async (newEvent) => {
      // Cancel outgoing queries
      await queryClient.cancelQueries({ queryKey: eventKeys.lists() });

      // Snapshot previous value
      const previousEvents = queryClient.getQueryData<Event[]>(
        eventKeys.lists()
      );

      // Optimistically update
      if (previousEvents) {
        queryClient.setQueryData<Event[]>(eventKeys.lists(), [
          ...previousEvents,
          { ...newEvent, id: Date.now() } as Event, // Temporary ID
        ]);
      }

      return { previousEvents };
    },
    onError: (_err, _newEvent, context) => {
      // Rollback on error
      if (context?.previousEvents) {
        queryClient.setQueryData(eventKeys.lists(), context.previousEvents);
      }
    },
    onSettled: () => {
      // Refetch to get server truth
      queryClient.invalidateQueries({ queryKey: eventKeys.lists() });
    },
  });
}

// Hook to update an event
export function useUpdateEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, event }: { id: number; event: UpdateEventDto }) =>
      eventsApi.update(id, event),
    onMutate: async ({ id, event }) => {
      await queryClient.cancelQueries({ queryKey: eventKeys.lists() });

      const previousEvents = queryClient.getQueryData<Event[]>(
        eventKeys.lists()
      );

      if (previousEvents) {
        queryClient.setQueryData<Event[]>(
          eventKeys.lists(),
          previousEvents.map((e) => (e.id === id ? { ...e, ...event } : e))
        );
      }

      return { previousEvents };
    },
    onError: (_err, _variables, context) => {
      if (context?.previousEvents) {
        queryClient.setQueryData(eventKeys.lists(), context.previousEvents);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: eventKeys.lists() });
    },
  });
}

// Hook to delete an event
export function useDeleteEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: eventsApi.delete,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: eventKeys.lists() });

      const previousEvents = queryClient.getQueryData<Event[]>(
        eventKeys.lists()
      );

      if (previousEvents) {
        queryClient.setQueryData<Event[]>(
          eventKeys.lists(),
          previousEvents.filter((e) => e.id !== id)
        );
      }

      return { previousEvents };
    },
    onError: (_err, _id, context) => {
      if (context?.previousEvents) {
        queryClient.setQueryData(eventKeys.lists(), context.previousEvents);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: eventKeys.lists() });
    },
  });
}
