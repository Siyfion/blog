# Adding Apollo Simple Authentication to the Starter Kit

This feature aims to add simple authentication to the starter kit.

It does this by separating the app into two sections; statically generated pages, and dynamically generated pages. The "root url" from which all dynamic application routes are branched from is configured in `gatsby-node.js` which, in-short, tells Gatsby to associate the `/src/pages/app.js` page with _all_ route URLs starting with `/app/*`. The `app` page then handles all dynamic routing within the app by making use of `@reach/router` and the `Router` component.

We make use of this to create two routes `/app/login` and `/app/profile`.

The `/app/login` route is just a simple React component, with a prop `path='/app/login'` which the router uses in order to toggle whether it renders or not. It contains a login form hooked up to an Apollo Client `Mutation` component, this sends the form values to the server and (on success) gets back a JWT token, which it stores in `localStorage`.

The apollo client (`./GraphQL/client.js`) has a custom `withAuth` link, which (if it exists) puts the JWT token in `localStorage` into the `'Authorization'` header sent to the server, this provides the server with credentials that it can use to authenticate and authorise the user making the request.

The `/app/profile` route is configured with a `PrivateRoute` wrapper component. Internally, the `PrivateRoute` component checks to see whether there is a token in `localStorage` and if not, redirects users to the login page. If the token does exist, it simply renders the component passed to it and passes through any props provided. The profile page then uses an Apollo Client `Query` component to query the API for the user credentials. This API request is an authenticated route and will _only_ succeed if a valid token is passed to it.

## Installation

1. [Install Dependencies](###Install-Dependencies)
1. [Add Auth Utils](###Add-Auth-Utils)
1. [Update Apollo Client](###Updated-Apollo-Client)
1. [Add Client-Side Routing](###Add-Client-Side-Routing)
1. (Optional) [Add Components](###Add-Components)

### Install Dependencies

**Note:** In order to get started with this feature, we assume that you have already run through the `with-apollo-client` feature.

```bash
yarn add apollo-link-context
```

### Add Auth Utils

Copy the provided `./utils/auth.js` into `/src/utils/`. This file can be used to add any "global" authentication utilities, such as permissions checks, login/logout HoCs, etc.

### Update Apollo Client

Update the Apollo Client configuration by copying the provided template `./GraphQL/client.js` over the one created as part of the `with-apollo-client` feature (`/src/GraphQL/client.js`).

### Add Client-Side Routing

Copy the provided `./pages/app.js` file into `/src/pages/` and then update the `/gatsby-node.js` file with the content provided in `./gatsby-node.js`. This adds client-side routing for all urls with the form `https://domain.com/app/*`.

**Note:** If you do not wish to add the example components, please remove/replace the components specified in `/src/pages/app.js` with your own defined ones.

### Add Components

Please copy the contents of the `./components` folder into `/src/components`. This will give you `Login`, `PrivateRoute` and `Profile` components, please take a look at the code to see how they work.

This example utilises queries (`./GraphQL/mutations.js`) and mutations (`./GraphQL/mutations.js`) defined in their respective template files. Please copy these files over too `/src/GraphQL/`.

**Note:** The `/src/pages/index.js` can be updated to import it's query like so:

```js
import { GET_ALL_USERS } from '../GraphQL/queries'
```

## Notes

### Clear/Reset store on logout

It's critical that when a user logs out from the application/site, that _all_ the current data stored in the Apollo Client Cache is wiped, as it may contain sensitive information that could be returned to the next user after login.

In order to do this, please ensure that you follow the guide [available here](https://www.apollographql.com/docs/react/advanced/caching.html#reset-store).

Take particular notice of the difference between the two methods available:

>If you want to clear the store but don’t want to refetch active queries, use `client.clearStore()` instead of `client.resetStore()`.

In this example we use `client.clearStore()`, as we don't need it (on this occassion) to refetch the existing queries.