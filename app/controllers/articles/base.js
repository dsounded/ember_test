import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.description',
    {
      get() {
        return !Ember.isEmpty(this.get('model.description')) &&
               !Ember.isEmpty(this.get('model.notes'));
      }
    }
  )
});
