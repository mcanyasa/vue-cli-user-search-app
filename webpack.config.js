const HTMLWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { HotModuleReplacementPlugin } = require('webpack');


module.exports = {
    mode: 'development',
    entry: join(__dirname, 'app.js'), 
    output: {
        path: join(__dirname, 'build'), 
        filename: 'app.bundled.js'
    },
    devServer:{
        port:1000,
        hot:true,
        open:true,
        historyApiFallback:true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }, {
                test: /.vue$/, 
                loader: 'vue-loader',
            },
            {
                test: /\.css$/, 
                use: [
                    'vue-style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devtool: 'inline-source-map',
    plugins: [
        new HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            showErrors: true,
            cache: true,
            title:'Vue with Webpack',
            favicon: join(__dirname, 'logo.png'),
            template: join(__dirname, 'index.html')
        })
    ]
};