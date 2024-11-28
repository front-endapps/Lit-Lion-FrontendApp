import { LitElement, html, css } from "lit";

export class MainSection extends LitElement {
  static styles = css`
    section {
      text-align: center; 
    }
  `;

  render() {
    return html`
      <section>
        <h2>My Sign In Application</h2>
        <p>Please use your credentials to access the app!</p>
      </section>
    `;
  }
}

customElements.define("main-section", MainSection);

