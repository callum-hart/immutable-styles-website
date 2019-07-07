import { createStyle } from "immutable-styles";
// TODO: regex needs to handle ./ paths aswell as ../
// import { spacing } from './constants/spacing';

const container = (
  <section className="container">
    max-width: 1100px;
    margin: 0 auto;
    {/* padding: 0 {spacing.l}; */}
    padding: 0 30px;
  </section>
);

const row = (
  <div className="row">
    display: flex;
    align-items: center;
    <div className="col">
      flex: 1;
    </div>
  </div>
);

export default [container, row];
