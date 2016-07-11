/**
 * Created by muhammadsuhail on 2016-05-21.
 */
import './style.scss'
import detailsController from './Controller.js'
import detailRoutes from './Routes.js'
import run from './Run.js'
const modules=[

]

export default angular.module("time",modules)
  .controller("DetailsController",detailsController)
  .config(detailRoutes)
  .run(run)
  .name;
