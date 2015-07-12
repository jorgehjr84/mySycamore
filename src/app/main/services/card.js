'use strict';


var mySycamore = angular.module('mySycamore');

mySycamore.factory('Card', function($resource) {
  return $resource('https://mysycamore.firebaseio.com/cards/:id.json');
});