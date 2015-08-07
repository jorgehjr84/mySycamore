!function(){"use strict";angular.module("mySycamore",["ngAnimate","ngCookies","ngTouch","ngSanitize","restangular","ui.router","ui.bootstrap","firebase","ui.sortable"]).constant("FIREBASE_URL","https://mysycamore.firebaseio.com/")}(),function(){"use strict";function t(t){function e(e,r,o,a){var i,n=t(r[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});r.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){n.type(t).pause()["delete"]()}),i=e.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(t){n.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){i()})}function r(t,e){function r(){return o().then(function(){t.info("Activated Contributors View")})}function o(){return e.getContributors(10).then(function(t){return a.contributors=t,a.contributors})}var a=this;a.contributors=[],r()}var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:r,controllerAs:"vm"};return r.$inject=["$log","githubContributor"],o}angular.module("mySycamore").directive("acmeMalarkey",t),t.$inject=["malarkey"]}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return t.$inject=["moment"],e}angular.module("mySycamore").directive("acmeNavbar",t)}(),function(){"use strict";function t(t,e){function r(r){function a(t){return t.data}function i(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return r||(r=30),e.get(o+"/contributors?per_page="+r).then(a)["catch"](i)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:o,getContributors:r};return a}angular.module("mySycamore").factory("githubContributor",t),t.$inject=["$log","$http"]}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=t}angular.module("mySycamore").service("webDevTec",t)}(),function(){"use strict";function t(t,e,r,o,a,i){var n=new Firebase(o),l=n.getAuth();e.get(o+l.uid+"/cards.json").success(function(e){t.cards=e}),t.sortableOptions={update:function(t,e){},containment:"parent",cursor:"move",axis:"x"}}angular.module("mySycamore").controller("TreeController",t),t.$inject=["$scope","$http","$firebaseArray","FIREBASE_URL","$stateParams","$firebaseObject"]}(),function(){"use strict";function t(t,e,r,o,a,i){var n=new Firebase(r),l=n.getAuth(),s=n.child(l.uid+"/cards");t.cards=e(s),t.submitCard=function(){function e(t){return t?t:null}t.cards.$add({name:t.newCardName,est:t.newCardEst,birthplace:t.newCardBirthplace,bio:e(t.newCardBio),phone:e(t.newCardPhone),email:e(t.newCardEmail),photo:e(t.newCardPhoto),spouseOf:a.card,childOf:a.card}),t.newCardName="",t.newCardEst="",t.newCardBirthplace="",t.newCardBio="",t.newCardPhone="",t.newCardEmail=""}}angular.module("mySycamore").controller("SubmitController",t),t.$inject=["$scope","$firebaseArray","FIREBASE_URL","$firebaseObject","$stateParams","$http"]}(),function(){"use strict";function t(t,e,r){var o=!0,a=new Firebase(e),i=a.getAuth();r.login=function(){a.authWithOAuthPopup("facebook",function(t,e){t?console.log("Login Failed!",t):console.log("Authenticated successfully with payload:",e)},{remember:"sessionOnly"})},a.onAuth(function(){i&&o&&a.child("users").child(i.uid).set({provider:i.provider,name:i.facebook.displayName})}),r.logout=function(){a.unauth()}}angular.module("mySycamore").controller("MainController",t),t.$inject=["$firebase","FIREBASE_URL","$scope"]}(),function(){"use strict";function t(t,e,r,o,a,i){a.get("https://mysycamore.firebaseio.com/cards/"+o.card+".json").then(function(e){t.card=e.data});var n=new Firebase(e);t.editCard=i(n)}angular.module("mySycamore").controller("editController",t),t.$inject=["$scope","FIREBASE_URL","$firebaseObject","$stateParams","$http","$firebaseArray"]}(),function(){"use strict";function t(t,e,r,o,a){a.get("https://mysycamore.firebaseio.com/cards/"+o.card+".json").then(function(e){t.card=e.data})}angular.module("mySycamore").controller("DetailController",t),t.$inject=["$scope","FIREBASE_URL","$firebaseObject","$stateParams","$http"]}(),function(){"use strict";function t(t){t.debug("runBlock end")}angular.module("mySycamore").run(t),t.$inject=["$log"]}(),function(){"use strict";function t(t,e){t.otherwise("/"),e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("tree",{url:"/tree",templateUrl:"app/views/tree.html",controller:"TreeController",controllerAs:"tree"}).state("submit",{url:"/submit/:card",templateUrl:"app/views/submit.html",controller:"SubmitController",controllerAs:"submit"}).state("cardDetail",{url:"/cards/:card",templateUrl:"app/views/detail.html",controller:"DetailController",controllerAs:"detail"}).state("edit",{url:"/edit/cards/:card",templateUrl:"app/views/edit.html",controller:"editController",controllerAs:"edit"})}angular.module("mySycamore").config(t),t.$inject=["$urlRouterProvider","$stateProvider"]}(),function(){"use strict";angular.module("mySycamore").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.options.timeOut=3e3,e.options.positionClass="toast-top-right",e.options.preventDuplicates=!0,e.options.progressBar=!0}angular.module("mySycamore").config(t),t.$inject=["$logProvider","toastr"]}(),angular.module("mySycamore").run(["$templateCache",function(t){t.put("app/main/main.html",'<html><div class="container"><div class="main_center_content"><button type="button" class="btn btn-lg btn-success"><a href="#/tree" ng-click="login(); addUser()">Let\'s Get You Logged In</a></button></div></div></html>'),t.put("app/views/detail.html",'<div class="col-lg-12"><a href="#/tree" class="col-md-offset-1">mySycamore</a> <a href="#/submit/:card" class="col-md-offset-4">Add Relative</a> <a ui-sref="edit({card: id})" class="col-md-offset-4">EditTree</a></div><br><br><div class="input-group submit-form row" id="detail_view"><div class="col-lg-12 col-lg-offset-12 jumbotron" id="detail_jumbotron"><ul id="detail_view_list"><li class="list_title">Name</li><li>{{card.name}}</li><li class="list_title">Date of Birth</li><li>{{card.est}}</li><li class="list_title">Birthplace</li><li>{{card.birthplace}}</li><li class="list_title">Bio</li><li>{{card.bio}}</li><li class="list_title">Phone</li><li>{{card.phone}}</li><li class="list_title">Email</li><li>{{card.email}}</li></ul></div></div>'),t.put("app/views/edit.html",'<div class="input-group submit-form row"><div class="col-lg-10 col-lg-offset-1"><a href="#/tree" class="col-md-offset-1">mySycamore</a> <a href="#/submit/:card" class="col-md-offset-4">Add Relative</a> <a ui-sref="edit({card: id})" class="col-md-offset-4">EditTree</a></div><div class="col-lg-6 col col-lg-offset-3"><br><br><div class="input-group submit-form row"><form ng-submit="editCard()"><div ng-repeat="card in editCard"><input type="text" class="form-control" placeholder="Name" ng-model="card.name" ng-change="editCard.$save(card)"> <input type="text" class="form-control" placeholder="Est." ng-model="card.est" ng-change="editCard.$save(card)"> <input type="text" class="form-control" placeholder="BirthPlace" ng-model="card.birthplace" ng-change="editCard.$save(card)"> <input type="text" class="form-control" placeholder="Bio" ng-model="card.bio" ng-change="editCard.$save(card)"> <input type="text" class="form-control" placeholder="Phone Number" ng-model="card.phone" ng-change="editCard.$save(card)"> <input type="text" class="form-control" placeholder="Email" ng-model="card.email" ng-change="editCard.$save(card)"> <button><a href="#/tree">Submit</a></button></div></form></div></div></div>'),t.put("app/views/submit.html",'<div ng-controller="SubmitController"><div class="col-lg-12"><a href="#/tree" class="col-md-offset-1">mySycamore</a> <a href="#/submit/:card" class="col-md-offset-4">Add Relative</a> <a ui-sref="edit({card: id})" class="col-md-offset-4">EditTree</a></div><br><br><div class="col-md-6 col col-md-offset-3"><div class="input-group submit-form row"><form action="#/tree" ng-submit="submitCard()"><input type="text" ng-model="newCardName" class="form-control" placeholder="Name" required=""> <input type="text" ng-model="newCardEst" class="form-control" placeholder="Date of Birth." required=""> <input type="text" ng-model="newCardBirthplace" class="form-control" placeholder="BirthPlace" required=""> <input type="text" ng-model="newCardBio" class="form-control" placeholder="Bio"> <input type="text" ng-model="newCardPhone" class="form-control" placeholder="Phone"> <input type="text" ng-model="newCardEmail" class="form-control" placeholder="Email"><input type="submit" value="Submit Relative" id="submitButton"></form></div></div></div>'),t.put("app/views/tree.html",'<div id="tree-view" class="container" ng-controller="TreeController"><a href="#/tree" class="col-md-offset-1">mySycamore</a> <a href="#/submit/:card" class="col-md-offset-4">Add Relative</a> <a ui-sref="edit({card: id})" class="col-md-offset-4">EditTree</a><br><br><div class="center_content"><div class="btn-group" dropdown="" ng-repeat="(id, card) in cards"><a class="btn btn-lg btn-success tree_cards" ui-sref="cardDetail({card: id})">{{card.name}}</a><a href="" type="button" class="btn btn-lg btn-success dropdown-toggle" data-toggle="dropdown" dropdown-toggle=""><span class="caret"></span> <span class="sr-only"></span></a><ul class="dropdown-menu"><li><a href="#/submit/:card">Parent</a></li><li><a href="#/submit/:card">Sibling</a></li><li id="addSpouseLink"><a ui-sref="submit({card: id})">Spouse</a></li><li id="addChildLink"><a ui-sref="submit({card: id})">Child</a></li></ul></div></div></div>'),t.put("app/components/navbar/navbar.html",'<link href="http://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet" type="text/css"><div id="navbar"><nav class="navbar"><div class="col-lg-12"><h3 class="welcome_message col-lg-10 col-lg-offset-1">Welcome to mySycamore</h3><a href="#/" ng-click="logout()" class="">logout</a></div></nav></div>')}]);