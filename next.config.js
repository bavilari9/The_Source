const withCSS = require("@zeit/next-css");
require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')

const withImages = require('next-images')
const withReactSvg = require('next-react-svg')

module.exports = withCSS(withImages(withReactSvg({
    include: path.resolve(__dirname, 'recources/icon/svg'),
    webpack(config, options) {
        
        config.plugins = config.plugins || [];
        config.plugins = [
            ...config.plugins,

            // Read the .env file
            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true
            })
        ];
        return config
    }
})));
