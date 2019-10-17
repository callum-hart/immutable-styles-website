import { createStyle, createMixin } from 'immutable-styles';

import { contrast_l, contrast_m, contrast_s, accent_1, accent_2, accent_3, accent_4 } from '../constants/palette';
import { fontMono } from '../constants/typography';

const mixins = {
  loc: createMixin(
    <li>
      { fontMono }
      color: { contrast_m };
      list-style: none;
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
    margin-top: var(--size-s);
    text-indent: 2ch;
  </mixins.loc>,

  <mixins.loc className="loc tab-2 stack-up">
    margin-top: var(--size-s);
    text-indent: 4ch;
  </mixins.loc>,

  <mixins.loc className="loc tab-3 stack-up">
    margin-top: var(--size-s);
    text-indent: 6ch;
  </mixins.loc>,

  <span className="keyword">
    color: { accent_2 };
  </span>,

  <span className="tag">
    color: { accent_3 };
  </span>,

  <span className="attribute-light">
    color: { contrast_l };
  </span>,

  <span className="attribute-dark">
    color: { contrast_s };
  </span>,

  <span className="function-light">
    color: { contrast_l };
  </span>,

  <span className="function-dark">
    color: { contrast_s };
  </span>,

  <span className="string">
    color: { accent_4 };
  </span>,

  <span className="jsx-variable">
    font-weight: bold;
  </span>
];