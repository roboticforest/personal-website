import path from 'path';
const rootDir = import.meta.dirname;

export default {
    mode: 'development',
    entry: path.resolve(rootDir, 'src', 'index.js'),
    output: {
        path: path.resolve(rootDir, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(rootDir, 'src'),
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                "@babel/preset-react"
                            ]
                        }

                    }
                ]
            }
        ]
    }
};
