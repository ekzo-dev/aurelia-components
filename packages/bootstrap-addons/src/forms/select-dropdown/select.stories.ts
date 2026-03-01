// // import { BsButton, BsOffcanvas } from '@ekzo-dev/bootstrap';
// // import { extractArgTypes, Meta, Story } from '@storybook/aurelia';
// //
// // import { selectControl } from '../../../../../.storybook/helpers';
// //
// // import { BsSelectDropdown } from '.';
// //
// // export default {
// //   title: 'Ekzo / Bootstrap Addons / Forms / Select',
// //   component: BsSelectDropdown,
// //   parameters: {
// //     actions: {
// //       handles: ['change', 'input'],
// //     },
// //   },
// //   args: {
// //     label: 'Label',
// //     floatingLabel: false,
// //     valid: null,
// //   },
// //   argTypes: {
// //     bsSize: {
// //       ...extractArgTypes(BsSelectDropdown).bsSize,
// //       ...{
//   control: 'select',
//   options: ['', 'sm', 'lg'],
// },
// //     },
// //   },
// // } as Meta;
// //
// // const Overview: Story = (args) => ({
// //   props: args,
// // });
// //
// // Overview.args = {
// //   options: [
// //     { value: undefined, text: 'Select option' },
// //     { value: '1', text: 'One', disabled: true },
// //     { value: '2', text: 'Two' },
// //     { value: '3', text: 'Three', group: 'Group' },
// //   ],
// //   value: '2',
// // };
// //
// // const Multiple: Story = (args) => ({
// //   props: args,
// // });
// //
// // Multiple.args = {
// //   multiple: true,
// //   value: ['2', '3'],
// //   options: [
// //     { value: '1', text: 'One', disabled: true },
// //     { value: '2', text: 'Two' },
// //     { value: '3', text: 'Three', group: 'Group' },
// //   ],
// // };
// //
// // const LargeOptions: Story = (args) => ({
// //   props: args,
// //   template:
// //     '<bs-select value.bind="value" options.bind="options" label.bind="label" style="width: 400px; max-width: 100%"></bs-select>',
// // });
// //
// // LargeOptions.args = {
// //   options: Array.from({ length: 1000 }).map((v, i) => ({
// //     value: i.toString(),
// //     text: `Option ${i} has long content which forces dropdown menu to scale larger that select box`,
// //   })),
// // };
// //
// // const InModal: Story = (args) => ({
// //   props: args,
// //   template: `
// // <button bs-button click.trigger="offcanvas.toggle()">Open modal</button>
// // <bs-offcanvas component.ref="offcanvas">
// //   <bs-select value.bind="value" options.bind="options" label.bind="label" style="width: 100%"></bs-select>
// //   <div style="height: 2000px"></div>
// // </bs-offcanvas>`,
// //   components: [BsOffcanvas, BsButton],
// // });
// //
// // InModal.args = {
// //   options: Array.from({ length: 1000 }).map((v, i) => ({
// //     value: i.toString(),
// //     text: `Option ${i} has long content which forces dropdown menu to scale larger that select box`,
// //   })),
// // };
// //
// // // eslint-disable-next-line
// // export { Overview, Multiple, LargeOptions, InModal };
