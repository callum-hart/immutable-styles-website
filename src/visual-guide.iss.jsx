import { createStyle, createMixin } from 'immutable-styles';

import { font_mono } from './constants/typography';
import {
  contrast_1,
  contrast_2,
  contrast_3,
  contrast_4,
  accent_1,
  accent_2,
  accent_3,
  accent_4,
  accent_1__opaque,
  accent_2__opaque,
  accent_3__opaque,
  accent_4__opaque,
  contrast_1__hover,
  contrast_2__hover,
  contrast_3__hover,
  contrast_4__hover,
  accent_1__hover,
  accent_2__hover,
  accent_3__hover,
  accent_4__hover
} from './constants/palette';

const mixins = {
  li: createMixin(
    <li>
      align-items: center;
      display: flex;
      justify-content: center;
      flex: 1;
      height: 120px;
      margin: 0 var(--size-s);

      <code className="code-highlight">
        white-space: nowrap;
      </code>
    </li>
  )
};

export default [
  // Spacing --

  <ul className="vg-spacing-list">
    align-items: center;
    display: flex;
    margin: 0;
    padding: 0;
  </ul>,

  <mixins.li className="vg-size-xs">
    border: var(--size-xs) solid;
  </mixins.li>,

  <mixins.li className="vg-size-s">
    border: var(--size-s) solid;
  </mixins.li>,

  <mixins.li className="vg-size-m">
    border: var(--size-m) solid;
  </mixins.li>,

  <mixins.li className="vg-size-l">
    border: var(--size-l) solid;
  </mixins.li>,

  <mixins.li className="vg-size-xl">
    border: var(--size-xl) solid;
  </mixins.li>,

  // Typography --

  <p className="vg-monospace-example">
    { font_mono }
  </p>,

  // Colours --

  <dl className="vg-inline-list">
    display: flex;

    <dt>
      flex: 1;
      text-align: right;
    </dt>

    <dd>
      flex: 1;
    </dd>
  </dl>,

  <dd className="vg-contrast_1">
    background: { contrast_1 };
  </dd>,

  <dd className="vg-contrast_2">
    background: { contrast_2 };
  </dd>,

  <dd className="vg-contrast_3">
    background: { contrast_3 };
  </dd>,

  <dd className="vg-contrast_4">
    background: { contrast_4 };
  </dd>,

  <dd className="vg-contrast_1__hover">
    background: { contrast_1__hover };
  </dd>,

  <dd className="vg-contrast_2__hover">
    background: { contrast_2__hover };
  </dd>,

  <dd className="vg-contrast_3__hover">
    background: { contrast_3__hover };
  </dd>,

  <dd className="vg-contrast_4__hover">
    background: { contrast_4__hover };
  </dd>
];
