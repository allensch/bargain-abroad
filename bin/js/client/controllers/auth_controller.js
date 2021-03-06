// Generated by CoffeeScript 1.6.2
(function() {
  var User;

  User = Ember.Object.extend({
    thumbnail: (function() {
      if (this.get('imvu')) {
        return this.get('imvu.picUrl');
      }
      return this.get('imageUrl');
    }).property('imageUrl'),
    isOptin: (function() {
      return !this.get('isOptout');
    }).property('isOptout')
  });

  App.AuthController = Ember.ObjectController.extend({
    user: null,
    logout: function() {
      var _this = this;

      $.ajax({
        type: 'GET',
        url: 'rest/user/logout',
        success: function() {
          _this.set('user', null);
          window.location = window.location.origin;
        }
      });
    },
    authenticate: function(data) {
      var _this = this;

      if (data) {
        this.set('user', User.create(data));
      } else {
        $.ajax({
          type: 'GET',
          url: 'rest/user/auth',
          success: function(user) {
            _this.set('user', User.create(user));
          },
          error: function() {
            _this.set('user', null);
          }
        });
      }
    }
  });

}).call(this);
