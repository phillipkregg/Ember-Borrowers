import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(model) {
      console.log('saving model in controller');
      this.transitionToRoute('friends.show', model);
    },
    cancel() {
      console.log('canceling in controller')
    }
  }
});
