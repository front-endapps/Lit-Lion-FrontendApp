import { LitElement, html, css } from "lit";
import "../../node_modules/@lion/form/lion-form";
import "../../node_modules/@lion/input/lion-input";
import "../../node_modules/@lion/button/lion-button";

export class SignInModal extends LitElement {
  static styles = css`
   .modal-content {
      background-color: #f0f0f0;
      border-radius: 12px;
      padding: 20px;
      max-width: 400px;
      width: 100%;
    }
  `;

  render() {
    return html`
        <div class="modal-content">
          <h2>Sign In</h2>
          <lion-form>
            <form>
              <lion-input name="username" label="Username"></lion-input>
              <lion-input
                name="password"
                label="Password"
                type="password"
              ></lion-input>
                <lion-button type="submit">Sign In</lion-button>
            </form>
          </lion-form>
        </div>
    `;
  }
}

customElements.define("sign-in-modal", SignInModal);
