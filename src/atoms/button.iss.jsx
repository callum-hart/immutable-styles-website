import { createStyle, createMixin } from 'immutable-styles';
import { palette } from '../constants/palette';
import { focusShadow } from '../constants/accessibility';

const button = {
  default: createMixin(
    <a>
      font-size: var(--size-scale);
      font-family: 'Muli', sans-serif;
      font-weight: 700;
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
    box-shadow: 4px 4px #86854B;
  </button.default>,
  <button.hover className="button-primary" />,
  <button.focus className="button-primary" />,

  <button.default className="button-secondary">
    background: {palette.secondaryCta};
    box-shadow: 4px 4px #9E9E9D;
  </button.default>,
  <button.hover className="button-secondary" />,
  <button.focus className="button-secondary" />
];