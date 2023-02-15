import { INode, IPlatform } from 'aurelia';

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

export const coerceBoolean = { set: (v) => v === '' || v === true };

export const isMapOrObj = (items: Set<string> | Map<any, string> | Array<string> | Record<any, string>): boolean => {
  return items instanceof Object && (items.constructor === Object || items.constructor === Map);
};
