import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div class="dp-16 py-10 px-4">
      <span class="bg-secondary-200 font-sans text-on-primary-medium">Hello, World! I'm {this.getText()}</span>
      <span class="font-sans text-on-surface-high">test</span>
      </div>;
  }
}
