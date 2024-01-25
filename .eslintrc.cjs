module.exports = {
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: 'module',
        parser: '@typescript-eslint/parser'
    },
    parser: 'vue-eslint-parser',
    extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
    plugins: ['prettier', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
}
