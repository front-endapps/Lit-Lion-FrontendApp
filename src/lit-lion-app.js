import { LitElement, html, css } from 'lit';
import './components/HeaderComponent';
import './components/FooterComponent';
import './components/MainSection';

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
    <main-section></main-section>
    <footer-component></footer-component>
    `;
  }
}

customElements.define('lit-lion-app', LitLionApp);