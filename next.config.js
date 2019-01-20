const path = require('path')

const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withTypescript = require("@zeit/next-typescript");

const StyleLintPlugin = require('stylelint-webpack-plugin')

const compose = require('next-compose-plugins')

require('dotenv').config()

module.exports = compose([
	withTypescript,
	withCSS,
	[withSass, {
		cssModules: true
	}],
], {
	publicRuntimeConfig: {
		PORT: process.env.PORT
	},
	webpack(config, options) {
		const rules = [{
			test: /\.s?(a|c)ss$/,
			use: [{
				loader: 'sass-resources-loader',
				options: {
					resources: './styles/extra/*.scss'
				},
			}, ]
		}, {
			test: /\.css$/,
			include: path.join(__dirname, 'src/components'),
			use: [
				'style-loader',
				{
					loader: 'typings-for-css-modules-loader',
					options: {
						modules: true,
						namedExport: true
					}
				}
			]
		}]

		config.node = {
			fs: 'empty'
		}

		if (!typeof window === "undefined") {
			config.output.globalObject = 'self'
		}

		config.module.rules = [...config.module.rules, ...rules]
		config.plugins = [...config.plugins, new StyleLintPlugin()]

		return config
	}
})