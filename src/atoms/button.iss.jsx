import { createStyle, createMixin } from 'immutable-styles';
import { primaryCta, secondaryCta, lowContrast } from '../constants/palette';

const button = {
  default: createMixin(
    <a>
      font-size: 14px;
      font-family: 'Muli', sans-serif;
      font-weight: 700;
      text-decoration: none;
      padding: 8px 28px;
      border-radius: 20px;
      color: {lowContrast};
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
    background: {primaryCta};
  </button.default>,

  <button.hover className="button-primary" />,

  <button.default className="button-secondary">
    background: {secondaryCta};
  </button.default>,

  <button.hover className="button-secondary" />,
];