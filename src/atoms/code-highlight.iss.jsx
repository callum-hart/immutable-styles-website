import { createStyle } from 'immutable-styles';

import { accent_1, accent_1__opaque } from '../constants/palette';
import { font_mono } from '../constants/typography';

export default (
  <code className="code-highlight">
    { font_mono }
    background: { accent_1__opaque };
    border-bottom: 1px solid { accent_1 };
  </code>
);