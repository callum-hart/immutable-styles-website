import { createStyle } from 'immutable-styles';
import { darken } from 'polished';

const formBackground = 'white';

export default [
  // <form className="checkout">
  //   background: { formBackground };
  // </form>,

  <form className="form--disabled">
    {/* background: { darken(0.2, formBackground ) }; */}
    opacity: 0.75;
    pointer-events: none;
  </form>
];