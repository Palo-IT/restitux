var path = require('path');
var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');



module.exports = function () {
  var env = (process.env.MY_IONIC_ENV || process.env.IONIC_ENV);
  console.log("used env  = "+env);
  useDefaultConfig[process.env.IONIC_ENV].resolve.alias = {
    "@app/env": path.resolve(__dirname + '/../src/environments/environment' + (env  === 'dev' ? '' : '.'+env)  + '.ts'),
  };
  return useDefaultConfig;
};
