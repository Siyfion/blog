# Adding Typography.js to the Starter Kit
These instructions detail how to add the Typography.js library to the starter kit.

## Install

To install, add the plugin via yarn, along with the required libraries:

```bash
yarn add gatsby-plugin-typography react-typography typography
```

## Configuration

In the `gatsby-config.js` file in the root of the project:

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    }
  ]
}
```

Please copy the example `utils/typography.js` to your own `/src/utils/` folder. Then, adapt the configuration with the [various settings](https://kyleamathews.github.io/typography.js/) that are available. (Check the API section)
