/**
 * Created by muhammadsuhail on 2016-05-21.
 */
import pagesModule from '../pages';
import states from './states.js'
import navigationRun from './navigation.run.js';

const modules=[

  pagesModule,

]

export default angular.module("navigation",modules)
  .run(navigationRun)
  .constant("states",states)
  .name;
