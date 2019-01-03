// Type definitions for express-slow-down 1.1
// Project: https://github.com/nfriedly/express-slow-down
// Definitions by: Jeremy Forsythe <https://github.com/jdforsythe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import express = require("express");

declare namespace SlowDown {
    type StoreIncrementCallback = (err?: {}, hits?: number) => void;

    interface Store {
        incr(key: string, cb: StoreIncrementCallback): void;
        decrement(key: string): void;
        resetKey(key: string): void;
    }

    /**
     * express-slow-down options
     */
    interface Options {
        /**
         * How long to keep records of requests in memory. Defaults to `60000` (1 minute)
         */
        windowMs?: number;

        /**
         * Max number of connections during `windowMs` before starting to delay responses.
         * Defaults to `1`. Set to `0` to disable delaying.
         */
        delayAfter?: number;

        /**
         * How long to delay the response, multiplied by `(number recent hits - delayAfter)`.
         * Defaults to `1000` (1 second). Set to `0` to disable delaying.
         */
        delayMs?: number;

        /**
         * When `true` failed requests (response status >= 400) won't be counted. Defaults to `false`.
         */
        skipFailedRequests?: boolean;

        /**
         * When `true` successful requests (response status < 400) won't be counted. Defaults to `false`.
         */
        skipSuccessfulRequests?: boolean;

        /**
         * Function used to generate keys. By default user IP address (`req.ip`) is used.
         * Default: `(req, res) => req.ip`
         */
        keyGenerator?(req: express.Request, res: express.Response): string;

        /**
         * Function used to skip requests. Returning `true` from the function will skip delaying for that request.
         * Default: `(req, res) => false`
         */
        skip?(req: express.Request, res: express.Response): boolean;

        /**
         * Function to execute the first time the limit is reached within `windowMs`.
         * Default: `(req, res, opts) => {}`
         */
        onLimitReached?(req: express.Request, res: express.Response, optionsUsed: Options): void;

        /**
         * The storage to use when persisting request attempts. By default, the MemoryStore is used.
         */
        store?: Store;
    }
}

declare var SlowDown: new (options: SlowDown.Options) => express.RequestHandler;
export = SlowDown;
