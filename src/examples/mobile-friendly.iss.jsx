import { createStyle } from 'immutable-styles';

const to_m = 999;
const from_m = 1000;

export default [
  <section className="row">
    display: flex;

    <div className="col">
      flex: 1;
    </div>
  </section>,

  <section maxWidth={to_m} className="row">
    flex-direction: column;

    <div className="col" pseudo=":first-of-type">
      margin-bottom: var(--size-xs);
    </div>

    <div className="col" pseudo=":last-of-type">
      margin-top: var(--size-xs);
    </div>
  </section>,

  <section minWidth={from_m} className="row">
    <div className="col" pseudo=":first-of-type">
      margin-right: var(--size-xs);
    </div>

    <div className="col" pseudo=":last-of-type">
      margin-left: var(--size-xs);
    </div>
  </section>,

  <div className="example-mobile-friendly-result">
    background: #F6C89A;

    <section className="row">
      <div className="col">
        background: #BFD9B2;
      </div>

      <div maxWidth={to_m} className="col">
        min-height: 100px;
      </div>

      <div minWidth={from_m} className="col">
        min-height: 200px;
      </div>
    </section>
  </div>
];
