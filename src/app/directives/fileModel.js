// angular.module('mySycamore').directive('fileModel', ['$parse', function($parse) {
//   return {
//     restrict: 'A',
//     link: function(scope, element, attrs) {
//       var model = $pars(attrs.fileModel);
//       var modelSetter = model.assign;
//       element.bind('change', function() {
//         scope.$apply(function() {
//           modelSetter(scope, element[0].files[0]);
//         })
//       })
//     }
//   }
// }])
//
// //Used this video as a reference
// //https://www.youtube.com/watch?v=vLHgpOG1cW4