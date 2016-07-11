/**
 * Created by muhammadsuhail on 2016-05-21.
 */
import introController from './Controller.js'
/* @ngInject */
export default function routes($stateProvider){

$stateProvider.state("intro",{
  url:"/intro",
  views:{
    "pages@":{
      template:require("./tpl.html"),
      controller: "IntroController",
      controllerAs:"Intro"

    }
  }


})


}
