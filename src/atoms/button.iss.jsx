import { createStyle, createMixin } from 'immutable-styles';

const mixins = {
  button: createMixin(
    <a>
      font-size: 14px;
      font-family: 'Muli', sans-serif;
      font-weight: 700;
      text-decoration: none;
      padding: 8px 28px;
      border-radius: 20px;
      color: #232221;
    </a>
  )
};

export default [
  <mixins.button className="button-primary">
    background: #F6FD64;
  </mixins.button>,

  <mixins.button className="button-secondary">
    background: #F6F4F2;
  </mixins.button>
];