export type Action<T extends string, payload> = payload extends undefined
  ? {
      type: T;
    }
  : {
      type: T;
      payload: payload;
    };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SafeAny = any;
