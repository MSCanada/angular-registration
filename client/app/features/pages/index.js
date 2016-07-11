/**
 * Created by muhammadsuhail on 2016-05-21.
 */
import introModule from './intro';
import datailsModule from './details'

const modules=[

  introModule,
  datailsModule

]

export default angular.module("pages",modules)
  .name;
