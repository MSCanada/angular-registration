/**
 * Created by muhammadsuhail on 2016-05-21.
 */
import introController from './Controller.js'
/* @ngInject */
export default function routes($stateProvider){

$stateProvider.state("details",{
  url:"/details",
  
  views:{
    "pages@":{
      template:require("./tpl.html"),
      controller: "DetailsController",
      controllerAs:"Details"

    }
  }


})


}
