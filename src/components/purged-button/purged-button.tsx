import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'purged-button',
  styleUrl: 'purged-button.css',
  shadow: true,
})
export class PurgedButton {

  render() {
    return (
      <Host>
        <button class="rounded bg-primary-200 font-sans px-8 py-4 text-on-primary-high">I am purged</button>
      </Host>
    );
  }

}
