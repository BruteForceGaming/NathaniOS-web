import DS from 'ember-data';

// const capitalize = (s) => {
//   if (typeof s !== 'string') return ''
//   return s.charAt(0).toUpperCase() + s.slice(1)
// }

export default DS.JSONAPISerializer.extend({
  keyForAttribute: function(key) {
    return key;
  }
});
