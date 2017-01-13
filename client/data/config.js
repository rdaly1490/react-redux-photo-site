import Raven from 'raven-js';

const sentry_key = 'cb55d4f05cd443ce82303222f77ef5e0';
const sentry_app = '61499';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

// custom exception
// export and throw this in a try catch to throw a custom error
export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
