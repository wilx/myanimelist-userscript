import path from 'node:path';
import { fileURLToPath } from 'node:url';
import MinimizerPlugin from 'minimizer-webpack-plugin';
import us from 'webpack-userscript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: 'production',
    entry: {
        'myanimelist-userscript': path.join(__dirname, 'src', 'index.mjs')
    },
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    debug: true,
                                    shippedProposals: true
                                }
                            ]
                        ],
                        plugins: [
                            ['babel-plugin-polyfill-corejs3', {
                                method: 'usage-global',
                                version: '3.49',
                                proposals: true
                            }],
                            '@babel/plugin-transform-runtime',
                            // 'babel-plugin-minify-constant-folding',
                            'babel-plugin-minify-guarded-expressions',
                            ['babel-plugin-transform-remove-undefined', {
                                tdz: true
                            }],
                            'babel-plugin-transform-simplify-comparison-operators'
                        ]
                    }
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [
            new MinimizerPlugin({
                minimizerOptions: {
                    compress: true,
                    mangle: false,
                    format: {
                        beautify: true,
                        comments: false
                    }
                },
                extractComments: false
            })
        ],
        usedExports: true
    },
    plugins: [
        new us.UserscriptPlugin({
            headers (original) {
                return {
                    ...original,
                    name: '[name]',
                    // version: '[version]',
                    author: 'wilx',
                    homepage: 'https://github.com/wilx/myanimelist-userscript',
                    namespace: 'https://github.com/wilx/myanimelist-userscript',
                    downloadURL: 'https://github.com/wilx/myanimelist-userscript/raw/master/output/index.user.js',
                    updateURL: 'https://github.com/wilx/myanimelist-userscript/raw/master/output/index.user.js',
                    match: 'https://myanimelist.net/*',
                    'run-at': 'document-end',
                    grant: ['GM.cookie', 'GM.info']
                };
            },
            pretty: true
        })
    ],
    resolve: {
        alias: {
            node_modules: path.join(__dirname, 'node_modules')
        }
    }
};
