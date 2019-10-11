import { createStyle, createMixin } from 'immutable-styles';
import { fontMono } from '../constants/typography';
import { palette } from '../constants/palette';

const mixins = {
  loc: createMixin(
    <li>
      { fontMono }
      list-style: none;
      color: {palette.mediumContrast};
    </li>
  )
};

export default [
  <ul className="code-frame">
    margin: 0;
    padding: 0;
  </ul>,

  <mixins.loc className="loc" />,

  <mixins.loc className="loc stack-up">
    margin-top: var(--size-s);
  </mixins.loc>,

  <mixins.loc className="loc tab-1">
    text-indent: 2ch;
  </mixins.loc>,

  <mixins.loc className="loc tab-2">
    text-indent: 4ch;
  </mixins.loc>,

  <mixins.loc className="loc tab-3">
    text-indent: 6ch;
  </mixins.loc>,

  <mixins.loc className="loc tab-1 stack-up">
    text-indent: 2ch;
    margin-top: var(--size-s);
  </mixins.loc>,

  <mixins.loc className="loc tab-2 stack-up">
    text-indent: 4ch;
    margin-top: var(--size-s);
  </mixins.loc>,

  <mixins.loc className="loc tab-3 stack-up">
    text-indent: 6ch;
    margin-top: var(--size-s);
  </mixins.loc>,

  <span className="keyword">
    color: {palette.tertiaryCta};
  </span>,

  <span className="tag">
    color: #38B4D4;
  </span>,

  <span className="attribute-light">
    color: {palette.highContrast};
  </span>,

  <span className="attribute-dark">
    color: {palette.lowContrast};
  </span>,

  <span className="function-light">
    color: {palette.highContrast};
  </span>,

  <span className="function-dark">
    color: {palette.lowContrast};
  </span>,

  <span className="string">
    color: #48D1A0;
  </span>,

  <span className="jsx-variable">
    font-weight: bold;
  </span>,

  // TODO: is this needed?
  <span className="property-name">
    color: var(--code-property-name-color);
  </span>
];