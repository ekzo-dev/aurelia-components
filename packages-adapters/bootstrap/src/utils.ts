import { INode, IPlatform } from 'aurelia';

export const addEventListener = (element: Element, type: string, listener: EventListenerOrEventListenerObject) =>
  element.addEventListener(type, listener);

export const removeEventListener = (element: Element, type: string, listener: EventListenerOrEventListenerObject) =>
  element.removeEventListener(type, listener);

export const wrapDefaultAuSlot = (node: INode, p: IPlatform) => {
  const projection = p.document.createElement('template');
  projection.setAttribute('au-slot', '');
  const content = projection.content;
  for (const child of Array.from(node.childNodes)) {
    if (child instanceof Text || (child instanceof Element && !child.hasAttribute('au-slot'))) {
      content.append(child);
    }
  }
  if (content.childNodes.length > 0) {
    node.appendChild(projection);
  }
};

export function uniqueId(): string {
  return 'id' + Math.random().toString(36).substring(2, 9);
}

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes
export const coerceBoolean = {
  set: (v: string | boolean) =>
    v === '' || v === true || v === 'true' ? true : v === false || v === 'false' ? false : undefined,
};

export const isMapOrObj = (items: Set<string> | Map<any, string> | Array<string> | Record<any, string>): boolean => {
  return items instanceof Object && (items.constructor === Object || items.constructor === Map);
};
