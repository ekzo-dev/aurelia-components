// Mock SortableJS before importing anything
const mockCreate = jest.fn();
const mockDestroy = jest.fn();
const mockOption = jest.fn();

jest.mock('sortablejs', () => ({
  __esModule: true,
  default: {
    create: (...args: any[]) => {
      mockCreate(...args);

      return {
        destroy: mockDestroy,
        option: mockOption,
      };
    },
  },
}));

// Mock Aurelia resolve decorator
let mockHostElement: HTMLElement;

jest.mock('aurelia', () => {
  const actual = jest.requireActual('aurelia');

  return {
    ...actual,
    resolve: jest.fn(() => mockHostElement),
  };
});

// Import after mocking
import { Sortable } from '../src/attributes/sortable';

describe('Sortable Custom Attribute', () => {
  let sortable: Sortable;

  beforeEach(() => {
    // Reset all mocks
    jest.clearAllMocks();
    mockCreate.mockClear();
    mockDestroy.mockClear();
    mockOption.mockClear();

    // Create mock host element
    mockHostElement = document.createElement('ul');

    // Create sortable instance
    sortable = new Sortable();

    // Mock $controller with bindables definition
    const bindables: Record<string, any> = {};

    [
      'group',
      'sort',
      'delay',
      'delayOnTouchOnly',
      'touchStartThreshold',
      'disabled',
      'store',
      'animation',
      'easing',
      'handle',
      'filter',
      'preventOnFilter',
      'draggable',
      'dataIdAttr',
      'ghostClass',
      'chosenClass',
      'dragClass',
      'swapThreshold',
      'invertSwap',
      'invertedSwapThreshold',
      'direction',
      'scrollSensitivity',
      'scrollSpeed',
      'bubbleScroll',
      'dragoverBubble',
      'removeCloneOnHide',
      'emptyInsertThreshold',
      'setData',
      'forceFallback',
      'fallbackClass',
      'fallbackOnBody',
      'fallbackTolerance',
      'onChoose',
      'onUnchoose',
      'onStart',
      'onEnd',
      'onAdd',
      'onUpdate',
      'onSort',
      'onRemove',
      'onFilter',
      'onMove',
      'onClone',
      'onChange',
    ].forEach((name) => {
      bindables[name] = {};
    });

    (sortable as any).$controller = {
      definition: {
        bindables,
      },
    };
  });

  afterEach(() => {
    if (sortable?.sortable) {
      sortable.detaching();
    }
  });

  describe('Initialization', () => {
    it('should create sortable instance on attached', () => {
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(mockHostElement, expect.any(Object));
      expect(sortable.sortable).toBeDefined();
    });

    it('should initialize with empty options when no bindables are set', () => {
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(mockHostElement, {});
    });
  });

  describe('Cleanup', () => {
    it('should destroy sortable instance on detaching', () => {
      sortable.attached();
      sortable.detaching();

      expect(mockDestroy).toHaveBeenCalled();
      expect(sortable.sortable).toBeUndefined();
    });

    it('should handle detaching without sortable instance', () => {
      expect(() => sortable.detaching()).not.toThrow();
      expect(mockDestroy).not.toHaveBeenCalled();
    });
  });

  describe('Options Passing - Simple Types', () => {
    it('should pass animation option', () => {
      sortable.animation = 300;
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(mockHostElement, expect.objectContaining({ animation: 300 }));
    });

    it('should pass delay option', () => {
      sortable.delay = 100;
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(mockHostElement, expect.objectContaining({ delay: 100 }));
    });

    it('should pass boolean options', () => {
      sortable.sort = false;
      sortable.disabled = true;
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(
        mockHostElement,
        expect.objectContaining({ sort: false, disabled: true })
      );
    });

    it('should pass string options', () => {
      sortable.handle = '.handle';
      sortable.draggable = '.item';
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(
        mockHostElement,
        expect.objectContaining({ handle: '.handle', draggable: '.item' })
      );
    });
  });

  describe('Options Passing - Complex Types', () => {
    it('should pass group as string', () => {
      sortable.group = 'shared';
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(mockHostElement, expect.objectContaining({ group: 'shared' }));
    });

    it('should pass group as object', () => {
      const groupOptions = {
        name: 'shared',
        pull: true,
        put: true,
      };

      sortable.group = groupOptions;
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(mockHostElement, expect.objectContaining({ group: groupOptions }));
    });

    it('should pass CSS class options', () => {
      sortable.ghostClass = 'ghost';
      sortable.chosenClass = 'chosen';
      sortable.dragClass = 'dragging';
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(
        mockHostElement,
        expect.objectContaining({
          ghostClass: 'ghost',
          chosenClass: 'chosen',
          dragClass: 'dragging',
        })
      );
    });
  });

  describe('Options Passing - Callbacks', () => {
    it('should pass event callback functions', () => {
      const onStart = jest.fn();
      const onEnd = jest.fn();

      sortable.onStart = onStart;
      sortable.onEnd = onEnd;
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(mockHostElement, expect.objectContaining({ onStart, onEnd }));
    });

    it('should pass all event callbacks', () => {
      const onChoose = jest.fn();
      const onUnchoose = jest.fn();
      const onAdd = jest.fn();
      const onUpdate = jest.fn();
      const onRemove = jest.fn();

      sortable.onChoose = onChoose;
      sortable.onUnchoose = onUnchoose;
      sortable.onAdd = onAdd;
      sortable.onUpdate = onUpdate;
      sortable.onRemove = onRemove;
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(
        mockHostElement,
        expect.objectContaining({
          onChoose,
          onUnchoose,
          onAdd,
          onUpdate,
          onRemove,
        })
      );
    });
  });

  describe('Options Filtering', () => {
    it('should not pass undefined options', () => {
      sortable.animation = 300;
      sortable.attached();

      const calledOptions = mockCreate.mock.calls[0][1];

      expect(calledOptions).toEqual({ animation: 300 });
      expect(Object.keys(calledOptions).length).toBe(1);
    });

    it('should pass multiple defined options', () => {
      sortable.animation = 300;
      sortable.handle = '.handle';
      sortable.disabled = false;
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(
        mockHostElement,
        expect.objectContaining({
          animation: 300,
          handle: '.handle',
          disabled: false,
        })
      );
    });

    it('should pass zero as valid value', () => {
      sortable.delay = 0;
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(mockHostElement, expect.objectContaining({ delay: 0 }));
    });

    it('should pass false as valid value', () => {
      sortable.sort = false;
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(mockHostElement, expect.objectContaining({ sort: false }));
    });
  });

  describe('Property Changes', () => {
    it('should call sortable.option when property changes', () => {
      sortable.attached();

      sortable.propertyChanged('animation', 500);

      expect(mockOption).toHaveBeenCalledWith('animation', 500);
    });

    it('should handle multiple property changes', () => {
      sortable.attached();

      sortable.propertyChanged('animation', 500);
      sortable.propertyChanged('disabled', true);

      expect(mockOption).toHaveBeenCalledTimes(2);
      expect(mockOption).toHaveBeenNthCalledWith(1, 'animation', 500);
      expect(mockOption).toHaveBeenNthCalledWith(2, 'disabled', true);
    });
  });

  describe('Advanced Options', () => {
    it('should pass swap options', () => {
      sortable.swapThreshold = 0.5;
      sortable.invertSwap = true;
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(
        mockHostElement,
        expect.objectContaining({
          swapThreshold: 0.5,
          invertSwap: true,
        })
      );
    });

    it('should pass scroll options', () => {
      sortable.scrollSensitivity = 30;
      sortable.scrollSpeed = 10;
      sortable.bubbleScroll = true;
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(
        mockHostElement,
        expect.objectContaining({
          scrollSensitivity: 30,
          scrollSpeed: 10,
          bubbleScroll: true,
        })
      );
    });

    it('should pass fallback options', () => {
      sortable.forceFallback = true;
      sortable.fallbackClass = 'fallback';
      sortable.fallbackOnBody = true;
      sortable.fallbackTolerance = 5;
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(
        mockHostElement,
        expect.objectContaining({
          forceFallback: true,
          fallbackClass: 'fallback',
          fallbackOnBody: true,
          fallbackTolerance: 5,
        })
      );
    });
  });

  describe('Edge Cases', () => {
    it('should handle filter as string', () => {
      sortable.filter = '.ignore';
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(mockHostElement, expect.objectContaining({ filter: '.ignore' }));
    });

    it('should handle filter as function', () => {
      const filterFn = jest.fn();

      sortable.filter = filterFn;
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(mockHostElement, expect.objectContaining({ filter: filterFn }));
    });

    it('should handle direction as string', () => {
      sortable.direction = 'horizontal';
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(mockHostElement, expect.objectContaining({ direction: 'horizontal' }));
    });

    it('should handle direction as function', () => {
      const directionFn = jest.fn();

      sortable.direction = directionFn as any;
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(mockHostElement, expect.objectContaining({ direction: directionFn }));
    });

    it('should handle setData callback', () => {
      const setDataFn = jest.fn();

      sortable.setData = setDataFn;
      sortable.attached();

      expect(mockCreate).toHaveBeenCalledWith(mockHostElement, expect.objectContaining({ setData: setDataFn }));
    });
  });
});
