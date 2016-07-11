/**
 * Created by muhammadsuhail on 2016-05-21.
 */

/* @ngInject */
export default function run($rootScope,$state,states){
$rootScope.$on('next',function(){
  var current=currentState();
$state.go(states[current].next);

});



function currentState(){
return $state.$current.self.name;

}


}
