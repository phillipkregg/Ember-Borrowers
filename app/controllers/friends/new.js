import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(model) {
      console.log('saving model in controller')
    },
    cancel() {
      console.log('canceling in controller')
    }
  }
});
