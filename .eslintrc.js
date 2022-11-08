module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    ignorePatterns: ['node_modules/*', 'dist/*', '*.css', '*.json', 'cypress/*', '*.woff', '*.woff2', '*.ttf'],
    "rules": {
    }
}
