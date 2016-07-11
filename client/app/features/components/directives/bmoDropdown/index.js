/**
 * Created by muhammadsuhail on 2016-05-21.
 */
import './bmoDropdown.scss'
import dropDownText from './dropDownText.js'
const modules = []
export default angular.module("bmoDropdown", modules)
  .constant("dropDownText", dropDownText)
  .directive('bmoDropdown', /* @ngInject */($rootScope, $window, locale)=>({
      restrict: 'E',
      scope: 'true',
      link($scope, $element, $attrs){

        $rootScope.$on("localeChange", function (event, data) {
          $scope.menu = dropDownText[data];
   

        })


        $scope.dropdownClick = function () {
    
          document.getElementById("myDropdown").classList.toggle("show");
        }

        $window.onclick = function (event) {
          if (!event.target.matches('.dropbtn')) {

            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
        }

      },
      template(){
        return `
<div class="dropdown">
  <button ng-click="dropdownClick()" class="dropbtn">...</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#home">{{menu.Home}}</a>
    <a href="#about">{{menu.About}}</a>
    <a href="#contact">{{menu.Contact}}</a>
  </div>
</div>


`

      }

    })
  )
  .name;
