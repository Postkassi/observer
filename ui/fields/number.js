import { OBField } from "../base/field.js";
import { html, render } from "../vendor.js";

class OBFieldNumber extends OBField {
    renderEdit() {
        render(
            html` <input id="input" type="number" value=${this._value} onchange=${this.inputChange.bind(this)} /> `,
            this.root,
        );
    }

    renderView() {
        render(html` <div id="view">${this._value}</div> `, this.root);
    }

    inputChange(event) {
        this.value = event.target.value;
    }

    set value(value) {
        this._value = parseInt(value);
        this.refresh();
    }

    get value() {
        return this._value;
    }

    scss() {
        return `
            :host {
                display: inline-block; 
                
                input {
                    color: #2e3436;
                    font-size: 13px;
                    border-radius: 2px;
                    border: 0;
                    padding: 5px;
                    width: 250px;
                    vertical-align: middle;
                }
            }
        `;
    }
}

customElements.define("ob-field-number", OBFieldNumber);
