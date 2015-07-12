'use strict';

app.factory('Card', function($resource) {
  return $resource('https://mysycamore.firebaseio.com/cards/:id.json');
});