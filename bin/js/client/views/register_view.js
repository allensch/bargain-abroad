// Generated by CoffeeScript 1.6.2
(function() {
  App.RegisterView = Ember.View.extend({
    didInsertElement: function() {
      Ember.run.later(this.$('#inputEmailAddress'), 'focus', 333);
    }
  });

}).call(this);
