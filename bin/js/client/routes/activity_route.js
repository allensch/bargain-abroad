// Generated by CoffeeScript 1.6.2
(function() {
  App.ActivityRoute = App.AuthRoute.extend({
    model: function() {
      return Ember.$.getJSON('/rest/user/activity');
    }
  });

}).call(this);
