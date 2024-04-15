import { html, render } from '../vendor.js';
import { OBElement } from '../base/element.js';

export class OBField extends OBElement {
  async connectedCallback(renderComponent) {
    if (renderComponent !== false) await this.renderComponent();
  }

  renderView() {
    render(html`
            ${this.value}
        `, this.root);
  }

  renderEdit() {
    render(html`<input id="input" type="text" />`, this.root);
  }

  scss() {
    return `
        :host {
            display: inline-block;
        }
    `;
  }

  get value() {
    if (this.root.querySelector('input')) {
      return this.root.querySelector('input').value;
    }
  }

  set value(value) {
    if (! this.root.querySelector('input')) {
      return;
    }
    
    this.root.querySelector('input').value = value;
    this.renderComponent();
  }

  get editable() {
    return this.hasAttribute('data-edit');
  }

  set editable(value) {
    if (value) {
      this.setAttribute('data-edit', '');
    } else {
      this.removeAttribute('data-edit');
    }
    
    this.renderComponent();
  }

  async renderComponent() {
    const edit = this.hasAttribute('data-edit');
    if (edit) this.renderEdit();
    else this.renderView();
  }
}