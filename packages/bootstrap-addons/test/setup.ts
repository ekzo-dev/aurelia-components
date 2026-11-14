import { BrowserPlatform } from '@aurelia/platform-browser';
import { setPlatform } from '@aurelia/testing';

/** Aurelia has no platform of its own under Jest, so jsdom is handed over as one. */
const platform = new BrowserPlatform(globalThis as unknown as Window & typeof globalThis);

BrowserPlatform.set(globalThis, platform);
setPlatform(platform);
