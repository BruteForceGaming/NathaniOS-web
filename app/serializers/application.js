import DS from 'ember-data';

export default class extends DS.JSONAPISerializer {
  keyForAttribute(key) {
    return key;
  }
};
