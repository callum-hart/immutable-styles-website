import { createStyle } from 'immutable-styles';
import { transparentize } from 'polished';

import { palette } from '../constants/palette';
import { fontMono } from '../constants/typography';

export default (
  <code className="code-highlight">
    { fontMono }
    background: {transparentize(0.8, '#ECED69')};
    border-bottom: 1px solid {palette.primaryCta};
  </code>
);