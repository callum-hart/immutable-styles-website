import { createStyle } from 'immutable-styles';
import { palette } from '../constants/palette';

export default [
  <div pseudo=":nth-child(even)" className="example">
    --mode-background: {palette.highContrast};
    --mode-color: {palette.lowContrast};
    --code-background: {palette.lowContrast};
    --code-color: {palette.highContrast};
    --code-comment-color: {palette.highContrast};
    --code-keyword-color: {palette.highContrast};
    --code-tag-color: {palette.highContrast};
    --code-attribute-color: {palette.highContrast};
    --code-function-color: {palette.highContrast};
    --code-string-color: {palette.highContrast};
    --code-jsx-variable-color: {palette.highContrast};
    --code-property-name-color: {palette.highContrast};
  </div>,

  <div pseudo=":nth-child(odd)" className="example">
    --mode-background: {palette.lowContrast};
    --mode-color: {palette.highContrast};
    --code-background: {palette.highContrast};
    --code-color: {palette.lowContrast};
    --code-comment-color: {palette.lowContrast};
    --code-keyword-color: {palette.lowContrast};
    --code-tag-color: {palette.lowContrast};
    --code-attribute-color: {palette.lowContrast};
    --code-function-color: {palette.lowContrast};
    --code-string-color: {palette.lowContrast};
    --code-jsx-variable-color: {palette.lowContrast};
    --code-property-name-color: {palette.lowContrast};
  </div>,

  <div className="example">
    overflow: auto;
    padding-bottom: var(--size-xl);
    position: relative;
    background-color: var(--mode-background);

    <section className="container">
      min-width: 1000px;
      display: flex;

      <div pseudo=":first-of-type">
        max-width: 440px;
        padding-right: var(--size-xl);

        <h3>
          color: var(--mode-color);
        </h3>
      </div>

      <div className="tabs">
        margin-top: var(--size-l);
        flex: 1;
        min-width: 450px;
      </div>
    </section>
  </div>
];
