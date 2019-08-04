import { createStyle } from "immutable-styles";

export default (
  <section className="container">
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 var(--size-xl);
    box-sizing: border-box;

    <div className="row">
      display: flex;
      align-items: center;

      <div className="col">
        flex: 1;
      </div>
    </div>
  </section>
);
