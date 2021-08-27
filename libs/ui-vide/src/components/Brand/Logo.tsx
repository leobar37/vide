import React, {
  forwardRef,
  HtmlHTMLAttributes,
  LegacyRef,
  SVGProps,
} from 'react';

type Props = {
  direction?: 'horizontal' | 'vertical';
  color?: 'white' | 'black' | 'normal' | 'normal-black';
};

import { Base } from './base';

/**
 *  @props :
 * - direction?: 'horizontal' | 'vertical';
 *  color?: 'white' | 'black' | 'normal' | 'normal-black';
 *
 *
 */
const Logo = forwardRef<any, HtmlHTMLAttributes<SVGElement> & Props>(
  (props, ref) => {
    let info = {} as { letterColor: string; brandColor: string };

    switch (props?.color || 'normal') {
      case 'black': {
        info = {
          letterColor: '#000000',
          brandColor: '#000000',
        };
        break;
      }
      case 'normal': {
        info = {
          letterColor: '#FFFFFF',
          brandColor: '#7216F4',
        };
        break;
      }
      case 'normal-black': {
        info = {
          letterColor: '#000000',
          brandColor: '#7216F4',
        };
        break;
      }
      case 'white': {
        info = {
          letterColor: '#FFFFFF',
          brandColor: '#FFFFFF',
        };
        break;
      }
    }
    return (
      <Base
        props={props}
        ref={ref}
        lettersColor={info.letterColor}
        brand={info.brandColor}
        direction={props.direction || 'vertical'}
      ></Base>
    );
  }
);

export default Logo;
