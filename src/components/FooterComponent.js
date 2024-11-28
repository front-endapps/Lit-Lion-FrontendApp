import { LitElement, html, css } from "lit";

export class FooterComponent extends LitElement {
  static styles = css`
  
  `;

  render() {
    return html`
      <p>Footer</p>
    `;
  }
}

customElements.define("footer-component", FooterComponent);
