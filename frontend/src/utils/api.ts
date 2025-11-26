const API_BASE_URL = "https://sergio-pacheco-app-iyhrl.ondigitalocean.app/api";

interface FetchOptions extends RequestInit {
  requiresAuth?: boolean;
}

export async function apiRequest<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  const { requiresAuth = false, ...fetchOptions } = options;

  const url = `${API_BASE_URL}${endpoint}`;

  const config: RequestInit = {
    ...fetchOptions,
    credentials: "include", // Important: include cookies
    headers: {
      "Content-Type": "application/json",
      ...fetchOptions.headers,
    },
  };

  let response = await fetch(url, config);

  // If we get a 401 and it's an authenticated request, try to refresh token
  if (response.status === 401 && requiresAuth) {
    const refreshed = await refreshAccessToken();
    if (refreshed) {
      // Retry the original request
      response = await fetch(url, config);
    } else {
      throw new Error("Authentication required");
    }
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || "Request failed");
  }

  return response.json();
}

export async function refreshAccessToken(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/refresh/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.ok;
  } catch (error) {
    console.error("Failed to refresh token:", error);
    return false;
  }
}

export const authApi = {
  login: async (
    username: string,
    password: string,
    rememberMe: boolean = false,
  ) => {
    return apiRequest<{ message: string; user: any }>("/auth/login/", {
      method: "POST",
      body: JSON.stringify({ username, password, remember_me: rememberMe }),
    });
  },

  logout: async () => {
    return apiRequest<{ message: string }>("/auth/logout/", {
      method: "POST",
      requiresAuth: true,
    });
  },

  verify: async () => {
    return apiRequest<{ authenticated: boolean; user: any }>("/auth/verify/", {
      requiresAuth: true,
    });
  },

  refresh: async () => {
    return refreshAccessToken();
  },
};

export const eventsApi = {
  getAll: async () => {
    return apiRequest<any[]>("/events/");
  },

  create: async (event: any) => {
    return apiRequest<any>("/events/", {
      method: "POST",
      body: JSON.stringify(event),
      requiresAuth: true,
    });
  },

  update: async (id: number, event: any) => {
    return apiRequest<any>(`/events/${id}/`, {
      method: "PUT",
      body: JSON.stringify(event),
      requiresAuth: true,
    });
  },

  delete: async (id: number) => {
    return apiRequest<void>(`/events/${id}/`, {
      method: "DELETE",
      requiresAuth: true,
    });
  },
};
