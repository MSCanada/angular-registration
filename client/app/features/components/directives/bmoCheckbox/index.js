/**
 * Created by muhammadsuhail on 2016-05-21.
 */
import './bmoCheckbox.scss'
import bmoCheckbox from './bmoCheckbox.js'
const modules = []
export default angular.module("bmoCheckbox", modules)
  .constant("bmoCheckbox", bmoCheckbox)
  .directive('bmoCheckbox', /* @ngInject */($rootScope, $window, locale)=>({
      restrict: 'E',
      scope: {
        recordExists:'&'

      },
      link($scope, $element, $attrs){
      
$scope.checked={
  yes:false,
  no:true
}
$scope.yesClicked=function(){
  $scope.checked.yes=true;
  $scope.checked.no=false;

  $scope.recordExists({
    "record":true,
  });

}

$scope.noClicked=function(){
  $scope.checked.yes=false;
  $scope.checked.no=true;
  $scope.recordExists({
    "record":false,
  });
}



      },
      template(){
        return `
<div class="introPage">
    <div class="question">
    <span>
      Have you ever registered first?
    </span>
    </div>
    <div class="checkBox">
    <div class="firstElement"> <span>Yes</span>

      <div class="square-radio" ng-class="{ 'square-radio--clicked': checked.yes }" ng-click="yesClicked()">
        <div class="square-radio--content"  ></div>
      </div>
    </div>
    <div class="secondElement"> <span>No</span>

      <div class="square-radio" ng-class="{ 'square-radio--clicked': checked.no }" ng-click="noClicked()">
        <div class="square-radio--content"></div>
      </div>
    </div>
</div>

  </div>


`

      }

    })
  )
  .name;
