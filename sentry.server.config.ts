import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://3ea1bf0f19d6ceea58fec401f7b45b0e@o4507544004853760.ingest.de.sentry.io/4507544018223184",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === 'development',
  
});
