import { createStyle, createMixin } from 'immutable-styles';

import { contrast_l, contrast_l__hover, contrast_s, accent_1, accent_1__hover } from '../constants/palette';
import { fontSans } from '../constants/typography';
import { focusShadow } from '../constants/accessibility';
import { hoverTransition } from '../constants/transition';

const mixins = {
  button: createMixin(
    <a>
      { fontSans }
      { hoverTransition }
      color: { contrast_s };
      text-decoration: none;
      text-align: center;
      padding: var(--size-xs) var(--size-m);
    </a>
  )
};

export default [
  <mixins.button className="button-primary">
    background: { accent_1 };
  </mixins.button>,
  <mixins.button pseudo=":hover" className="button-primary">
    background: { accent_1__hover };
  </mixins.button>,
  <mixins.button pseudo=":focus" className="button-primary">
    { focusShadow }
  </mixins.button>,

  <mixins.button className="button-secondary">
    background: { contrast_l };
  </mixins.button>,
  <mixins.button pseudo=":hover" className="button-secondary">
    background: { contrast_l__hover };
  </mixins.button>,
  <mixins.button pseudo=":focus" className="button-secondary">
    { focusShadow }
  </mixins.button>
];