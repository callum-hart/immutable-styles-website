import { createStyle } from 'immutable-styles';
import { lighten } from 'polished';

const fieldsetBackground = '#242322';

export default (
  <form className="form--disabled">
    opacity: 0.75;
    pointer-events: none;

    <fieldset>
      background: repeating-linear-gradient(
        -55deg,
        { fieldsetBackground },
        { fieldsetBackground } 10px,
        { lighten(0.1, fieldsetBackground) } 10px,
        { lighten(0.1, fieldsetBackground) } 20px
      );
    </fieldset>
  </form>
);