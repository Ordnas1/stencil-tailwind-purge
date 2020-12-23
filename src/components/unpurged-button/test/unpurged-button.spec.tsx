import { newSpecPage } from '@stencil/core/testing';
import { UnpurgedButton } from '../unpurged-button';

describe('unpurged-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UnpurgedButton],
      html: `<unpurged-button></unpurged-button>`,
    });
    expect(page.root).toEqualHtml(`
      <unpurged-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </unpurged-button>
    `);
  });
});
