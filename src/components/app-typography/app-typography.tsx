import { Component, Prop,Element, h } from '@stencil/core';


export type TypographyProps =  'n1' | 'n2' | 'n3' | 'n4' | 'n5' | 'n6 ' | 'd1'| 'd2'| 'd3'| 'h1'| 'h2'| 'h3'| 'menuTitle' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';



@Component({
  tag: 'app-typography',
  styleUrl: 'app-typography.scss',
  shadow: true,
})
export class AppTypography {

  @Element() el: HTMLElement;

  @Prop({mutable: true}) variant?: TypographyProps;
 
  render() {
     const variant : TypographyProps = this.variant || 'body1';
    return (
      <p class={`${variant}`}><slot/></p>
    );
  }
}
