const webpack = require('webpack');
module.exports = {
  reactStrictMode: true,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    );
    config.resolve.fallback = {
      fs: false
      //   net: false,
      //   dns: false,
      //   tls: false,
      //   assert: false,
      //   path: false,
      //   events: false,
      //   process: false
    };

    return config;
  }
};
