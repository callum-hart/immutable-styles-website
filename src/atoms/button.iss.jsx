import { createStyle, createMixin } from 'immutable-styles';
import { darken } from 'polished';

import { palette } from '../constants/palette';
import { fontSans } from '../constants/typography';
import { focusShadow } from '../constants/accessibility';
import { hoverTransition } from '../constants/transition';

const mixins = {
  button: createMixin(
    <a>
      { fontSans }
      { hoverTransition }
      text-decoration: none;
      text-align: center;
      padding: var(--size-xs) var(--size-m);
      color: {palette.lowContrast};
    </a>
  )
};

export default [
  <mixins.button className="button-primary">
    background: {palette.primaryCta};
  </mixins.button>,
  <mixins.button pseudo=":hover" className="button-primary">
    background: {darken(0.1, '#ECED69')};
  </mixins.button>,
  <mixins.button pseudo=":focus" className="button-primary">
    { focusShadow }
  </mixins.button>,

  <mixins.button className="button-secondary">
    background: {palette.secondaryCta};
  </mixins.button>,
  <mixins.button pseudo=":hover" className="button-secondary">
    background: {darken(0.1, '#F6F4F2')};
  </mixins.button>,
  <mixins.button pseudo=":focus" className="button-secondary">
    { focusShadow }
  </mixins.button>
];