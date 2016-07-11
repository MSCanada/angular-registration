/**
 * Created by muhammadsuhail on 2016-05-21.
 */
import bmoHeader from './bmoHeader';
import bmoDropdown from './bmoDropdown';
import bmoCheckbox from './bmoCheckbox';
import bmoTime from './bmoTime';


const modules=[

  bmoHeader,
  bmoDropdown,
  bmoCheckbox,
  bmoTime

]

export default angular.module("directives",modules)
  .name;
