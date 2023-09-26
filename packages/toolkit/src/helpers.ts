/**
 * Аналог ф-ии dig в Ruby для поиска ключей в многомерных объектах
 */
export function dig(
  target: Record<string, any>,
  ...keys: (string | ((param: Record<string, any>) => Record<string, any>))[]
): any {
  let digged = target;

  for (const key of keys) {
    if (typeof digged === 'undefined' || digged === null) {
      return undefined;
    }

    if (typeof key === 'function') {
      digged = key(digged);
    } else {
      digged = digged[key];
    }
  }

  return digged;
}

/**
 * Сгенерировать уникальный идентификатор
 */
export function uniqueId(): string {
  return 'id' + Math.random().toString(36).substring(2, 9);
}

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes
export const coerceBoolean = {
  set: (v: string | boolean) =>
    v === '' || v === true || v === 'true' ? true : v === false || v === 'false' ? false : undefined,
};

export const coerceNumber = {
  set: (v: string | number) => (v == null ? v : parseInt(v.toString(), 10)),
};

export const isMapOrObj = (items: Set<string> | Map<any, string> | Array<string> | Record<any, string>): boolean => {
  return items instanceof Object && (items.constructor === Object || items.constructor === Map);
};
