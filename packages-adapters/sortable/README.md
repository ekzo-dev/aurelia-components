# @ekzo-dev/sortable

Aurelia 2 custom attribute wrapper around [SortableJS](https://github.com/SortableJS/Sortable) library for creating reorderable drag-and-drop lists.

## Installation

```bash
npm install @ekzo-dev/sortable
```

### Peer Dependencies

This package requires the following peer dependencies:

- `aurelia` ^2.0.0
- `sortablejs` ^1.15.0

## Usage

### Basic Example

```typescript
export class MyApp {
  items = ['Item 1', 'Item 2', 'Item 3'];
}
```

```html
<ul sortable>
  <li repeat.for="item of items">${item}</li>
</ul>
```

### With Options Object

```typescript
export class MyApp {
  items = ['Item 1', 'Item 2', 'Item 3'];

  sortableOptions = {
    animation: 300,
    handle: '.handle',
    ghostClass: 'ghost',
  };
}
```

```html
<ul sortable.bind="sortableOptions">
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

  sortableOptions = {
    animation: 150,
    onEnd: (evt) => {
      console.log('Dragging ended', evt);
      // Update your data model here
      const oldIndex = evt.oldIndex;
      const newIndex = evt.newIndex;

      if (oldIndex !== newIndex) {
        const item = this.items.splice(oldIndex, 1)[0];
        this.items.splice(newIndex, 0, item);
      }
    },
  };
}
```

```html
<ul sortable.bind="sortableOptions">
  <li repeat.for="item of items">${item}</li>
</ul>
```

### Drag Between Lists

```typescript
export class MyApp {
  list1 = ['Item 1', 'Item 2', 'Item 3'];
  list2 = ['Item 4', 'Item 5', 'Item 6'];

  sharedOptions = {
    group: 'shared',
    animation: 150,
  };
}
```

```html
<div class="row">
  <ul sortable.bind="sharedOptions">
    <li repeat.for="item of list1">${item}</li>
  </ul>

  <ul sortable.bind="sharedOptions">
    <li repeat.for="item of list2">${item}</li>
  </ul>
</div>
```

## API

### Bindable Property

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `options` | `Options` | `{}` | SortableJS configuration object. This is the default property, so you can bind directly to the attribute. |

The `options` property accepts all configuration options from the [SortableJS library](https://github.com/SortableJS/Sortable#options). Below are the most commonly used options:

### Common Options

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `group` | `string \| GroupOptions` | `undefined` | Group name or configuration for drag-and-drop between lists |
| `sort` | `boolean` | `true` | Enable/disable sorting within list |
| `delay` | `number` | `0` | Delay in milliseconds before drag starts |
| `delayOnTouchOnly` | `boolean` | `false` | Apply delay only on touch devices |
| `touchStartThreshold` | `number` | `0` | Minimum pointer movement before cancelling delayed sorting |
| `disabled` | `boolean` | `false` | Disable the sortable functionality |
| `animation` | `number` | `0` | Animation duration in milliseconds |
| `easing` | `string` | `null` | CSS easing function for animations |
| `handle` | `string` | `undefined` | CSS selector for drag handle |
| `filter` | `string \| Function` | `undefined` | CSS selector or function to prevent dragging certain elements |
| `preventOnFilter` | `boolean` | `true` | Prevent default behavior when filtering |
| `draggable` | `string` | `undefined` | CSS selector for draggable items |
| `dataIdAttr` | `string` | `'data-id'` | HTML attribute for `toArray()` method |
| `ghostClass` | `string` | `'sortable-ghost'` | CSS class for drop placeholder |
| `chosenClass` | `string` | `'sortable-chosen'` | CSS class for chosen item |
| `dragClass` | `string` | `'sortable-drag'` | CSS class for dragging item |
| `swapThreshold` | `number` | `1` | Swap zone percentage (0-1) |
| `invertSwap` | `boolean` | `false` | Use inverted swap zone |
| `invertedSwapThreshold` | `number` | `undefined` | Threshold for inverted swap |
| `direction` | `'vertical' \| 'horizontal' \| Function` | `undefined` | Sorting direction |
| `scrollSensitivity` | `number` | `30` | Mouse proximity to edge before scrolling |
| `scrollSpeed` | `number` | `10` | Scrolling speed in pixels |
| `bubbleScroll` | `boolean` | `true` | Enable bubbling scroll to parent containers |
| `forceFallback` | `boolean` | `false` | Force HTML5 DnD fallback |
| `fallbackClass` | `string` | `'sortable-fallback'` | CSS class for fallback |
| `fallbackOnBody` | `boolean` | `false` | Append fallback to body |
| `fallbackTolerance` | `number` | `0` | Movement tolerance before drag starts |

### Event Callbacks

| Event | Description |
|-------|-------------|
| `onChoose` | Element is chosen |
| `onUnchoose` | Element is unchosen |
| `onStart` | Dragging started |
| `onEnd` | Dragging ended |
| `onAdd` | Element added to list |
| `onUpdate` | Element order updated within list |
| `onSort` | Any change to the list (add, update, remove) |
| `onRemove` | Element removed from list |
| `onFilter` | Filtered element attempted to drag |
| `onMove` | Element is moved within list or between lists |
| `onClone` | Element cloned |
| `onChange` | Dragging element changed position |

## Examples

### Complete Example with Data Updates

```typescript
export class TaskList {
  tasks = [
    { id: 1, name: 'Task 1', completed: false },
    { id: 2, name: 'Task 2', completed: false },
    { id: 3, name: 'Task 3', completed: true },
  ];

  sortableOptions = {
    animation: 150,
    handle: '.drag-handle',
    ghostClass: 'ghost',
    chosenClass: 'chosen',
    dragClass: 'drag',
    filter: '.completed',
    onEnd: (evt) => {
      const oldIndex = evt.oldIndex;
      const newIndex = evt.newIndex;

      if (oldIndex !== undefined && newIndex !== undefined && oldIndex !== newIndex) {
        const item = this.tasks.splice(oldIndex, 1)[0];
        this.tasks.splice(newIndex, 0, item);

        // Save to backend
        this.saveTaskOrder();
      }
    },
  };

  saveTaskOrder() {
    // Your logic to persist the new order
    console.log('New task order:', this.tasks);
  }
}
```

```html
<ul sortable.bind="sortableOptions">
  <li repeat.for="task of tasks" data-id.bind="task.id" class="${task.completed ? 'completed' : ''}">
    <span class="drag-handle">⋮⋮</span>
    <span>${task.name}</span>
  </li>
</ul>

<style>
  .ghost {
    opacity: 0.4;
    background: #f0f0f0;
  }

  .chosen {
    background: #e3f2fd;
  }

  .drag {
    opacity: 0.5;
  }

  .completed {
    text-decoration: line-through;
    opacity: 0.6;
  }
</style>
```

### Kanban Board Example

```typescript
export class KanbanBoard {
  columns = [
    {
      title: 'To Do',
      tasks: ['Task 1', 'Task 2'],
    },
    {
      title: 'In Progress',
      tasks: ['Task 3'],
    },
    {
      title: 'Done',
      tasks: ['Task 4', 'Task 5'],
    },
  ];

  kanbanOptions = {
    group: 'kanban',
    animation: 150,
    ghostClass: 'ghost',
  };
}
```

```html
<div class="kanban-board">
  <div class="column" repeat.for="column of columns">
    <h3>${column.title}</h3>
    <ul sortable.bind="kanbanOptions">
      <li repeat.for="task of column.tasks">${task}</li>
    </ul>
  </div>
</div>
```

## Additional Resources

For more information about available options and advanced usage, refer to the [SortableJS documentation](https://github.com/SortableJS/Sortable).

## License

MIT
