import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN_SERVER,
  tracesSampleRate: 1.0, // Adjust for production
  debug: process.env.NODE_ENV === "development",
  environment: process.env.NODE_ENV,
  integrations: [], // Optional: custom integrations
});
