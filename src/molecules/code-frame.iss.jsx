import { createStyle, createMixin } from 'immutable-styles';
import { palette } from '../constants/palette';

const mixins = {
  loc: createMixin(
    <li>
      list-style: none;
      font-size: var(--size-scale);
      font-family: 'IBM Plex Mono', monospace;
      font-weight: 500;
      color: var(--code-color);
    </li>
  )
};

export default [
  <code className="simple-example">
    <ul className="code-frame">
      box-shadow: var(--size-xs) var(--size-xs) #71F990;
    </ul>
  </code>,

  <code className="mobile-friendly">
    <ul className="code-frame">
      box-shadow: var(--size-xs) var(--size-xs) #57D2F1;
    </ul>
  </code>,

  <code className="composition">
    <ul className="code-frame">
      box-shadow: var(--size-xs) var(--size-xs) #F8656B;
    </ul>
  </code>,

  <code className="interactions">
    <ul className="code-frame">
      box-shadow: var(--size-xs) var(--size-xs) {palette.primaryCta};
    </ul>
  </code>,

  <code className="ui-states">
    <ul className="code-frame">
      box-shadow: var(--size-xs) var(--size-xs) #71F990;
    </ul>
  </code>,

  <ul className="code-frame">
    margin-top: var(--size-l);
    margin-bottom: 0;
    padding: var(--size-s);
    background: var(--code-background);

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