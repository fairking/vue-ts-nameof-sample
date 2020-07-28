const path = require("path");

module.exports = {
    chainWebpack: config => {

        config.module
            .rule('ts')
            .exclude.add(/node_modules/)
            .end()
            .test(/\.ts$/)
            .use('ts-loader')
            .loader('ts-loader')
            .options({
                transpileOnly: true,
                // Transformer functions do not work with happy pack mode due to process forking, see:
                // https://github.com/TypeStrong/ts-loader#getcustomtransformers--program-program---before-transformerfactory-after-transformerfactory--
                getCustomTransformers: path.resolve(__dirname, 'vue-ts-nameof.js'),
                appendTsSuffixTo: [/\.vue$/],
                happyPackMode: true
            })
            .end();
    }
};
