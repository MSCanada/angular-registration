export default class DetailsController{

  /* @ngInject */
constructor($scope,$rootScope,$stateParams){
$scope.number=12;
  $scope.recordExists=function(result){

 }

 $scope.next=function(){
   $rootScope.$emit('next');
 }

$scope.name="";

  }




}
