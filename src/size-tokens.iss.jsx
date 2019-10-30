import { createStyle, createMixin } from 'immutable-styles';

const mixins = {
  dd: createMixin(
    <dd>
      align-items: center;
      display: flex;
      justify-content: center;
      margin-left: 0;
      flex: 1;
      height: 120px;

      <code className="code-highlight">
        white-space: nowrap;
      </code>
    </dd>
  )
};

export default [
  <dl>
    align-items: center;
    display: flex;
    margin: 0;
  </dl>,

  <mixins.dd className="size-xs">
    border: var(--size-xs) solid;
  </mixins.dd>,

  <mixins.dd className="size-s">
    border: var(--size-s) solid;
  </mixins.dd>,

  <mixins.dd className="size-m">
    border: var(--size-m) solid;
  </mixins.dd>,

  <mixins.dd className="size-l">
    border: var(--size-l) solid;
  </mixins.dd>,

  <mixins.dd className="size-xl">
    border: var(--size-xl) solid;
  </mixins.dd>
];
