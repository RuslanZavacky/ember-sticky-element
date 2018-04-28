'use strict';

module.exports = {
  name: 'ember-sticky-element',

  included: function(app, parentAddon) {
    this._super.included.apply(this, arguments);

    this.import('vendor/ember-sticky-element.css');
  }
};
