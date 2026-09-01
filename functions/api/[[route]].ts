// Cloudflare Pages Function: serves every /api/* request with the Hono app.
// The static frontend (index.html) is uploaded as a Pages asset and calls
// these routes same-origin, so no CORS or separate Worker deployment is needed.
import { handle } from 'hono/cloudflare-pages';
import app from '../../src/index';

export const onRequest = handle(app);
