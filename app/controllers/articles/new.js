import Ember from 'ember';
import ArticlesBaseController from './base';

export default ArticlesBaseController.extend({
  actions: {
    save() {
      if (this.get('isValid')) {
        return true;
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
    }
  }
});
