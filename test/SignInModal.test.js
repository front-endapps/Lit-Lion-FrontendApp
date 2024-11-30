import { html, fixture, expect } from '@open-wc/testing';
import '../src/components/SignInModal.js';

describe('SignInModal', () => {
  it('should be closed by default', async () => {
    const el = await fixture(html`<sign-in-modal></sign-in-modal>`);
    const modal = el.shadowRoot.querySelector('.modal');
    expect(modal.classList.contains('open')).to.be.false;
  });
});
