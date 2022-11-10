const path = require('path');
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

//返回处理样式loader
const getStyleLoaders = (pre) => {
    return [
        "style-loader",
        "css-loader",
        {
            //处理css兼容性问题
            //配合package.json中browserlist来指定兼容性
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: ["postcss-preset-env"],
                },
            },
        },
        pre && {
            loader: pre,
            options: pre === 'less-loader' ? {
                //antd自定义主题色
                lessOptions: {
                    modifyVars: { "@primary-color" : "#1DA57A" },
                    javascriptEnabled: true,
                }
            } : {},
        },
    ].filter(Boolean);
}


module.exports = {
    entry: './src/index.jsx',
    output: {
        path: undefined,
        filename: "static/js/[name].js",
        chunkFilename: "static/js/[name].chunk.js",
        assetModuleFilename: "static/media/[hash:10][ext][query]",
    },
    module: {
        rules: [
            //处理css
            {
                test: /\.css$/,
                use: getStyleLoaders(),
            },
            {
                test: /\.less$/,
                use: getStyleLoaders("less-loader"),
            },
            {
                test: /\.s[ac]ss$/,
                use: getStyleLoaders("sass-loader"),
            },
            {
                test: /\.styl$/,
                use: getStyleLoaders("stylus-loader"),
            },
            //处理图片
            {
                test: /\.(jpe?g|png|gif|webp|svg)/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize:10*1024,
                    },
                },
            },
            //处理其他资源
            {
                test: /\.(woff2?|tff)/,
                type: "asset/resource",
            },
            //处理js
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, '../src'),
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                    cacheCompression:false,
                    plugins: [
                        'react-refresh/babel', //激活js的HMR
                    ],
                },
            },
        ],

    },
    //处理html
    plugins:  [
        new EslintWebpackPlugin({
            context:path.resolve(__dirname, '../src'),
            exclude:"node_modules",
            cache:true,
            cacheLocation:path.resolve(__dirname, "../node_modules/.cache/.eslintcache"),
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
        }),
        new ReactRefreshWebpackPlugin()
    ],
    mode: "development",
    devtool: 'cheap-module-source-map',
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                //react react-dom react-router-dom 一起打包成一个js文件
                react: {
                    test: /[\\/]node_modules[\\/]react(.*)?[\\/]/,
                    name: 'chunk-react',
                    priority: 40,
                },
                //antd单独打包
                antd: {
                    test: /[\\/]node_modules[\\/]antd[\\/]/,
                    name: 'chunk-antd',
                    priority: 30,
                },
                //剩下node_modules单独打包
                libs: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'chunk-libs',
                    priority: 20,
                },
            },
        },
        runtimeChunk: {
            name: (entrypoint) => `runtime~$(entrypoint.name).js`,
        },
    },
    //webpack解析模块加载选项
    resolve: {
        //自动补全文件扩展名
        extensions: [".jsx", ".js", ".json"],
    },
    devServer: {
        host: "localhost",
        port: 3000,
        open: true,
        hot: true,  //开启HMR
        historyApiFallback:true, //解决前端路由刷新404问题
    },
    performance: false, //关闭性能分析，提升打包速度
};
