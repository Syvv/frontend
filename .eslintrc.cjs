module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-essential",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["vue", "@typescript-eslint"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["warn", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-self-assign": "off",
	},
};
