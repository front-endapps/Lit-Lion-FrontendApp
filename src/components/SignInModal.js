import { LitElement, html, css } from "lit";
import "../../node_modules/@lion/form/lion-form";
import "../../node_modules/@lion/input/lion-input";
import "../../node_modules/@lion/button/lion-button";

export class SignInModal extends LitElement {
  static styles = css`
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .modal.open {
      display:block;
    }
    .modal-content {
      background-color: white;
      border-radius: 8px;
      padding: 20px;
      max-width: 400px;
      width: 100%;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .close {
        position: absolute;
      top: 15px;
      right: 15px;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  `;

  static properties = {
    open: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.open = false;
  }

  closeModal() {
    this.open = false;
  }


  render() {
    return html`
      <div class="modal ${this.open ? "open" : ""}">
        <div class="modal-content">
          <button class="close" @click=${this.closeModal}>&times;</button>
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
      </div>
    `;
  }
}

customElements.define("sign-in-modal", SignInModal);

