import React from 'react'
import { Link } from '@reach/router'

import SEO from '../components/seo'

const NotFound: React.FC = () => (
  <>
    <SEO title="Uh oh" />
    <div>
      Sorry... nothing here. <Link to="/">Go home</Link>
    </div>
  </>
)

export default NotFound
