export default class IntroController{

  /* @ngInject */
constructor($scope,$rootScope){
$scope.number=12;
  $scope.recordExists=function(result){

 }

 $scope.next=function(){
   $rootScope.$emit('next');
 }



  }




}
