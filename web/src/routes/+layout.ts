import { get } from 'svelte/store';
import { onDocumentLoaded } from '$lib/utils/web/hooks.js';
import { serviceWorker } from '$lib/config';
import { dev } from '$app/environment';

export const prerender = true;
export const trailingSlash = 'always';
export const ssr = true;

if (!dev) {
	onDocumentLoaded(serviceWorker.register);
}

(globalThis as any).get = get;
