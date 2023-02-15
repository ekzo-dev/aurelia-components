/**
 * Аналог ф-ии dig в Ruby для поиска ключей в многомерных объектах
 */
export function dig(target: Record<string, any>, ...keys: (string | Function)[]): any {
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
