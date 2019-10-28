import { createStyle, createMixin } from 'immutable-styles';

import { contrast_2, contrast_2__hover, contrast_4, accent_1, accent_1__hover } from '../constants/palette';
import { font_sans } from '../constants/typography';
import { focus_shadow } from '../constants/accessibility';
import { hover_transition } from '../constants/transition';

const mixins = {
  button: createMixin(
    <a>
      { font_sans }
      { hover_transition }
      color: { contrast_4 };
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
    { focus_shadow }
  </mixins.button>,

  <mixins.button className="button-secondary">
    background: { contrast_2 };
  </mixins.button>,
  <mixins.button pseudo=":hover" className="button-secondary">
    background: { contrast_2__hover };
  </mixins.button>,
  <mixins.button pseudo=":focus" className="button-secondary">
    { focus_shadow }
  </mixins.button>
];