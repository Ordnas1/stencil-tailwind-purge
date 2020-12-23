import { newSpecPage } from '@stencil/core/testing';
import { PurgedButton } from '../purged-button';

describe('purged-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PurgedButton],
      html: `<purged-button></purged-button>`,
    });
    expect(page.root).toEqualHtml(`
      <purged-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </purged-button>
    `);
  });
});
