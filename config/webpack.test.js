const helpers = require('./helpers');

/**
 * Webpack Plugins
 */
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

/**
 * Webpack Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'test';

module.exports = function (options) {
    return {
        devtool: 'inline-source-map',

        resolve: {
            extensions: ['.ts', '.js'],
            modules: [helpers.root('src'), 'node_modules']
        },

        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    loader: 'source-map-loader',
                    exclude: [
                        helpers.root('node_modules/rxjs'),
                        helpers.root('node_modules/@angular')
                    ]
                },

                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: 'awesome-typescript-loader',
                            query: {
                                sourceMap: false,
                                inlineSourceMap: true,
                                compilerOptions: {
                                    removeComments: true

                                }
                            },
                        },
                        'angular2-template-loader'
                    ],
                    exclude: [/\.e2e\.ts$/]
                },

                {
                    test: /\.json$/,
                    loader: 'json-loader',
                    exclude: [helpers.root('src/index.html')]
                },

                {
                    test: /\.css$/,
                    loader: ['to-string-loader', 'css-loader'],
                    exclude: [helpers.root('src/index.html')]
                },

                {
                    test: /\.scss$/,
                    loader: ['raw-loader', 'sass-loader'],
                    exclude: [helpers.root('src/index.html')]
                },

                {
                    test: /\.html$/,
                    loader: 'raw-loader',
                    exclude: [helpers.root('src/index.html')]
                },

                {
                    enforce: 'post',
                    test: /\.(js|ts)$/,
                    loader: 'istanbul-instrumenter-loader',
                    include: helpers.root('src'),
                    exclude: [
                        /\.(e2e|spec)\.ts$/,
                        /node_modules/
                    ]
                }

            ]
        },

        plugins: [
            new DefinePlugin({
                'ENV': JSON.stringify(ENV),
                'process.env': {
                    'ENV': JSON.stringify(ENV),
                    'NODE_ENV': JSON.stringify(ENV)
                }
            }),

            new ContextReplacementPlugin(
                /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
                helpers.root('src'),
                { }
            ),

            new LoaderOptionsPlugin({
                debug: false,
                options: { }
            })
        ],

        performance: {
            hints: false
        },

        node: {
            global: true,
            process: false,
            crypto: 'empty',
            module: false,
            clearImmediate: false,
            setImmediate: false
        }
    };
}
