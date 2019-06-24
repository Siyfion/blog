# Adding Custom Web Fonts
In order to add webfonts to your app you should use the [Gatsby WebFont Loader](https://www.gatsbyjs.org/packages/gatsby-plugin-web-font-loader/?=font).

## Install
```bash
yarn add gatsby-plugin-web-font-loader
```

## Configure
In your `gatsby-configure.js` add the following config object

```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        /**
         * Here is where you can add config optoins from Webfont-loader
         *
         * for example, if you wanted to use google:
         *
         * google: {
         *   families: ['Droid Sans', 'Droid Serif']
         * } 
         */
      }
    }
  ]
}
```

more information about the configuration object can be found in the [Webfont Loader Readme](https://github.com/typekit/webfontloader)
