import { Component, h } from '@stencil/core';

@Component({
  tag: 'unpurged-button',
  styleUrl: 'unpurged-button.css',
  shadow: true,
})
export class UnpurgedButton {
  render() {
    return <button class="rounded bg-purple-200 font-sans px-8 py-4">I am a NOT purged</button>;
  }
}
