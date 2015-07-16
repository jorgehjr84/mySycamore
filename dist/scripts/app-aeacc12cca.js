// angular.module('mySycamore').service('modalService');
//
//
// function modal($modal) {
//
//   var modalDefaults = {
//     backdrop: true,
//     keyboard: true,
//     modalFade: true,
//     templateUrl: '/app/views/modal_view.html'
//   };
//
//   //Referenced this site for this code
//   //http://weblogs.asp.net/dwahlin/building-an-angularjs-modal-service
//
//   var modalOptions = {
//     closeButtonText: 'Close',
//     actionButtonText: 'OK',
//     headerText: 'Proceed?',
//     bodyText: 'Perform this action?'
//   };
//
//   this.showModal = function(customModalDefaults, customModalOptions) {
//     if (!customModalDefaults) customModalDefaults = {};
//     customModalDefaults.backdrop = 'static';
//     return this.show(customModalDefaults, customModalOptions);
//   };
//
//   this.show = function(customModalDefaults, customModalOptions) {
//     //Create temp objects to work with since we're in a singleton service
//     var tempModalDefaults = {};
//     var tempModalOptions = {};
//
//     //Map angular-ui modal custom defaults to modal defaults defined in service
//     angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);
//
//     //Map modal.html $scope custom properties to defaults defined in service
//     angular.extend(tempModalOptions, modalOptions, customModalOptions);
//
//     if (!tempModalDefaults.controller) {
//       tempModalDefaults.controller = function($scope, $modalInstance) {
//         $scope.modalOptions = tempModalOptions;
//         $scope.modalOptions.ok = function(result) {
//           $modalInstance.close(result);
//         };
//         $scope.modalOptions.close = function(result) {
//           $modalInstance.dismiss('cancel');
//         };
//       }
//     }
//
//     return $modal.open(tempModalDefaults).result;
//   };
//
// };
// (function() {
//   "use strict";
//   angular.module('mySycamore')
//     .factory('cardFactory', ['$http', function($http, $firebase, FIREBASE_URL) {
//       //var cards = [];
//       var cardFactory = {};
//       cardFactory.getCards = function() {
//         return $http.get(FIREBASE_URL)
//       };
//       cardFactory.getCard = function(id) {
//         return $http.get(FIREBASE_URL + '/' + id);
//       };
//       cardFactory.getCardName = function(name) {
//         return $http.get(FIREBASE_URL + '/' + id + '/' + name);
//       };
//       return factory;
//     }])
// })();
!function(){"use strict";angular.module("mySycamore",["ngAnimate","ngCookies","ngTouch","ngSanitize","restangular","ui.router","ui.bootstrap","firebase"]).constant("FIREBASE_URL","https://mysycamore.firebaseio.com/cards/")}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=t}angular.module("mySycamore").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return t.$inject=["moment"],e}angular.module("mySycamore").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,o,r,a){var n,i=t(o[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});o.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){i.type(t).pause()["delete"]()}),n=e.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(t){i.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){n()})}function o(t,e){function o(){return r().then(function(){t.info("Activated Contributors View")})}function r(){return e.getContributors(10).then(function(t){return a.contributors=t,a.contributors})}var a=this;a.contributors=[],o()}var r={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:o,controllerAs:"vm"};return o.$inject=["$log","githubContributor"],r}angular.module("mySycamore").directive("acmeMalarkey",t),t.$inject=["malarkey"]}(),function(){"use strict";function t(t,e){function o(o){function a(t){return t.data}function n(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return o||(o=30),e.get(r+"/contributors?per_page="+o).then(a)["catch"](n)}var r="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:r,getContributors:o};return a}angular.module("mySycamore").factory("githubContributor",t),t.$inject=["$log","$http"]}(),function(){"use strict";function t(t,e,o,r,a){e.get(r+".json").success(function(e){t.cards=e})}angular.module("mySycamore").controller("TreeController",t),t.$inject=["$scope","$http","$firebaseArray","FIREBASE_URL","$stateParams"]}(),function(){"use strict";function t(t,e,o,r,a){var n=new Firebase(o);t.cards=e(n),t.submitCard=function(){function e(t){return t?t:null}t.cards.$add({name:t.newCardName,est:t.newCardEst,birthplace:t.newCardBirthplace,bio:e(t.newCardBio),phone:e(t.newCardPhone),email:e(t.newCardEmail),photo:e(t.newCardPhoto)}),t.newCardName="",t.newCardEst="",t.newCardBirthplace="",t.newCardBio="",t.newCardPhone="",t.newCardEmail=""}}angular.module("mySycamore").controller("SubmitController",t),t.$inject=["$scope","$firebaseArray","FIREBASE_URL","$firebaseObject","$stateParams"]}(),function(){"use strict";function t(t,e,o){function r(){n(),t(function(){i.classAnimation="rubberBand"},4e3)}function a(){o.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),i.classAnimation=""}function n(){i.awesomeThings=e.getTec(),angular.forEach(i.awesomeThings,function(t){t.rank=Math.random()})}var i=this;i.awesomeThings=[],i.classAnimation="",i.creationDate=1436308983331,i.showToastr=a,r()}angular.module("mySycamore").controller("MainController",t),t.$inject=["$timeout","webDevTec","toastr"]}(),function(){"use strict";function t(t,e,o,r,a){a.get("https://mysycamore.firebaseio.com/cards/"+r.card+".json").then(function(e){t.card=e.data}),console.log(r)}angular.module("mySycamore").controller("editController",t),t.$inject=["$scope","FIREBASE_URL","$firebaseObject","$stateParams","$http"]}(),function(){"use strict";function t(t,e,o,r,a){a.get("https://mysycamore.firebaseio.com/cards/"+r.card+".json").then(function(e){t.card=e.data,console.log(r)})}angular.module("mySycamore").controller("DetailController",t),t.$inject=["$scope","FIREBASE_URL","$firebaseObject","$stateParams","$http"]}(),function(){"use strict";function t(t){t.debug("runBlock end")}angular.module("mySycamore").run(t),t.$inject=["$log"]}(),function(){"use strict";function t(t,e){t.otherwise("/"),e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("tree",{url:"/tree",templateUrl:"app/views/tree.html",controller:"TreeController",controllerAs:"tree"}).state("submit",{url:"/submit",templateUrl:"app/views/submit.html",controller:"SubmitController",controllerAs:"submit"}).state("cardDetail",{url:"/cards/:card",templateUrl:"app/views/detail.html",controller:"DetailController",controllerAs:"detail"}).state("edit",{url:"/edit/cards/:card",templateUrl:"app/views/edit.html",controller:"editController",controllerAs:"edit"})}angular.module("mySycamore").config(t),t.$inject=["$urlRouterProvider","$stateProvider"]}(),function(){"use strict";angular.module("mySycamore").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.options.timeOut=3e3,e.options.positionClass="toast-top-right",e.options.preventDuplicates=!0,e.options.progressBar=!0}angular.module("mySycamore").config(t),t.$inject=["$logProvider","toastr"]}(),angular.module("mySycamore").run(["$templateCache",function(t){t.put("app/main/main.html",'<html><div class="container"><div class="center_content"><h3>Let\'s Get Started by Adding to your Tree</h3><div class="btn-group main_button" dropdown=""><button onclick="location.href=\'#/submit\'" type="button" class="btn btn-lg btn-success">Add to your Tree</button> <button type="button" class="btn btn-lg btn-success dropdown-toggle" data-toggle="dropdown" dropdown-toggle=""><span class="caret"></span> <span class="sr-only"></span></button><ul class="dropdown-menu"><li><a href="#/submit">Parent</a></li><li><a href="#/submit">Sibling</a></li><li><a href="#/submit">Spouse</a></li><li><a href="#/submit">Child</a></li></ul></div></div></div></html>'),t.put("app/views/detail.html",'<div class="input-group submit-form row"><div class="col-md-6 col col-md-offset-4" id="detailed_view"><ul><li>{{card.name}}</li><li>{{card.est}}</li><li>{{card.birthplace}}</li><li>{{card.bio}}</li><li>{{card.phone}}</li><li>{{card.email}}</li></ul></div></div>'),t.put("app/views/edit.html",'<div class="input-group submit-form row"><div class="col-md-6 col col-md-offset-4"><h1>EDIT PAGE</h1><form ng-submit="submitCard()"><input type="text" class="form-control" placeholder="Name" ng-model="card.name"> <input type="text" class="form-control" placeholder="Est." ng-model="card.est"> <input type="text" class="form-control" placeholder="BirthPlace" ng-model="card.birthplace"> <input type="text" class="form-control" placeholder="Bio" ng-model="card.bio"> <input type="text" class="form-control" placeholder="Phone Number" ng-model="card.phone"> <input type="text" class="form-control" placeholder="Email" ng-model="card.email"> <input type="submit" value="Submit Relative" id="submitButton"></form></div></div>'),t.put("app/views/modal_view.html",'<div class="modal-header"><h3>Edit</h3></div><div class="modal-body">modal body</div><div class="modal-footer"><button type="button" class="btn" data-ng-click="modalOptions.close()">closeButton</button> <button class="btn btn-primary" data-ng-click="modalOptions.ok();">actionButtonText</button></div>'),t.put("app/views/submit.html",'<div ng-controller="SubmitController"><div class="col-md-6 col col-md-offset-3"><div class="input-group submit-form row"><form ng-submit="submitCard()"><input type="text" ng-model="newCardName" class="form-control" placeholder="Name"> <input type="text" ng-model="newCardEst" class="form-control" placeholder="Est."> <input type="text" ng-model="newCardBirthplace" class="form-control" placeholder="BirthPlace"> <input type="text" ng-model="newCardBio" class="form-control" placeholder="Bio"> <input type="text" ng-model="newCardPhone" class="form-control" placeholder="Phone"> <input type="text" ng-model="newCardEmail" class="form-control" placeholder="Email"> <input type="text" ng-model="card.relation" class="form-control" placeholder="Relation"> <input type="file" ng-model="newCardPhoto" value="Upload Photo" file-model="card.file" nv-file-select="" uploader="uploader"> <button onclick="location.href=\'#/tree\'" type="button" class="btn btn-lg btn-success"></button><input type="submit" value="Submit Relative" id="submitButton"></form></div></div></div>'),t.put("app/views/tree.html",'<div id="tree-view" class="container" ng-controller="TreeController"><div class="center_content"><div id="row-3"></div><div id="row-2"></div><div id="row-1"></div><div id="row-0"></div><div class="btn-group" dropdown="" ng-repeat="(id, card) in cards"><a class="btn btn-lg btn-success" ui-sref="cardDetail({card: id})">{{card.name}}</a> <button type="button" class="btn btn-lg btn-success dropdown-toggle" data-toggle="dropdown" dropdown-toggle=""><span class="caret"></span> <span class="sr-only"></span></button><ul class="dropdown-menu"><li><a href="#/submit">Parent</a></li><li><a href="#/submit">Sibling</a></li><li><a href="#/submit">Spouse</a></li><li><a href="#/submit">Child</a></li><li role="separator" class="divider"></li><li><a ui-sref="edit({card: id})">Edit</a></li></ul></div></div></div>'),t.put("app/components/navbar/navbar.html",'<div><nav class="navbar"><h3 class="welcome_message">Welcome to mySycamore</h3></nav></div><a href="#/">Home</a> <a href="#/tree">Tree</a> <a href="#/submit">Submit</a> <a href="#/detail">Detail</a>')}]);