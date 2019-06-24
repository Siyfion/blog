## Overriding Site Wide Metadata
You can override the site wide metatdata on an individual page like so:

```javascript
/* pages/mypage.js */
import React from 'react'
import Helmet from 'react-helmet'

export default () => (
  <div>
    <Helmet>
      <title>My new title</title>
    </Helmet>
    <h1>Check out my Super cool page!!!!11!1!!!</h1>
  </div>
)

```
