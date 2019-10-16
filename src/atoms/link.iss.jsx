import { createStyle } from 'immutable-styles';

import { focusShadow } from '../constants/accessibility';
import { accent_2, accent_2__hover } from '../constants/palette';
import { hoverTransition } from '../constants/transition';
import { fontSans } from '../constants/typography';

export default [
  <a className="link">
    { fontSans }
    { hoverTransition }
    border-bottom: 1px solid { accent_2 };
    color: { accent_2 };
    text-decoration: none;
  </a>,

  <a pseudo=":hover" className="link">
    color: { accent_2__hover };
  </a>,

  <a pseudo=":focus" className="link">
    { focusShadow }
  </a>
];