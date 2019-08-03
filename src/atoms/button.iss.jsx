import { createStyle, createMixin } from 'immutable-styles';
import { palette } from '../constants/palette';

const button = {
  default: createMixin(
    <a>
      font-size: var(--size-scale);
      font-family: 'Muli', sans-serif;
      font-weight: 700;
      text-decoration: none;
      text-align: center;
      padding: var(--size-xs) var(--size-m);
      border-radius: 5px;
      color: {palette.lowContrast};
    </a>
  ),
  hover: createMixin(
    <a pseudo=":hover">
      text-decoration: underline;
    </a>
  )
};

export default [
  <button.default className="button-primary">
    background: {palette.primaryCta};
  </button.default>,

  <button.hover className="button-primary" />,

  <button.default className="button-secondary">
    background: {palette.secondaryCta};
  </button.default>,

  <button.hover className="button-secondary" />,
];