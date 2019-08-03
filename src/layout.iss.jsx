import { createStyle } from "immutable-styles";

export default [
  <body>
    --golden-ratio: 1.61803398875;
    --spacing-s: calc(var(--font-size) * var(--golden-ratio));
    --spacing-m: calc(var(--font-size) * var(--golden-ratio) * var(--golden-ratio));
    --spacing-l: calc(var(--font-size) * var(--golden-ratio) * var(--golden-ratio) * var(--golden-ratio));
    --spacing-xl: calc(var(--font-size) * var(--golden-ratio) * var(--golden-ratio) * var(--golden-ratio) * var(--golden-ratio));
  </body>,

  <section className="container">
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 var(--spacing-l);

    <div className="row">
      display: flex;
      align-items: center;

      <div className="col">
        flex: 1;
      </div>
    </div>
  </section>
];
