import { newE2EPage } from '@stencil/core/testing';

describe('purged-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<purged-button></purged-button>');

    const element = await page.find('purged-button');
    expect(element).toHaveClass('hydrated');
  });
});
