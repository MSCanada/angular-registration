/**
 * Created by muhammadsuhail on 2016-05-21.
 */
import directives from './directives';
import models from './models';


const modules=[
  models,
  directives,


]

export default angular.module("components",modules)
  .name;
