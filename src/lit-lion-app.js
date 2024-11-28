import { LitElement, html, css } from 'lit';
import './components/HeaderComponent';
const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class LitLionApp extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
   
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
    <header-component></header-component>
    `;
  }
}

customElements.define('lit-lion-app', LitLionApp);