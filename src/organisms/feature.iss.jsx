import { createStyle, createMixin } from 'immutable-styles';
import { palette } from '../constants/palette';

const feature = {
  default: createMixin(
    <div>
      <section className="container">
        display: flex;
        align-items: center;

        <div>
          padding-left: var(--size-xl);
          padding-bottom: var(--size-xl);
        </div>
      </section>
    </div>
  )
};

export default [
  <feature.default className="feature" />,

  <feature.default className="feature color-invert">
    background-color: {palette.lowContrast};

    <section className="container">
      <div>
        <h3>
          color: {palette.highContrast};
        </h3>
      </div>
    </section>
  </feature.default>
];
