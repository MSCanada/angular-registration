/**
 * Created by muhammadsuhail on 2016-05-21.
 */
import './bmoHeader.scss'
const modules = []
export default angular.module("bmoHeader", modules)
  .directive('bmoDirective', /* @ngInject */($rootScope, $window, locale)=>({
      restrict: 'E',
      scope: 'true',
      link($scope, $element, $attrs){
        $scope.hideHeader = true;
        $scope.TXT = locale.language;

        $scope.changeLanguage = function () {
          if ($scope.TXT == 'FR')
            $scope.TXT = 'EN'
          else
            $scope.TXT = 'FR'


        }
        $scope.$watch('TXT', function () {
          locale.language = $scope.TXT;
          $rootScope.$emit("localeChange",locale.language);

        })


      },
      template(){
        return `
<div class="bmo-Header"><button class="moveRight" ng-click="changeLanguage()">{{TXT}}</button></div>
`

      }

    })
  )
  .name;
