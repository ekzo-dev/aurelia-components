import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './card.stories.css';

import { VARIANTS } from '../../constants';

import { BsCard } from '.';

const meta = {
  title: 'Bootstrap / Components / Card',
  component: BsCard,
  render: () => ({
    template: `<bs-card variant.bind="variant">
<bs-card-body>
    This is some text within a card body.
</bs-card-body>
</bs-card>`,
  }),
  argTypes: {
    variant: {
      control: 'select',
      options: VARIANTS,
    },
  },
};

export default meta;

export const Overview = {
  args: {
    variant: undefined,
  },
};

export const MultipleContentTypes = {
  render: () => ({
    template: `<bs-card class="story-size" variant.bind="variant">
     <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="36%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
    <bs-card-body>
        <h5>Card title</h5>
        <p class="card-text">Some quick  text to build on the card title and make up the bulk of the card's content.</p>
    </bs-card-body>
    <bs-list-group flush.bind="true">
        <div bs-list-group-item.bind="variant">An item</div>
        <div bs-list-group-item.bind="variant">A second item</div>
        <div bs-list-group-item.bind="variant">A third item</div>
    </bs-list-group>
    <bs-card-body>
        <a href="#" target="_self" class="card-link">Card link</a> <a href="#" class="card-link">Another link</a>
    </bs-card-body>
</bs-card>`,
  }),
  args: {
    variant: undefined,
  },
};

export const TitlesTextLinks = {
  render: () => ({
    template: `<bs-card class="story-size" variant.bind="variant">
    <bs-card-body>
        <h5>Card title</h5>
        <p class="card-text">Some quick  text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" target="_self">Card link</a> <a href="#" class="ms-2">Another link</a>
    </bs-card-body>
</bs-card>`,
  }),
  args: {
    variant: undefined,
  },
};

export const ImagesTop = {
  render: () => ({
    template: `<bs-card class="story-size" variant.bind="variant">
    <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="36%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
    <bs-card-body>
    <p class="card-text">Some quick  text to build on the card title and make up the bulk of the card's content.</p>
    </bs-card-body>
</bs-card>`,
  }),
  args: {
    variant: undefined,
  },
};

export const ImagesBottom = {
  render: () => ({
    template: `<bs-card class="story-size" variant.bind="variant">
    <bs-card-body>
    <p class="card-text">Some quick  text to build on the card title and make up the bulk of the card's content.</p>
    </bs-card-body>
    <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="36%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
</bs-card>`,
  }),
  args: {
    variant: undefined,
  },
};

export const ImageOverlay = {
  render: () => ({
    template: `<bs-card class="story-size" variant.bind="variant">
        <svg class="img-fluid rounded mx-auto d-block" width="100%" height="210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="36%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
    <bs-card-overlay>
        <h5>Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
        <p class="card-text"><small>Last updated 3 minutes ago</small></p>
    </bs-card-overlay>
</bs-card>`,
  }),
  args: {
    variant: undefined,
  },
};

export const ImageHorizontal = {
  render: () => ({
    template: `<bs-card style="width: 30rem;" variant.bind="variant">
  <div class="row g-0">
    <div class="col-md-4">
        <svg class="img-fluid rounded-start" width="100%" height="210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="30%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
    </div>
    <div class="col-md-8 ps-3">
      <bs-card-body class="p-3">
        <h5>Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 minutes ago</small></p>
      </bs-card-body>
    </div>
  </div>
</bs-card>`,
  }),
  args: {
    variant: undefined,
  },
};

export const ListGroups = {
  render: () => ({
    template: `<div>
<bs-card class="mb-3 story-size" variant.bind="variant">
    <bs-list-group flush.bind="true">
      <div bs-list-group-item.bind="variant">An item</div>
      <div bs-list-group-item.bind="variant">A second item</div>
      <div bs-list-group-item.bind="variant">A third item</div>
    </bs-list-group>
</bs-card>
<bs-card class="mb-3 story-size" variant.bind="variant">
    <bs-card-header>Featured</bs-card-header>
    <bs-list-group flush.bind="true">
      <div bs-list-group-item.bind="variant">An item</div>
      <div bs-list-group-item.bind="variant">A second item</div>
      <div bs-list-group-item.bind="variant">A third item</div>
    </bs-list-group>
</bs-card>
<bs-card class="story-size" variant.bind="variant">
    <bs-list-group flush.bind="true">
      <div bs-list-group-item.bind="variant">An item</div>
      <div bs-list-group-item.bind="variant">A second item</div>
      <div bs-list-group-item.bind="variant">A third item</div>
    </bs-list-group>
    <bs-card-footer>Featured</bs-card-footer>
</bs-card>
</div>`,
  }),
  args: {
    variant: undefined,
  },
};

export const Header = {
  render: () => ({
    template: `<div>
<bs-card class="mb-3 story-size" variant.bind="variant">
  <bs-card-header>Featured</bs-card-header>
  <bs-card-body>
    <h5>Special title treatment</h5>
    <p class="card-text">Some quick  text to build on the card title and make up the bulk of the card's content.</p>
    <button bs-button>Go somewhere</button>
  </bs-card-body>
</bs-card>
<bs-card class="mb-3 story-size" variant.bind="variant">
  <h5 class="card-header">Featured</h5>
  <bs-card-body>
      <h5>Special title treatment</h5>
      <p class="card-text">Some quick  text to build on the card title and make up the bulk of the card's content.</p>
      <button bs-button>Go somewhere</button>
  </bs-card-body>
</bs-card>
<bs-card class="story-size" variant.bind="variant">
  <bs-card-header class="bg-transparent">Featured</bs-card-header>
    <bs-card-body>
        <h5>Special title treatment</h5>
        <p class="card-text">Some quick  text to build on the card title and make up the bulk of the card's content.</p>
        <button bs-button>Go somewhere</button>
  </bs-card-body>
</bs-card>
</div>`,
  }),
  args: {
    variant: undefined,
  },
};

export const SizingUsingGrid = {
  render: () => ({
    template: `<div class="row">
  <div class="col-sm-6">
    <bs-card variant.bind="variant">
      <bs-card-body>
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <button bs-button>Go somewhere</button>
      </bs-card-body>
    </bs-card>
  </div>
  <div class="col-sm-6">
    <bs-card variant.bind="variant">
      <bs-card-body>
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <button bs-button>Go somewhere</button>
      </bs-card-body>
    </bs-card>
  </div>
</div>`,
  }),
  args: {
    variant: undefined,
  },
};

export const SizingUsingUtilities = {
  render: () => ({
    template: `<div>
<bs-card class="w-75 mb-3" variant.bind="variant">
  <bs-card-body>
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <button bs-button>Go somewhere</button>
  </bs-card-body>
</bs-card>
<bs-card class="w-50 mb-3" variant.bind="variant">
  <bs-card-body>
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <button bs-button>Go somewhere</button>
  </bs-card-body>
</bs-card>
<bs-card class="w-25" variant.bind="variant">
  <bs-card-body>
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <button bs-button>Go somewhere</button>
  </bs-card-body>
</bs-card>
</div>`,
  }),
  args: {
    variant: undefined,
  },
};

export const TextAlignment = {
  render: () => ({
    template: `<div>
<bs-card class="story-size mb-3" variant.bind="variant">
  <bs-card-body>
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <button bs-button>Go somewhere</button>
  </bs-card-body>
</bs-card>
<bs-card class="story-size mb-3 text-center" variant.bind="variant">
  <bs-card-body>
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <button bs-button>Go somewhere</button>
  </bs-card-body>
</bs-card>
<bs-card class="story-size mb-3 text-end" variant.bind="variant">
  <bs-card-body>
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <button bs-button>Go somewhere</button>
  </bs-card-body>
</bs-card>
</div>`,
  }),
  args: {
    variant: undefined,
  },
};

export const CardGroup = {
  render: () => ({
    template: `
<div class="card-group">
    <bs-card variant.bind="variant">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="40%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <bs-card-body>
        <h5>Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
      </bs-card-body>
      <bs-card-footer><small class="text-muted">Last updated 3 minutes ago</small></bs-card-footer>
    </bs-card>
    <bs-card variant.bind="variant">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="40%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <bs-card-body>
        <h5>Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </bs-card-body>
      <bs-card-footer><small class="text-muted">Last updated 3 minutes ago</small></bs-card-footer>
    </bs-card>
    <bs-card variant.bind="variant">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="40%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <bs-card-body>
        <h5>Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </bs-card-body>
       <bs-card-footer ><small class="text-muted">Last updated 3 minutes ago</small></bs-card-footer>
    </bs-card>
</div>
`,
  }),
  args: {
    variant: undefined,
  },
};

export const GridCards2Rows = {
  render: () => ({
    template: `<div class="row row-cols-1 row-cols-md-2 g-4" style="width: 40rem;">
  <div class="col">
    <bs-card variant.bind="variant">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="40%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <bs-card-body>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </bs-card-body>
    </bs-card>
  </div>
  <div class="col">
    <bs-card variant.bind="variant">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="40%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <bs-card-body>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
      </bs-card-body>
    </bs-card>
  </div>
  <div class="col">
    <bs-card variant.bind="variant">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="40%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <bs-card-body>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a card with supporting text below as a natural lead-in to additional content.</p>
      </bs-card-body>
    </bs-card>
  </div>
  <div class="col">
    <bs-card variant.bind="variant">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="40%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <bs-card-body>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
      </bs-card-body>
    </bs-card>
  </div>
</div>`,
  }),
  args: {
    variant: undefined,
  },
};

export const GridCards3rows = {
  render: () => ({
    template: `<div class="row row-cols-1 row-cols-md-3 g-4" style="width: 50rem;">
  <div class="col">
    <bs-card variant.bind="variant">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="40%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <bs-card-body>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
      </bs-card-body>
    </bs-card>
  </div>
  <div class="col">
    <bs-card variant.bind="variant">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="40%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <bs-card-body>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
      </bs-card-body>
    </bs-card>
  </div>
  <div class="col">
    <bs-card variant.bind="variant">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="40%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <bs-card-body>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
      </bs-card-body>
    </bs-card>
  </div>
  <div class="col">
    <bs-card variant.bind="variant">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="40%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <bs-card-body>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
      </bs-card-body>
    </bs-card>
  </div>
</div>`,
  }),
  args: {
    variant: undefined,
  },
};

export const CardBorderAndText = {
  render: () => ({
    template: `<bs-card class="mb-3 story-size border-\${variant}">
  <bs-card-header class="border-\${variant}">Header</bs-card-header>
    <bs-card-body class="text-\${variant}">
      <h5>Primary card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.</p>
  </bs-card-body>
</bs-card>`,
  }),
  args: {
    variant: 'primary',
  },
};
