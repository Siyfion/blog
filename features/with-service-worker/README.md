# Setting up a service worker with Workbox
These are instructions on how to include a service worker for caching and offline functionality. You'll need to use a different plugin to make a service worker that includes more Progressive Web App functionlaity (i.e. notifications)

## Install
To install, add the plugin via yarn:

```bash
yarn add gatsby-plugin-offline
```

and in the `gatsby-config.js` file in the root of the project:

```javascript
module.exports = {
  plugins: ['gatsby-plugin-offline']
}
```

## Configuration
The defaults are reasonably sensible, but should you need a custom workbox config, you can pass them like:

```javascript
const options = {
  /* Your options here */
}

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-offline',
      options: options
    }
  ]
}
```

## Other Considerations
It is recommended that this plugin is used with [gatsby-plugin-manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest). If you use that library, make sure to include `gatsby-plugin-offline` *before* the manifest plugin, in order to include the maifest in the service worker
