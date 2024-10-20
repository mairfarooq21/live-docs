// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f495c08eb7e1a16682fb72bb543860d5@o4507965259055104.ingest.us.sentry.io/4508154900447232",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
