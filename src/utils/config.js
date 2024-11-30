const ENV = import.meta.env;

export const config = {
  API_BASE_URL: ENV.VITE_API_BASE_URL,
  CLERK_PUBLISHABLE_KEY: ENV.VITE_CLERK_PUBLISHABLE_KEY,
}