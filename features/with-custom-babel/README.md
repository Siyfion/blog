# Creating a custom Babel configuration

## Warning

**NOTE: These are instructions are included for completeness, _in-case_ you need to add any _additional_ custom experimental babel plugins to you babel configuration.**

## Defaults

It should be noted that Gatsby already supports the latest `preset-env`, which means you are able to use all the latest JavaScript without needing to micromanage which syntax transforms are needed by your target environment(s).

By default Gatsby supports the following:

> Gatsby supports by default the last two versions of major browsers, IE 9+, as well as any browser that still as 1%+ browser share.

It will also add polyfills automatically, as required.

By default, Gatsby's `.babelrc` file looks like the following:

```javascript
{
  presets: [
    [
      "@babel/preset-env",
      {
        loose: true,
        modules: false,
        useBuiltIns: "usage",
        shippedProposals: true,
        targets: {
          browsers: [">0.25%", "not dead"],
        },
      },
    ],
    [
      "@babel/preset-react",
      {
        useBuiltIns: true,
        pragma: "React.createElement",
      },
    ],
  ],
  plugins: [
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true,
      },
    ],
    "@babel/plugin-syntax-dynamic-import",
    "babel-plugin-macros",
    [
      "@babel/plugin-transform-runtime",
      {
        helpers: true,
        regenerator: true,
      },
    ],
  ],
}
```


## Customisation

In order to customise the babel configuration, please ensure that you copy the [most up-to-date .babelrc template](https://www.gatsbyjs.org/docs/babel/#how-to-use-a-custom-babelrc-file) directly from the Gatsby docs, and then copy the contents to a `.babelrc` file in the root of the project.

After this, add any additional babel plugins that you require (after careful consideration) with:

`yarn add @babel/plugin-xxx`

Then add the plugin to the plugins array in the `.babelrc` file with any configuration options required.