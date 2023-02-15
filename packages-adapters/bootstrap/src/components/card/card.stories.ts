import { Meta, Story, StoryFnAureliaReturnType } from '@storybook/aurelia';
import { BsCard, BsCardHeader, BsCardBody, BsCardFooter, BsCardOverlay } from '.';
import { BsListGroup, BsListGroupItem } from '../list-group';
import { BsButton } from '../button';

import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './card.stories.css';

const variants: Array<string> = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

const cardImage: string =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200' class='img-fluid rounded mx-auto d-block' width='300' height='200'%3E%3Crect width='300' height='200' fill='%233465a4'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='26px' fill='%23729fcf'%3EImage%3C/text%3E%3C/svg%3E%3C!--%3Ca download='FILENAME.png' href='data:image/png;base64,asdasd...'%3EDownload%3C/a%3E--%3E";
//'https://upload.wikimedia.org/wikipedia/ru/thumb/f/f9/Pulpit_Friction.jpg/260px-Pulpit_Friction.jpg';

const meta: Meta = {
  title: 'Bootstrap / Components / Card',
  component: BsCard,
};
export default meta;

export const Default: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardBody],
  props: {
    innerHtml: `
        <bs-card-body>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </bs-card-body>
  `,
    ...args,
  },
});

export const TitlesTextLinks: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardBody],
  template: `
    <bs-card class="story-size">
        <bs-card-body>
            <h5>Card title</h5>
            <h6 class="mb-2 text-muted">Card subtitle</h6>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#">Card link</a> <a href="#" class="ms-2">Another link</a>
        </bs-card-body>
    </bs-card>
  `,
  props: {
    ...args,
  },
});

export const ListGroups: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsListGroup, BsListGroupItem],
  template: `
    <bs-card class="story-size">
        <bs-list-group items.bind="items" type="flush">
          <bs-list-group-item
            repeat.for="item of items"
            label.bind="item.label"
            disabled.bind="item.disabled"
            badge.bind="item.badge"
            variant.bind="item.variant"
            active.bind="item.active"
          ></bs-list-group-item>
        </bs-list-group>
    </bs-card>
  `,
  props: {
    items: [{ label: 'An item' }, { label: 'A second item' }, { label: 'A third item' }],
    ...args,
  },
});

export const ListGroupsWithHeader: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardHeader, BsListGroup, BsListGroupItem],
  template: `
    <bs-card class="story-size">
        <bs-card-header>Featured</bs-card-header>
      <bs-list-group items.bind="items" type="flush">
        <bs-list-group-item
        repeat.for="item of items"
        label.bind="item.label"
        disabled.bind="item.disabled"
        badge.bind="item.badge"
        variant.bind="item.variant"
        active.bind="item.active"
      ></bs-list-group-item>
    </bs-list-group>
    </bs-card>
  `,
  props: {
    items: [{ label: 'An item' }, { label: 'A second item' }, { label: 'A third item' }],
    ...args,
  },
});

export const ListGroupsWithFooter: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardFooter, BsListGroup, BsListGroupItem],
  template: `
    <bs-card class="story-size">
        <bs-list-group items.bind="items" type="flush">
            <bs-list-group-item
              repeat.for="item of items"
              label.bind="item.label"
              disabled.bind="item.disabled"
              badge.bind="item.badge"
              variant.bind="item.variant"
              active.bind="item.active"
            ></bs-list-group-item>
        </bs-list-group>
        <bs-card-footer>Featured</bs-card-footer>
    </bs-card>
  `,
  props: {
    items: [{ label: 'An item' }, { label: 'A second item' }, { label: 'A third item' }],
    ...args,
  },
});

export const MultipleContentTypes: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardBody, BsListGroup, BsListGroupItem],
  template: `
    <bs-card class="story-size">
        <img src="${cardImage}" alt="">
        <bs-card-body>
            <h5>Card title</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </bs-card-body>
        <bs-list-group items.bind="items" type="flush">
          <bs-list-group-item
          repeat.for="item of items"
          label.bind="item.label"
          disabled.bind="item.disabled"
          badge.bind="item.badge"
          variant.bind="item.variant"
          active.bind="item.active"
        ></bs-list-group-item>
        </bs-list-group>
        <bs-card-body>
            <a href="#" class="card-link">Card link</a> <a href="#" class="card-link">Another link</a>
        </bs-card-body>
    </bs-card>
  `,
  props: {
    items: [{ label: 'An item' }, { label: 'A second item' }, { label: 'A third item' }],
    image: cardImage,
    ...args,
  },
});

export const Header: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardBody, BsCardHeader, BsButton],
  template: `
    <bs-card class="story-size">
    <bs-card-header>Featured</bs-card-header>
    <bs-card-body>
      <h5>Special title treatment</h5>
      <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <bs-button>Go somewhere</bs-button>
    </bs-card-body>
    </bs-card>
  `,
  props: {
    ...args,
  },
});

export const HeaderStyling: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardHeader, BsCardBody, BsButton],
  template: `
          <bs-card class="mb-3 story-size">
          <h5 class="card-header">Featured</h5>
          <bs-card-body>
              <h5>Special title treatment</h5>
              <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <bs-button>Go somewhere</bs-button>
          </bs-card-body>
          </bs-card>
          <bs-card class="story-size">
            <bs-card-header class="bg-transparent">Featured</bs-card-header>
          <bs-card-body>
              <h5>Special title treatment</h5>
              <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <bs-button>Go somewhere</bs-button>
          </bs-card-body>
          </bs-card>
  `,
  props: {
    ...args,
  },
});

export const ContentStyling: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardHeader, BsCardBody],
  props: {
    innerHtml: `
          <bs-card-header>Quote</bs-card-header>
          <bs-card-body>
              <blockquote class="blockquote mb-0">
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</</footer>
              </blockquote>
          </bs-card-body>
  `,
    ...args,
  },
});

export const SizingUsingGrid: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardBody, BsButton],
  template: `
      <div class="row">
        <div class="col-sm-6">
          <bs-card>
            <bs-card-body>
              <h5 class="card-title">Special title treatment</h5>
              <p>With supporting text below as a natural lead-in to additional content.</p>
              <bs-button>Go somewhere</bs-button>
            </bs-card-body>
          </bs-card>
        </div>
        <div class="col-sm-6">
          <bs-card>
            <bs-card-body>
              <h5 class="card-title">Special title treatment</h5>
              <p>With supporting text below as a natural lead-in to additional content.</p>
              <bs-button>Go somewhere</bs-button>
            </bs-card-body>
          </bs-card>
        </div>
      </div>
  `,
  props: {
    ...args,
  },
});

export const SizingUsingUtilities: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardBody, BsButton],
  template: `
          <bs-card class="w-75">
            <bs-card-body>
              <h5 class="card-title">Special title treatment</h5>
              <p>With supporting text below as a natural lead-in to additional content.</p>
              <bs-button>Go somewhere</bs-button>
            </bs-card-body>
          </bs-card>
          <bs-card class="w-50">
            <bs-card-body>
              <h5 class="card-title">Special title treatment</h5>
              <p>With supporting text below as a natural lead-in to additional content.</p>
              <bs-button>Go somewhere</bs-button>
            </bs-card-body>
          </bs-card>
  `,
  props: {
    ...args,
  },
});

export const SizingUsingCusomCSS: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardBody, BsButton],
  template: `
          <bs-card style="width: 18rem;">
            <bs-card-body>
              <h5 class="card-title">Special title treatment</h5>
              <p>With supporting text below as a natural lead-in to additional content.</p>
              <bs-button>Go somewhere</bs-button>
            </bs-card-body>
          </bs-card>
  `,
  props: {
    ...args,
  },
});

export const TextAlignment: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardBody, BsButton],
  template: `
          <bs-card class="story-size mb-3 \${align ? \`text-\${align}\` : ''}" repeat.for="align of alignTypes">
            <bs-card-body>
              <h5 class="card-title">Special title treatment</h5>
              <p>With supporting text below as a natural lead-in to additional content.</p>
              <bs-button>Go somewhere</bs-button>
            </bs-card-body>
          </bs-card>
  `,
  props: {
    ...args,
    alignTypes: ['', 'center', 'end'],
  },
});

export const CardLayoutGroups: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardBody],
  template: `
    <div class="card-group">
        <bs-card>
          <img src="${cardImage}" alt="" class="card-img-top">
          <bs-card-body>
            <h5>Card title</h5>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
            <p><small class="text-muted">Last updated 3 minutes ago</small></p>
          </bs-card-body>
        </bs-card>
        <bs-card>
          <img src="${cardImage}" alt="" class="card-img-top">
          <bs-card-body>
            <h5>Card title</h5>
            <p>This card has supporting text below as a natural lead-in to additional content.</p>
            <p><small class="text-muted">Last updated 3 minutes ago</small></p>
          </bs-card-body>
        </bs-card>
        <bs-card>
          <img src="${cardImage}" alt="" class="card-img-top">
          <bs-card-body>
            <h5>Card title</h5>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p><small class="text-muted">Last updated 3 minutes ago</small></p>
          </bs-card-body>
        </bs-card>
    </div>
`,
  props: {
    ...args,
  },
});

export const CardLayoutGroupsWithFooters: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardFooter, BsCardBody],
  template: `
    <div class="card-group">
        <bs-card>
          <img src="${cardImage}" alt="" class="card-img-top">
          <bs-card-body>
            <h5>Card title</h5>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
          </bs-card-body>
          <bs-card-footer>Last updated 3 minutes ago</bs-card-footer>
        </bs-card>
        <bs-card>
          <img src="${cardImage}" alt="" class="card-img-top">
          <bs-card-body>
            <h5>Card title</h5>
            <p>This card has supporting text below as a natural lead-in to additional content.</p>
          </bs-card-body>
          <bs-card-footer>Last updated 3 minutes ago</bs-card-footer>
        </bs-card>
        <bs-card>
          <img src="${cardImage}" alt="" class="card-img-top">
          <bs-card-body>
            <h5>Card title</h5>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </bs-card-body>
          <bs-card-footer>Last updated 3 minutes ago</bs-card-footer>
        </bs-card>
    </div>
`,
  props: {
    ...args,
  },
});

export const GridCards2Rows: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardBody],
  template: `
  <div class="row row-cols-1 row-cols-md-2 g-4" style="width: 40rem;">
    <div class="col">
      <bs-card>
        <img src="${cardImage}" class="card-img-top" alt="">
        <bs-card-body>
          <h5 class="card-title">Card title</h5>
          <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
        </bs-card-body>
      </bs-card>
    </div>
    <div class="col">
      <bs-card>
        <img src="${cardImage}" class="card-img-top" alt="">
        <bs-card-body>
          <h5 class="card-title">Card title</h5>
          <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
        </bs-card-body>
      </bs-card>
    </div>
    <div class="col">
      <bs-card>
        <img src="${cardImage}" class="card-img-top" alt="">
        <bs-card-body>
          <h5 class="card-title">Card title</h5>
          <p>This is a card with supporting text below as a natural lead-in to additional content.</p>
        </bs-card-body>
      </bs-card>
    </div>
    <div class="col">
      <bs-card>
        <img src="${cardImage}" class="card-img-top" alt="">
        <bs-card-body>
          <h5 class="card-title">Card title</h5>
          <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
        </bs-card-body>
      </bs-card>
    </div>
  </div>
`,
  props: {
    ...args,
  },
});

export const GridCards3rows: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardBody],
  template: `
  <div class="row row-cols-1 row-cols-md-3 g-4" style="width: 50rem;">
    <div class="col">
      <bs-card>
        <img src="${cardImage}" class="card-img-top" alt="">
        <bs-card-body>
          <h5 class="card-title">Card title</h5>
          <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
        </bs-card-body>
      </bs-card>
    </div>
    <div class="col">
      <bs-card>
        <img src="${cardImage}" class="card-img-top" alt="">
        <bs-card-body>
          <h5 class="card-title">Card title</h5>
          <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
        </bs-card-body>
      </bs-card>
    </div>
    <div class="col">
      <bs-card>
        <img src="${cardImage}" class="card-img-top" alt="">
        <bs-card-body>
          <h5 class="card-title">Card title</h5>
          <p>This is a card with supporting text below as a natural lead-in to additional content.</p>
        </bs-card-body>
      </bs-card>
    </div>
    <div class="col">
      <bs-card>
        <img src="${cardImage}" class="card-img-top" alt="">
        <bs-card-body>
          <h5 class="card-title">Card title</h5>
          <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
        </bs-card-body>
      </bs-card>
    </div>
  </div>
`,
  props: {
    ...args,
  },
});

export const ImagesTop: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardBody],
  template: `
    <bs-card class="story-size">
        <img src="${cardImage}" alt="">
        <bs-card-body>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </bs-card-body>
    </bs-card>
  `,
  props: {
    ...args,
  },
});

export const ImagesBottom: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardBody],
  template: `
    <bs-card class="story-size">
        <bs-card-body>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </bs-card-body>
        <img src="${cardImage}" alt="">
    </bs-card>
  `,
  props: {
    ...args,
  },
});

export const ImageOverlay: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardOverlay],
  template: `
    <bs-card class="story-size">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200' class='img-fluid rounded mx-auto d-block' width='300' height='200'%3E%3Crect width='300' height='200' fill='%23cbe0ef'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='26px' fill='%23ffffff'%3EImage%3C/text%3E%3C/svg%3E%3C!--%3Ca download='FILENAME.png' href='data:image/png;base64,asdasd...'%3EDownload%3C/a%3E--%3E" alt="">
        <bs-card-overlay class="story-size">
            <h5>Card title</h5>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
            <p><small>Last updated 3 minutes ago</small></p>
        </bs-card-overlay>
    </bs-card>
  `,
  props: {
    ...args,
  },
});

export const ImageHorizontal: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardBody],
  template: `
    <bs-card style="width: 30rem;">
      <div class="row g-0">
        <div class="col-md-4">
               <img class="img-fluid rounded-start" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 250' class='img-fluid rounded mx-auto d-block' width='150' height='250'%3E%3Crect width='150' height='250' fill='%233465a4'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='26px' fill='%23729fcf'%3EImage%3C/text%3E%3C/svg%3E%3C!--%3Ca download='FILENAME.png' href='data:image/png;base64,asdasd...'%3EDownload%3C/a%3E--%3E" alt="">
        </div>
        <div class="col-md-8">
          <bs-card-body>
            <h5>Card title</h5>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
            <p><small class="text-muted">Last updated 3 minutes ago</small></p>
          </bs-card-body>
        </div>
      </div>
  </bs-card>`,
  props: {
    ...args,
  },
});

export const CardStyles: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardHeader, BsCardBody],
  template: `
    <bs-card class="mb-3 story-size" variant.bind="variant" repeat.for="variant of variants">
      <bs-card-header>Header</bs-card-header>
      <bs-card-body>
        <h5>Card title</h5>
        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
      </bs-card-body>
    </bs-card>
  `,
  props: {
    ...args,
    variants: variants,
  },
});

export const CardBorderStyles: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardHeader, BsCardBody],
  template: `
    <bs-card class="border-\${variant} mb-3 story-size"  repeat.for="variant of variants">
          <bs-card-header class="border-\${variant} bg-transparent">Header</bs-card-header>
          <bs-card-body>
            <h5>Card title</h5>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
          </bs-card-body>
    </bs-card>
`,
  props: {
    ...args,
    variants: variants,
  },
});

export const CardBorderAndTextStyles: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardHeader, BsCardBody],
  template: `
    <bs-card class="border-\${variant} mb-3 story-size" repeat.for="variant of variants">
          <bs-card-header class="text-\${variant} border-\${variant} bg-transparent">Header</bs-card-header>
          <bs-card-body class="text-\${variant}">
            <h5>Card title</h5>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
          </bs-card-body>
    </bs-card>
`,
  props: {
    ...args,
    variants: variants,
  },
});

// todo Проблема: стиль card-header (серый) срабатывает под табами
export const NavigationTabs: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardHeader, BsCardBody, BsButton],
  template: `
    <p style="color: red;">Проблема: стиль card-header (серый) срабатывает под табами </p>
    <bs-card class="text-center">
      <bs-card-header>
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="true" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        </bs-card-header>
          <bs-card-body class="text-\${variant}">
            <h5>Card title</h5>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
            <bs-button>Go somewhere</bs-button>
          </bs-card-body>
    </bs-card>
`,
  props: {
    ...args,
  },
});

export const NavigationButtons: Story = (args): StoryFnAureliaReturnType => ({
  components: [BsCardHeader, BsCardBody, BsButton],
  template: `
    <bs-card class="text-center">
      <bs-card-header>
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        </bs-card-header>
          <bs-card-body class="text-\${variant}">
            <h5>Card title</h5>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
            <bs-button>Go somewhere</bs-button>
          </bs-card-body>
    </bs-card>
`,
  props: {
    ...args,
  },
});
