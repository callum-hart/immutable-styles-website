import { createStyle } from 'immutable-styles';
import { darken } from 'polished';

const fieldsetBackground = '#1F271F';

export default (
  <form className="form--disabled">
    opacity: 0.75;
    pointer-events: none;

    <fieldset>
      background: repeating-linear-gradient(
        -55deg,
        { fieldsetBackground },
        { fieldsetBackground } 15px,
        { darken(0.1, fieldsetBackground) } 15px,
        { darken(0.1, fieldsetBackground) } 30px
      );
    </fieldset>
  </form>
);