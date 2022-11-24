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
			extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
		},
		externals,
		module: {
			rules: [
				{
					test: /\.(ttf|otf)$/i,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: false,
								name: '[name].[ext]',
								outputPath: 'fonts',
							},
						},
					],
				},
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
					options: {
						svgoConfig: {
							plugins: [
								{
									name: 'removeViewBox',
									active: false,
								},
							],
						},
					},
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: true,
								name: '[name].[ext]',
								outputPath: 'images',
							},
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
