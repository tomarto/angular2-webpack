const webpack = require('webpack');
const helpers = require('./helpers');

/*
 * Webpack Plugins
 */
// problem with copy-webpack-plugin
const AssetsPlugin = require('assets-webpack-plugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ngcWebpack = require('ngc-webpack');

/*
 * Webpack Constants
 */
const METADATA = {
    isDevServer: helpers.isWebpackDevServer()
};

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function (options) {
    isProd = options.env === 'production';
    return {
        entry: {
            'polyfills': './src/polyfills.browser.ts',
            'main': './src/main.browser.ts'
        },

        resolve: {
            extensions: ['.ts', '.js', '.json'],
            modules: [helpers.root('src'), helpers.root('node_modules')],

        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: 'awesome-typescript-loader',
                            options: {
                                configFileName: 'tsconfig.webpack.json'
                            }
                        },
                        {
                            loader: 'angular2-template-loader'
                        }
                    ],
                    exclude: [/\.(spec|e2e)\.ts$/]
                },

                {
                    test: /\.json$/,
                    use: 'json-loader'
                },

                {
                    test: /\.css$/,
                    use: ['to-string-loader', 'css-loader'],
                    exclude: [helpers.root('src', 'styles')]
                },

                {
                    test: /\.scss$/,
                    use: ['to-string-loader', 'css-loader', 'sass-loader'],
                    exclude: [helpers.root('src', 'styles')]
                },

                {
                    test: /\.html$/,
                    use: 'raw-loader',
                    exclude: [helpers.root('src/index.html')]
                },

                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                    use: 'file-loader'
                },

                {
                    test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
                    use: 'file-loader'
                }
            ],

        },

        plugins: [
            new AssetsPlugin({
                path: helpers.root('dist'),
                filename: 'webpack-assets.json',
                prettyPrint: true
            }),

            new CheckerPlugin(),

            new CommonsChunkPlugin({
                name: 'polyfills',
                chunks: ['polyfills']
            }),

            new CommonsChunkPlugin({
                name: 'vendor',
                chunks: ['main'],
                minChunks: module => /node_modules/.test(module.resource)
            }),

            new CommonsChunkPlugin({
                name: ['polyfills', 'vendor'].reverse()
            }),

            new ContextReplacementPlugin(
                /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
                helpers.root('src'),
                { }
            ),

            new CopyWebpackPlugin([
                { from: 'src/assets', to: 'assets' }
            ]),

            new HtmlWebpackPlugin({
                template: 'src/index.html',
                metadata: METADATA,
            }),

            new ScriptExtHtmlWebpackPlugin({
                defaultAttribute: 'defer'
            }),

            new LoaderOptionsPlugin({}),

            new NormalModuleReplacementPlugin(
                /facade(\\|\/)async/,
                helpers.root('node_modules/@angular/core/src/facade/async.js')
            ),
            new NormalModuleReplacementPlugin(
                /facade(\\|\/)collection/,
                helpers.root('node_modules/@angular/core/src/facade/collection.js')
            ),
            new NormalModuleReplacementPlugin(
                /facade(\\|\/)errors/,
                helpers.root('node_modules/@angular/core/src/facade/errors.js')
            ),
            new NormalModuleReplacementPlugin(
                /facade(\\|\/)lang/,
                helpers.root('node_modules/@angular/core/src/facade/lang.js')
            ),
            new NormalModuleReplacementPlugin(
                /facade(\\|\/)math/,
                helpers.root('node_modules/@angular/core/src/facade/math.js')
            ),

            new ngcWebpack.NgcWebpackPlugin({
                disabled: true,
                tsConfig: helpers.root('tsconfig.webpack.json'),
                resourceOverride: helpers.root('config/resource-override.js')
            }),

            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                jquery: 'jquery',
                "window.jQuery": 'jquery',
                Tether: 'tether',
                "window.Tether": 'tether'
            })
        ],

        node: {
            global: true,
            crypto: 'empty',
            process: true,
            module: false,
            clearImmediate: false,
            setImmediate: false
        }

    };
}
