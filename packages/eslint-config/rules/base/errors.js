/*
 * To check relative documentation to each rule, go to:
 * https://eslint.org/docs/rules/<name-of-the-rule>
 */
module.exports = {
	rules: {
		// * Enforce “for” loop update clause moving the counter in the right direction
		'for-direction': 'error',

		// * Enforces that a return statement is present in property getters
		'getter-return': ['error', { allowImplicit: true }],

		// * Disallow using an async function as a Promise executor
		'no-async-promise-executor': 'error',

		// * Disallow await inside of loops
		'no-await-in-loop': 'error',

		// * Disallow comparisons to negative zero
		'no-compare-neg-zero': 'error',

		// * Disallow assignment in conditional expressions
		'no-cond-assign': ['error', 'always'],

		// * Disallow use of console
		'no-console': 'warn',

		// * Disallow use of constant expressions in conditions
		'no-constant-condition': 'warn',

		// * Disallow control characters in regular expressions
		'no-control-regex': 'error',

		// * Disallow use of debugger
		'no-debugger': 'error',

		// * Disallow duplicate arguments in functions
		'no-dupe-args': 'error',

		// * Disallow duplicate conditions in if-else-if chains
		'no-dupe-else-if': 'error',

		// * Disallow duplicate keys when creating object literals
		'no-dupe-keys': 'error',

		// * Disallow a duplicate case label.
		'no-duplicate-case': 'error',

		// * Disallow empty statements
		'no-empty': 'error',

		// * Disallow the use of empty character classes in regular expressions
		'no-empty-character-class': 'error',

		// * Disallow assigning to the exception in a catch block
		'no-ex-assign': 'error',

		// * Disallow double-negation boolean casts in a boolean context
		'no-extra-boolean-cast': 'error',

		// * Disallow unnecessary parentheses
		'no-extra-parens': [
			'off',
			'all',
			{
				conditionalAssign: true,
				nestedBinaryExpressions: false,
				returnAssign: false,
				// * Delegate to eslint-plugin-react
				ignoreJSX: 'all',
				enforceForArrowConditionals: false,
			},
		],

		// * Disallow unnecessary semicolons
		'no-extra-semi': 'error',

		// * Disallow overwriting functions written as function declarations
		'no-func-assign': 'error',

		// * https://eslint.org/docs/rules/no-import-assign
		'no-import-assign': 'error',

		// * Disallow function or variable declarations in nested blocks
		'no-inner-declarations': 'error',

		// * Disallow invalid regular expression strings in the RegExp constructor
		'no-invalid-regexp': 'error',

		// * Disallow irregular whitespace outside of strings and comments
		'no-irregular-whitespace': 'error',

		// * Disallow Number Literals That Lose Precision
		'no-loss-of-precision': 'error',

		// * Disallow characters which are made with multiple code points in character class syntax
		'no-misleading-character-class': 'error',

		// * Disallow the use of object properties of the global object (Math and JSON) as functions
		'no-obj-calls': 'error',

		// * Disallow returning values from Promise executor functions
		'no-promise-executor-return': 'error',

		// * Disallow use of Object.prototypes builtins directly
		'no-prototype-builtins': 'error',

		// * Disallow multiple spaces in a regular expression literal
		'no-regex-spaces': 'error',

		// * Disallow returning values from setters
		'no-setter-return': 'error',

		// * Disallow sparse arrays
		'no-sparse-arrays': 'error',

		// * Disallow template literal placeholder syntax in regular strings
		'no-template-curly-in-string': 'error',

		// * Avoid code that looks like two expressions but is actually one
		'no-unexpected-multiline': 'error',

		// * Disallow unreachable statements after a return, throw, continue, or break statement
		'no-unreachable': 'error',

		// * Disallow loops with a body that allows only one iteration
		'no-unreachable-loop': [
			'error',
			{
				// * WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
				ignore: [],
			},
		],

		// * Disallow return/throw/break/continue inside finally blocks
		'no-unsafe-finally': 'error',

		// * Disallow negating the left operand of relational operators
		'no-unsafe-negation': 'error',

		// * Disallow use of optional chaining in contexts where the undefined value is not allowed
		'no-unsafe-optional-chaining': [
			'error',
			{ disallowArithmeticOperators: true },
		],

		// * Disallow Unused Private Class Members
		'no-unused-private-class-members': 'off',

		// * Disallow useless backreferences in regular expressions
		'no-useless-backreference': 'error',

		/*
		 * Disallow negation of the left operand of an in expression
		 * deprecated in favor of no-unsafe-negation
		 */
		'no-negated-in-lhs': 'off',

		/*
		 * Disallow assignments that can lead to race conditions due to usage of await or yield
		 * note: not enabled because it is very buggy
		 */
		'require-atomic-updates': 'off',

		// * Disallow comparisons with the value NaN
		'use-isnan': 'error',

		// * Ensure JSDoc comments are valid
		'valid-jsdoc': 'off',

		// * Ensure that the results of typeof are compared against a valid string
		'valid-typeof': ['error', { requireStringLiterals: true }],
	},
};
