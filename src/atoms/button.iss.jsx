import { createStyle, createMixin } from 'immutable-styles';
import { palette } from '../constants/palette';
import { fontSans } from '../constants/typography';
import { focusShadow } from '../constants/accessibility';

const button = {
  default: createMixin(
    <a>
      { fontSans }
      text-decoration: none;
      text-align: center;
      padding: var(--size-xs) var(--size-m);
      color: {palette.lowContrast};
    </a>
  ),
  hover: createMixin(
    <a pseudo=":hover">
      text-decoration: underline;
    </a>
  ),
  focus: createMixin(
    <a pseudo=":focus">
      { focusShadow }
    </a>
  )
};

export default [
  <button.default className="button-primary">
    background: {palette.primaryCta};
  </button.default>,
  <button.hover className="button-primary" />,
  <button.focus className="button-primary" />,

  <button.default className="button-secondary">
    background: {palette.secondaryCta};
  </button.default>,
  <button.hover className="button-secondary" />,
  <button.focus className="button-secondary" />
];