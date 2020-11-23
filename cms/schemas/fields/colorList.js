export default {
  title: 'Color List',
  description: 'Pick a color',
  name: 'colorList',
  type: 'colors', // required
  options: {
    borderradius: {
      outer: '100%',
      inner: '100%',
    },
    list: [
      { title: 'Chalk', value: '#fafaf6' },
      { title: 'Lilac Lighter', value: '#dce1fb' },
      { title: 'Lilac', value: '#cdd4fd' },
      { title: 'Lilac Darkest', value: '#8696f0' },
      { title: 'Mulberry', value: '#682f4e' },
      { title: 'Nutella', value: '#a38985' },
      { title: 'Charcoal', value: '#242424' },
    ],
  },
};
