const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimize: false,
      },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(svg)$/,
                exclude: /node_modules/,
                use: '@svgr/webpack',
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: [/node_modules/],
                use: 'file-loader',
              
            },
        ],
    },
};
