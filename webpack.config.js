var commander=require('commander');
commander.version('0.0.1')
  .option('-type, --type <n>', 'What type it is')
  .option('-env, --env <n>', 'What environment it is')
  .option('-bail, --bail', 'Whether it needs a bail')
  .option('-p, --p', 'Whether it has a p')
  .option('-inline, --inline', 'Whether webpack needs to run inline or not')

  .parse(process.argv);



module.exports=require('./webpack.make.js')({
  type:commander.type,
  env:commander.env,


})
