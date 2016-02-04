import Ember from 'ember';

export default Ember.Controller.extend({
  hasDescription: Ember.computed.notEmpty('model.description'),
  hasNotes:       Ember.computed.notEmpty('model.notes'),

  isValid:        Ember.computed.and(
                    'hasDescription',
                    'hasNotes'
  )
});
