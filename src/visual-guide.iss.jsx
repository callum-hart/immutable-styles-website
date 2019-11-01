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
  size: createMixin(
    <div>
      margin-bottom: var(--size-xl);
      min-height: var(--size-xl);
    </div>
  ),
  color: createMixin(
    <div>
      min-height: var(--size-xl);
    </div>
  )
};

export default [
  <dl className="vg-description-list">
    display: flex;
    flex-flow: row wrap;
    margin-bottom: var(--size-xl);

    <dt>
      flex-basis: 30%;
      text-align: right;

      <code className="code-highlight">
        margin-right: var(--size-s);
      </code>
    </dt>

    <dd>
      flex-basis: 70%;
      flex-grow: 1;
      margin-left: 0;
    </dd>
  </dl>,

  // Spacing --

  <mixins.size className="vg-size-xs">
    border: var(--size-xs) solid;
  </mixins.size>,

  <mixins.size className="vg-size-s">
    border: var(--size-s) solid;
  </mixins.size>,

  <mixins.size className="vg-size-m">
    border: var(--size-m) solid;
  </mixins.size>,

  <mixins.size className="vg-size-l">
    border: var(--size-l) solid;
  </mixins.size>,

  <mixins.size className="vg-size-xl">
    border: var(--size-xl) solid;
  </mixins.size>,

  // Typography --

  <p className="vg-monospace-example">
    { font_mono }
  </p>,

  // Colours --

  <mixins.color className="vg-accent_1">
    background: { accent_1 };
  </mixins.color>,

  <mixins.color className="vg-accent_2">
    background: { accent_2 };
  </mixins.color>,

  <mixins.color className="vg-accent_3">
    background: { accent_3 };
  </mixins.color>,

  <mixins.color className="vg-accent_4">
    background: { accent_4 };
  </mixins.color>,

  <mixins.color className="vg-accent_1__hover">
    background: { accent_1__hover };
  </mixins.color>,

  <mixins.color className="vg-accent_2__hover">
    background: { accent_2__hover };
  </mixins.color>,

  <mixins.color className="vg-accent_3__hover">
    background: { accent_3__hover };
  </mixins.color>,

  <mixins.color className="vg-accent_4__hover">
    background: { accent_4__hover };
  </mixins.color>,

  <mixins.color className="vg-accent_1__opaque">
    background: { accent_1__opaque };
  </mixins.color>,

  <mixins.color className="vg-accent_2__opaque">
    background: { accent_2__opaque };
  </mixins.color>,

  <mixins.color className="vg-accent_3__opaque">
    background: { accent_3__opaque };
  </mixins.color>,

  <mixins.color className="vg-accent_4__opaque">
    background: { accent_4__opaque };
  </mixins.color>,

  <mixins.color className="vg-contrast_1">
    background: { contrast_1 };
  </mixins.color>,

  <mixins.color className="vg-contrast_2">
    background: { contrast_2 };
  </mixins.color>,

  <mixins.color className="vg-contrast_3">
    background: { contrast_3 };
  </mixins.color>,

  <mixins.color className="vg-contrast_4">
    background: { contrast_4 };
  </mixins.color>,

  <mixins.color className="vg-contrast_1__hover">
    background: { contrast_1__hover };
  </mixins.color>,

  <mixins.color className="vg-contrast_2__hover">
    background: { contrast_2__hover };
  </mixins.color>,

  <mixins.color className="vg-contrast_3__hover">
    background: { contrast_3__hover };
  </mixins.color>,

  <mixins.color className="vg-contrast_4__hover">
    background: { contrast_4__hover };
  </mixins.color>
];
