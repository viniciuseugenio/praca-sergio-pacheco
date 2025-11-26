/**
 * TanStack Query Usage Examples
 * 
 * This file contains example patterns for using the query hooks.
 * Copy these patterns when building new features.
 * 
 * NOTE: This file is for reference only - import the patterns you need
 */

import { useAuthUser, useLogin, useLogout, useIsAuthenticated, useCurrentUser } from '../hooks/useAuth';
import { useEvents, useCreateEvent, useUpdateEvent, useDeleteEvent } from '../hooks/useEvents';

// ============================================================================
// AUTHENTICATION EXAMPLES
// ============================================================================

/**
 * Example 1: Simple Auth Check
 */
export function SimpleAuthCheck() {
  const isAuthenticated = useIsAuthenticated();
  const user = useCurrentUser();

  if (!isAuthenticated) {
    return <div>Please login</div>;
  }

  return <div>Welcome {user?.username}!</div>;
}

/**
 * Example 2: Login Form with Full State
 */
export function LoginFormExample() {
  const login = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    login.mutate({
      username: formData.get('username') as string,
      password: formData.get('password') as string,
      rememberMe: formData.get('remember') === 'on',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" />
      <input name="password" type="password" placeholder="Password" />
      <input name="remember" type="checkbox" /> Remember me
      
      <button type="submit" disabled={login.isPending}>
        {login.isPending ? 'Logging in...' : 'Login'}
      </button>

      {login.isError && (
        <div className="error">
          Error: {login.error?.message}
        </div>
      )}
    </form>
  );
}

/**
 * Example 3: Events List with Loading/Error States
 */
export function EventsListExample() {
  const { data: events, isLoading, error } = useEvents();

  if (isLoading) return <div>Loading events...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {events?.map(event => (
        <li key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
        </li>
      ))}
    </ul>
  );
}

/**
 * Example 4: Create Event with Optimistic Update
 */
export function CreateEventExample() {
  const createEvent = useCreateEvent();

  const handleCreate = (eventData: any) => {
    // UI updates instantly before server responds!
    createEvent.mutate(eventData);
  };

  return (
    <button 
      onClick={() => handleCreate({ title: 'New Event', date: '2024-01-01' })}
      disabled={createEvent.isPending}
    >
      {createEvent.isPending ? 'Creating...' : 'Create Event'}
    </button>
  );
}
