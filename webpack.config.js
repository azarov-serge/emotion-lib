const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
	const { mode } = argv;
	const isProd = mode === 'production';
	const externals = isProd
		? {
				react: 'react',
				'react-dom': 'react-dom',
				// "@emotion/core": "@emotion/core",
				// "@emotion/react": "@emotion/react",
				// "@emotion/styled": "@emotion/styled"
		  }
		: {};

	return {
		mode,
		entry: isProd ? './src/index.ts' : './src/demo.tsx',
		devtool: 'source-map',
		output: {
			filename: 'index.js',
			path: path.resolve(__dirname, 'dist'),
			libraryTarget: 'umd',
			clean: true,
		},
		resolve: {
			alias: {
				'@': path.join(__dirname, './src'),
			},
			extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
		},
		externals,
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.(ts|tsx)?$/,
					use: ['babel-loader', 'ts-loader'],
					exclude: /node_modules/,
				},
				{
					test: /\.svg$/,
					loader: require.resolve('@svgr/webpack'),
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: [
					  {
						loader: 'file-loader',
					  },
					],
				  },
			],
		},

		plugins: [
			new HtmlWebpackPlugin({
				template: './public/index.html',
			}),
		],

		devServer: {
			historyApiFallback: true,
			port: 9009,
			hot: true,
		},
	};
};
