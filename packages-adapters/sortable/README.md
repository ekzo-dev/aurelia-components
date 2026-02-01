# `@ekzo-dev/sortable`

Aurelia 2 custom attribute wrapper around [SortableJS](https://github.com/SortableJS/Sortable) library for creating reorderable drag-and-drop lists.

## Installation

```bash
npm install @ekzo-dev/sortable
```

## Usage

### Basic Example

```typescript
import { Sortable } from '@ekzo-dev/sortable';

export class MyApp {
  items = ['Item 1', 'Item 2', 'Item 3'];
}
```

```html
<ul sortable>
  <li repeat.for="item of items">${item}</li>
</ul>
```

### With Animation

```html
<ul sortable="animation: 300">
  <li repeat.for="item of items">${item}</li>
</ul>
```

### With Drag Handle

```html
<ul sortable="handle: .handle">
  <li repeat.for="item of items">
    <span class="handle">⋮⋮</span>
    ${item}
  </li>
</ul>
```

### With Event Callbacks

```typescript
export class MyApp {
  items = ['Item 1', 'Item 2', 'Item 3'];

  handleEnd = (evt) => {
    console.log('Dragging ended', evt);
    // Update your data model here
  };
}
```

```html
<ul sortable="on-end.bind: handleEnd">
  <li repeat.for="item of items">${item}</li>
</ul>
```

### Drag Between Lists

```html
<div class="row">
  <ul sortable="group: shared">
    <li repeat.for="item of list1">${item}</li>
  </ul>

  <ul sortable="group: shared">
    <li repeat.for="item of list2">${item}</li>
  </ul>
</div>
```

## API

The custom attribute supports all options from SortableJS library. Below are the most commonly used options:

### Options

| Property                | Type                                     | Default             | Description                                                   |
| ----------------------- | ---------------------------------------- | ------------------- | ------------------------------------------------------------- |
| `group`                 | `string \| GroupOptions`                 | `undefined`         | Group name or configuration for drag-and-drop between lists   |
| `sort`                  | `boolean`                                | `true`              | Enable/disable sorting within list                            |
| `delay`                 | `number`                                 | `0`                 | Delay in milliseconds before drag starts                      |
| `delayOnTouchOnly`      | `boolean`                                | `false`             | Apply delay only on touch devices                             |
| `touchStartThreshold`   | `number`                                 | `0`                 | Minimum pointer movement before cancelling delayed sorting    |
| `disabled`              | `boolean`                                | `false`             | Disable the sortable functionality                            |
| `animation`             | `number`                                 | `150`               | Animation duration in milliseconds                            |
| `easing`                | `string`                                 | `null`              | CSS easing function for animations                            |
| `handle`                | `string`                                 | `undefined`         | CSS selector for drag handle                                  |
| `filter`                | `string \| Function`                     | `undefined`         | CSS selector or function to prevent dragging certain elements |
| `preventOnFilter`       | `boolean`                                | `true`              | Prevent default behavior when filtering                       |
| `draggable`             | `string`                                 | `undefined`         | CSS selector for draggable items                              |
| `dataIdAttr`            | `string`                                 | `'data-id'`         | HTML attribute for `toArray()` method                         |
| `ghostClass`            | `string`                                 | `'sortable-ghost'`  | CSS class for drop placeholder                                |
| `chosenClass`           | `string`                                 | `'sortable-chosen'` | CSS class for chosen item                                     |
| `dragClass`             | `string`                                 | `'sortable-drag'`   | CSS class for dragging item                                   |
| `swapThreshold`         | `number`                                 | `1`                 | Swap zone percentage (0-1)                                    |
| `invertSwap`            | `boolean`                                | `false`             | Use inverted swap zone                                        |
| `invertedSwapThreshold` | `number`                                 | `undefined`         | Threshold for inverted swap                                   |
| `direction`             | `'vertical' \| 'horizontal' \| Function` | `undefined`         | Sorting direction                                             |
| `scrollSensitivity`     | `number`                                 | `undefined`         | Mouse proximity to edge before scrolling                      |
| `scrollSpeed`           | `number`                                 | `undefined`         | Scrolling speed in pixels                                     |
| `bubbleScroll`          | `boolean`                                | `undefined`         | Enable bubbling scroll to parent containers                   |
| `dragoverBubble`        | `boolean`                                | `undefined`         | Enable dragover event bubbling                                |
| `removeCloneOnHide`     | `boolean`                                | `undefined`         | Remove clone when hidden                                      |
| `emptyInsertThreshold`  | `number`                                 | `undefined`         | Distance to empty list for insertion                          |
| `forceFallback`         | `boolean`                                | `false`             | Force HTML5 DnD fallback                                      |
| `fallbackClass`         | `string`                                 | `undefined`         | CSS class for fallback                                        |
| `fallbackOnBody`        | `boolean`                                | `false`             | Append fallback to body                                       |
| `fallbackTolerance`     | `number`                                 | `undefined`         | Movement tolerance before drag starts                         |

### Event Callbacks

| Event        | Description                                   |
| ------------ | --------------------------------------------- |
| `onChoose`   | Element is chosen                             |
| `onUnchoose` | Element is unchosen                           |
| `onStart`    | Dragging started                              |
| `onEnd`      | Dragging ended                                |
| `onAdd`      | Element added to list                         |
| `onUpdate`   | Element order updated within list             |
| `onSort`     | Any change to the list (add, update, remove)  |
| `onRemove`   | Element removed from list                     |
| `onFilter`   | Filtered element attempted to drag            |
| `onMove`     | Element is moved within list or between lists |
| `onClone`    | Element cloned                                |
| `onChange`   | Dragging element changed position             |

### Advanced Example

```typescript
export class MyApp {
  items = [
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' },
    { id: 3, name: 'Task 3' },
  ];

  sortableOptions = {
    animation: 150,
    ghostClass: 'ghost',
    dragClass: 'drag',
    handle: '.drag-handle',
  };

  onSortEnd = (evt) => {
    // Reorder items array
    const oldIndex = evt.oldIndex;
    const newIndex = evt.newIndex;

    if (oldIndex !== newIndex) {
      const item = this.items.splice(oldIndex, 1)[0];
      this.items.splice(newIndex, 0, item);
    }
  };
}
```

```html
<ul
  sortable="
    animation.bind: sortableOptions.animation;
    ghost-class.bind: sortableOptions.ghostClass;
    drag-class.bind: sortableOptions.dragClass;
    handle.bind: sortableOptions.handle;
    on-end.bind: onSortEnd"
>
  <li repeat.for="item of items" data-id.bind="item.id">
    <span class="drag-handle">⋮⋮</span>
    ${item.name}
  </li>
</ul>
```

## Additional Resources

For more information about available options and advanced usage, refer to the [SortableJS documentation](https://github.com/SortableJS/Sortable).

## License

MIT
