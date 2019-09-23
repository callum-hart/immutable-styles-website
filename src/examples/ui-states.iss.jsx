import { createStyle } from 'immutable-styles';
import { darken } from 'polished';

const formBackground = 'white';

export default [
  <form className="checkout">
    background: { formBackground };
  </form>,

  <form className="checkout checkout--loading">
    background: { darken(0.2, formBackground ) };
    opacity: 0.6;
    pointer-events: none;
  </form>
];