import { newE2EPage } from '@stencil/core/testing';

describe('unpurged-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<unpurged-button></unpurged-button>');

    const element = await page.find('unpurged-button');
    expect(element).toHaveClass('hydrated');
  });
});
