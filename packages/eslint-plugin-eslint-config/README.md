# @ekzo-dev/eslint-plugin-eslint-config

ESlint default configurations

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@ekzo-dev/eslint-plugin-eslint-config`:

```sh
npm install @ekzo-dev/eslint-plugin-eslint-config --save-dev
```

## Usage

Add `config` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["@ekzo-dev/eslint-config"],
  "extends": [
    "plugin:@ekzo-dev/eslint-config/nx-recommended",
    "plugin:@ekzo-dev/eslint-config/javascript-recommended",
    "plugin:@ekzo-dev/eslint-config/typescript-recommended",
    "plugin:@ekzo-dev/eslint-config/jest-recommended",
    "plugin:@ekzo-dev/eslint-config/prettier-recommended",
    "plugin:@ekzo-dev/eslint-config/rules-recommended"
  ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@ekzo-dev/eslint-config/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->

| Name |
| :--- |

<!-- end auto-generated rules list -->


