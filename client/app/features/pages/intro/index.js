/**
 * Created by muhammadsuhail on 2016-05-21.
 */
import './style.scss'
import introController from './Controller.js'
import introRoutes from './Routes.js'
import run from './Run.js'
const modules=[

]

export default angular.module("intro",modules)
  .controller("IntroController",introController)
  .config(introRoutes)
  .run(run)
  .name;
