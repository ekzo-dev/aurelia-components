import { ProxyObservable, queueTask } from '@aurelia/runtime';

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes
export const coerceBoolean = {
  set: (v: unknown): boolean | undefined =>
    v === '' || v === true || v === 'true' ? true : v === false || v === 'false' ? false : undefined,
};

export const coerceNumber = {
  set: (v: unknown): number | undefined => (v == null ? (v as undefined) : parseInt(v.toString(), 10)),
};

/**
 * Deep unwrap possibly proxied value with cyclic reference detection
 * @param value
 * @param isJson
 * @param seen
 */
export function deepUnwrap<T>(value: T, isJson = false, seen?: Set<object>): T {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  const raw = ProxyObservable.getRaw(value);

  if (!isJson) {
    seen ??= new Set();

    if (seen.has(raw)) {
      return raw as T;
    }

    seen.add(raw);
  }

  if (Array.isArray(raw)) {
    return raw.map((item) => deepUnwrap(item, isJson, seen)) as T;
  }

  if (!isJson) {
    if (raw instanceof Map) {
      const result = new Map();

      raw.forEach((v, k) => {
        result.set(deepUnwrap(k, isJson, seen), deepUnwrap(v, isJson, seen));
      });

      return result as T;
    }

    if (raw instanceof Set) {
      const result = new Set();

      raw.forEach((v) => {
        result.add(deepUnwrap(v, isJson, seen));
      });

      return result as T;
    }
  }

  const proto = Object.getPrototypeOf(raw);

  if (proto !== Object.prototype && proto !== null) {
    return raw as T;
  }

  const result: Record<string, unknown> = {};

  for (const key of Object.keys(raw)) {
    result[key] = deepUnwrap(raw[key as keyof T], isJson, seen);
  }

  return result as T;
}

const queueSet = new Set<() => void>();

/**
 * Queue a distinct synchronous callback onto Aurelia's internal task queue.
 */
export function queueDistinctTask(callback: () => void) {
  if (queueSet.has(callback)) return;

  queueSet.add(callback);
  queueTask(() => {
    callback();
    queueSet.delete(callback);
  });
}
