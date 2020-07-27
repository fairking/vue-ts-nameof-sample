module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ["eslint:recommended", "plugin:vue/recommended", "prettier", "prettier/vue", "@vue/typescript"],
	rules: {
		"no-console": "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-unused-vars": "off"
	},
	parserOptions: {
		parser: "@typescript-eslint/parser",
		//tsconfigRootDir: __dirname,
		//project: ["./tsconfig.json"],
		//extraFileExtensions: [".vue"],
	},
	plugins: ["vue"],
	overrides: [
		{
			files: ["**/__tests__/*.{j,t}s?(x)"],
			env: {
				jest: true,
			},
		},
	],
};