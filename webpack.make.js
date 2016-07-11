
var ConfigLocal=require('./webpack.local');
var ConfigDev=require('./webpack.dev');
var ConfigDefault=require('./webpack.default');
var _=require('lodash');

module.exports = function(options) {
var defaultConfig=new ConfigDefault(options);
var newConfig ={};
if(options.env==='local')
  newConfig=new ConfigLocal();
  else
  newConfig=new ConfigDev();
var config=_.merge(defaultConfig,newConfig);
return config;

}



