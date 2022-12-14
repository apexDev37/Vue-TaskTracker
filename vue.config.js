module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:8080/api',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' }
            }
        }
    }
}