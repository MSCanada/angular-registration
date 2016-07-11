/**
 * Created by muhammadsuhail on 2016-05-21.
 */
import './bmoTime.scss'
import bmoTime from './bmoTime.js'
import label from './bmoTime'
const modules = []
export default angular.module("bmoTime", modules)
  .constant("bmoTime", bmoTime)
  .directive('bmoTime', /* @ngInject */($rootScope, $window, locale)=>({
      restrict: 'EA',
      require: 'ngModel',
      scope: {
        ngModel: '=',
      },
      link($scope, $element, $attrs, ngModelCtrl){
        $scope.label=label['EN'];

        // converts modelValue into View Value
        ngModelCtrl.$formatters.push(function (modelValue) {
        if(modelValue)

          return modelValue.toUpperCase();
        });


        ngModelCtrl.$render = function () {
          if(!ngModelCtrl.$viewValue)
          return
            var fullName = ngModelCtrl.$viewValue;
          var name_array = fullName.split(" ");
          $scope.firstName = name_array[0];
          $scope.lastName = name_array[1];


        }

        $rootScope.$on("localeChange", function (event, data) {
          $scope.label = label[data];
          console.log($scope);

        })
        //
        $scope.$watch('firstName + lastName',function(){
        if($scope.firstName && $scope.lastName)
        ngModelCtrl.$setViewValue($scope.firstName + " "+ $scope.lastName);

        })
        //
        ngModelCtrl.$parsers.push(function(viewValue) {
        if(viewValue)
        return viewValue.toLowerCase();
        });


      },
      template(){
        return `
       <div>
      {{label.fullName}}: <input type="text" ng-model="ngModel"/>
      <br/> <br/>
      {{label.firstName}}:<input type="text" ng-model="firstName">
      <br/> <br/>
      {{label.lastName}}:<input type="text" ng-model="lastName">
      </div> <br/>



`

      }

    })
  )
  .name;
