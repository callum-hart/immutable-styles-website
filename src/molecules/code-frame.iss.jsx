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
  // TODO: handl light / dark code frames
  <ul className="code-frame-light"></ul>,
  <ul className="code-frame-dark"></ul>,

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

  // TODO: more than 2 classes doesn't seem to work
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