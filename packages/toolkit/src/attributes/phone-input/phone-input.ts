// import { bindable, customAttribute, resolve } from 'aurelia';
// import { AsYouType, CountryCode } from 'libphonenumber-js';
//
// @customAttribute({
//   name: 'phone-input',
//   defaultProperty: 'country',
// })
// export class PhoneInputCustomAttribute {
//   @bindable()
//   country: CountryCode;
//
//   input: HTMLInputElement;
//
//   constructor(private readonly element: HTMLElement = resolve(HTMLElement)) {}
//
//   attaching() {
//     this.input =
//       this.element.tagName === 'INPUT' ? (this.element as HTMLInputElement) : this.element.querySelector('input');
//     this.input.addEventListener('input', this.handleInput);
//   }
//
//   detaching() {
//     this.input.removeEventListener('input', this.handleInput);
//   }
//
//   handleInput = (event: InputEvent) => {
//     this.input.value = new AsYouType().input(this.input.value);
//     //console.log();
//   };
// }
