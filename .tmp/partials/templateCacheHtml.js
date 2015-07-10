angular.module("mySycamore").run(["$templateCache", function($templateCache) {$templateCache.put("app/main/main.html","
<html>
<div class=\ "container\">
  <div class=\ "center_content\">
    <h3>Let\'s Get Started by Adding to your Tree</h3>
    <div class=\ "btn-group main_button\" dropdown=\ "\">
      <button onclick=\ "location.href=\'#/submit\'\" type=\ "button\" class=\ "btn btn-lg btn-success\">Add to your Tree</button>
      <button type=\ "button\" class=\ "btn btn-lg btn-success dropdown-toggle\" data-toggle=\ "dropdown\" dropdown-toggle=\ "\">
        <span class=\ "caret\"></span>
        <span class=\ "sr-only\"></span>
      </button>
      <ul class=\ "dropdown-menu\">
        <li><a href=\ "#/submit\">Parent</a></li>
        <li><a href=\ "#/submit\">Sibling</a></li>
        <li><a href=\ "#/submit\">Spouse</a></li>
        <li><a href=\ "#/submit\">Child</a></li>
      </ul>
    </div>
  </div>
</div>

</html>"); $templateCache.put("app/views/detail.html","
<div class=\ "input-group submit-form row\">
  <div class=\ "col-md-6 col col-md-offset-3\">
    <input type=\ "text\" class=\ "form-control\" placeholder=\ "Name\">
    <input type=\ "text\" class=\ "form-control\" placeholder=\ "Est.\">
    <input type=\ "text\" class=\ "form-control\" placeholder=\ "BirthPlace\">
    <input type=\ "text\" class=\ "form-control\" placeholder=\ "Bio\">
    <input type=\ "text\" class=\ "form-control\" placeholder=\ "Phone Number\">
    <input type=\ "text\" class=\ "form-control\" placeholder=\ "Email\">
  </div>
</div>"); $templateCache.put("app/views/submit.html","
<div ng-controller=\ "\">
  <div class=\ "input-group submit-form row\">
    <div class=\ "col-md-6 col col-md-offset-3\">
      <input type=\ "text\" class=\ "form-control\" placeholder=\ "Name\">
      <input type=\ "text\" class=\ "form-control\" placeholder=\ "Est.\">
      <input type=\ "text\" class=\ "form-control\" placeholder=\ "BirthPlace\">
      <input type=\ "text\" class=\ "form-control\" placeholder=\ "Bio\">
      <input type=\ "text\" class=\ "form-control\" placeholder=\ "Phone Number\">
      <input type=\ "text\" class=\ "form-control\" placeholder=\ "Email\">
      <input type=\ "text\" class=\ "form-control\" placeholder=\ "Relation\">
      <button onclick=\ "location.href=\'#/tree\'\" class=\ "btn btn-success\">Submit</button>
    </div>
  </div>
</div>"); $templateCache.put("app/views/tree.html","
<div id=\ "tree-view\" class=\ "container\">
  <div class=\ "center_content\">
    <div id=\ "row-3\"></div>
    <div id=\ "row-2\"></div>
    <div id=\ "row-1\"></div>
    <div id=\ "row-0\"></div>
    <div class=\ "btn-group\" dropdown=\ "\">
      <button onclick=\ "location.href=\'#/submit\'\" type=\ "button\" class=\ "btn btn-lg btn-success\">Jorge Hernandez</button>
      <button type=\ "button\" class=\ "btn btn-lg btn-success dropdown-toggle\" data-toggle=\ "dropdown\" dropdown-toggle=\ "\">
        <span class=\ "caret\"></span>
        <span class=\ "sr-only\"></span>
      </button>
      <ul class=\ "dropdown-menu\">
        <li><a href=\ "#/submit\">Parent</a></li>
        <li><a href=\ "#/submit\">Sibling</a></li>
        <li><a href=\ "#/submit\">Spouse</a></li>
        <li><a href=\ "#/submit\">Child</a></li>
      </ul>
    </div>
  </div>
</div>"); $templateCache.put("app/components/navbar/navbar.html","
<div>
  <nav class=\ "navbar\">
    <h3 class=\ "welcome_message\">Welcome to mySycamore</h3>
  </nav>
</div><a href=\ "#/\">Home</a> <a href=\ "#/tree\">Tree</a> <a href=\ "#/submit\">Submit</a> <a href=\ "#/detail\">Detail</a>");}]);