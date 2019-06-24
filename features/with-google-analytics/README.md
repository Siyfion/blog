# Setting up a Google Analytics
These are instructions on how to add Google Analytics functionality to the starter kit.

## Install
To install, add the plugin via yarn:

```bash
yarn add gatsby-plugin-google-analytics
```

## Configuration
Generally, the defaults are sensible, but at a minimum you _must_ tell the plugin the Google Analytics tracking ID.

In the `gatsby-config.js` file in the root of the project:

Minimal example
```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID"
      }
    }
  ]
}
```

Full example
```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Any additional create only fields (see below)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      }
    }
  ]
}
```

### Create Only Fields

This plugin supports all optional Create Only Fields [documented in Google Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#create).

## Event Tracking

Internally the Google Analytics plugin utlises `analytics.js` to send metrics, in doing so it adds a `ga` field to the `window` object. In order to track custom events please refer to the Google Analytics [documentation](https://developers.google.com/analytics/devguides/collection/analyticsjs/events) on event tracking.

## Other Considerations

If you need to track "outbound" links to other websites, the plugin provides an `OutboundLink` component that can be used to get this functionality. To use it, simply import and use it like you would the `<a>` tag:

```javascript
import React
import { OutboundLink } from 'gatsby-plugin-google-analytics'

export default () => {
  <div>
    <OutboundLink
      href="https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/"
    >
      Visit the Google Analytics plugin page!
    </OutboundLink>
  </div>
}
```