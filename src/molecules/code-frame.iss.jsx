import { createStyle, createMixin } from 'immutable-styles';
import { palette } from '../constants/palette';

const mixins = {
  loc: createMixin(
    <li>
      list-style: none;
      font-size: var(--size-scale);
      font-family: 'IBM Plex Mono', monospace;
      font-weight: 500;
      color: {palette.mediumContrast};
    </li>
  )
};

export default [
  <ul className="code-frame">
    margin-top: var(--size-l);
    margin-bottom: 0;
    padding-left: var(--size-xl);

    <mixins.loc />

    <mixins.loc className="stack-up">
      margin-top: var(--size-s);
    </mixins.loc>

    <mixins.loc className="tab-1">
      text-indent: 2ch;
    </mixins.loc>

    <mixins.loc className="tab-2">
      text-indent: 4ch;
    </mixins.loc>

    <mixins.loc className="tab-3">
      text-indent: 6ch;
    </mixins.loc>

    <mixins.loc className="tab-1 stack-up">
      text-indent: 2ch;
      margin-top: var(--size-s);
    </mixins.loc>

    <mixins.loc className="tab-2 stack-up">
      text-indent: 4ch;
      margin-top: var(--size-s);
    </mixins.loc>

    <mixins.loc className="tab-3 stack-up">
      text-indent: 6ch;
      margin-top: var(--size-s);
    </mixins.loc>
  </ul>,

  <span className="comment">
    opacity: 0.6;
  </span>,

  <span className="keyword">
    color: {palette.tertiaryCta};
  </span>,

  <span className="tag">
    color: #5DD2EF;
  </span>,

  <span className="attribute">
    color: {palette.primaryCta};
  </span>,

  <span className="function">
    color: {palette.primaryCta};
  </span>,

  <span className="string">
    color: #6BFB8C;
  </span>,

  <span className="jsx-variable">
    color: {palette.highContrast};
  </span>,

  <span className="property-name">
    color: {palette.highContrast};
  </span>
];