/**
 * Date: 12/7/20
 */
const path = require('path');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src')
            }
        },
        devtool: process.env.NODE_ENV === 'development' ? '#eval-source-map' : ''
    },
    devServer: {
        clientLogLevel: 'warning', //
        historyApiFallback: true, //
        hot: true, //
        compress: true, //
        port: 3000,
        host: 'localhost',
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        publicPath: '/',
        quiet: true, //
        proxy: {
            // detail: https://cli.vuejs.org/config/#devserver-proxy
            [process.env.VUE_APP_BASE_API]: {
                target: 'http://10.126.146.68:9090',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        },
        watchOptions: {
            poll: false
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*']
                    })
                ]
            }
        }
    }
};
