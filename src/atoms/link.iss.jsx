import { createStyle } from 'immutable-styles';

import { focus_shadow } from '../constants/accessibility';
import { accent_2, accent_2__hover } from '../constants/palette';
import { hover_transition } from '../constants/transition';
import { font_sans } from '../constants/typography';

export default [
  <a className="link">
    { font_sans }
    { hover_transition }
    border-bottom: 1px solid { accent_2 };
    color: { accent_2 };
    text-decoration: none;
  </a>,

  <a pseudo=":hover" className="link">
    color: { accent_2__hover };
  </a>,

  <a pseudo=":focus" className="link">
    { focus_shadow }
  </a>
];