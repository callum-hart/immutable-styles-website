const to_xs = {
  maxWidth: 599
};
const to_s = {
  maxWidth: 799
};
const to_m = {
  maxWidth: 999
};
const to_l = {
  maxWidth: 1199
};
const from_xs = {
  minWidth: to_xs.maxWidth + 1
}
const from_s = {
  minWidth: to_s.maxWidth + 1
};
const from_m = {
  minWidth: to_m.maxWidth + 1
};
const from_l = {
  minWidth: to_l.maxWidth + 1
};
const from_xs_to_s = {
  ...from_xs,
  ...to_s
};
const from_s_to_m = {
  ...from_s,
  ...to_m
};
const from_m_to_l = {
  ...from_m,
  ...to_l
};

module.exports = {
  to_xs,
  to_s,
  to_m,
  to_l,
  from_xs,
  from_s,
  from_m,
  from_l,
  from_xs_to_s,
  from_s_to_m,
  from_m_to_l,
};
