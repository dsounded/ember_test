import Ember from 'ember';

export default Ember.Route.extend({
  model() {
   return this.store.createRecord('friend');
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      let model = controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
