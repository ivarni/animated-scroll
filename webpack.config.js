const getConfig = require('hjs-webpack');

const config = getConfig({

    in: 'src/app.js',

    out: 'dist',

    output: {
        hash: true
    },

    clearBeforeBuild: true,

});

module.exports = config;
