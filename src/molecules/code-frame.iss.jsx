import { createStyle, createMixin } from 'immutable-styles';
import { fontMono } from '../constants/typography';
import { palette } from '../constants/palette';

const mixins = {
  loc: createMixin(
    <li>
      { fontMono }
      list-style: none;
      color: var(--code-color);
    </li>
  )
};

export default [
  <ul className="code-frame">
    margin: 0;
    padding: 0;

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
    color: var(--code-comment-color);
  </span>,

  <span className="keyword">
    color: var(--code-keyword-color);
  </span>,

  <span className="tag">
    color: var(--code-tag-color);
  </span>,

  <span className="attribute">
    color: var(--code-attribute-color);
  </span>,

  <span className="function">
    color: var(--code-function-color);
  </span>,

  <span className="string">
    color: var(--code-string-color);
  </span>,

  <span className="jsx-variable">
    color: var(--code-jsx-variable-color);
  </span>,

  <span className="property-name">
    color: var(--code-property-name-color);
  </span>
];