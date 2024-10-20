// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f495c08eb7e1a16682fb72bb543860d5@o4507965259055104.ingest.us.sentry.io/4508154900447232",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
