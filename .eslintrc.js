module.exports = {
  "env": {
    "es6": true,
    "browser": true
  },
  "extends": [
    "eslint:recommended",
    "airbnb-base",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "globals": {
  },
  "ignorePatterns": [
    "**/*.css",
    "**/*.scss",
    "public/build/**",
    "node_modules/**"
  ],
  "overrides": [
    {
      "files": ["**/*.svelte"],
      "processor": "svelte3/svelte3"
    }
  ],
  "plugins": [
    "import",
    "sort-imports-es6-autofix",
    "svelte3"
  ],
  "rules": {
    // Next 3 rules are known to not work correctly together with eslint-plugin-svelte3.
    // See https://github.com/sveltejs/eslint-plugin-svelte3/blob/master/OTHER_PLUGINS.md
    "import/first": "off",
    "import/no-duplicates": "off",
    "import/no-mutable-exports": "off",
    "import/no-unresolved": "off", // otherwise does not recognize imports from root (src)
    "import/namespace": "off",
    "import/prefer-default-export": "off",
    "import/no-deprecated": "warn",
    "import/named": "off",
    "linebreak-style": "off",
    "no-plusplus": "off",
    "require-await": "error",
    "no-return-await": "error",
    "no-await-in-loop": "warn",
    "no-useless-rename": [
      "warn",
      {
        "ignoreDestructuring": false,
        "ignoreImport": false,
        "ignoreExport": false
      }
    ]
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "settings": {
    "svelte3/ignore-styles": () => true
  }
}