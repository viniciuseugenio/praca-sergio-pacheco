import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { authApi } from "../utils/api";

interface User {
  id: number;
  username: string;
  email: string;
  is_staff: boolean;
}

interface AuthResponse {
  authenticated: boolean;
  user: User;
}

// Query key factory for auth
export const authKeys = {
  all: ["auth"] as const,
  user: () => [...authKeys.all, "user"] as const,
};

// Hook to get current user/auth status
export function useAuthUser() {
  return useQuery<AuthResponse>({
    queryKey: authKeys.user(),
    queryFn: authApi.verify,
    retry: false,
    staleTime: 5 * 60 * 1000, // Consider fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
    refetchOnWindowFocus: true, // Check auth when user returns to tab
    refetchOnReconnect: true, // Check auth when connection restored
  });
}

// Hook for login mutation
export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      username,
      password,
      rememberMe,
    }: {
      username: string;
      password: string;
      rememberMe: boolean;
    }) => authApi.login(username, password, rememberMe),
    onSuccess: (data) => {
      // Update the auth cache with the user data
      queryClient.setQueryData<AuthResponse>(authKeys.user(), {
        authenticated: true,
        user: data.user,
      });
    },
  });
}

// Hook for logout mutation
export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      // Clear all auth data from cache
      queryClient.setQueryData(authKeys.user(), null);
      queryClient.removeQueries({ queryKey: authKeys.all });
    },
    onError: () => {
      // Even if logout fails, clear local cache
      queryClient.setQueryData(authKeys.user(), null);
      queryClient.removeQueries({ queryKey: authKeys.all });
    },
  });
}

// Hook to check if user is authenticated
export function useIsAuthenticated() {
  const { data } = useAuthUser();
  return data?.authenticated ?? false;
}

// Hook to get current user
export function useCurrentUser() {
  const { data } = useAuthUser();
  return data?.user ?? null;
}
