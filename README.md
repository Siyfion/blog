# Kanso Web Starter Kit

## 🚀 Quick start

1. **Clone this repo**

    Download this code and rename the directory to the project's title.

2.  **Start developing**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd starter-kit-path/
    yarn develop
    ```

2.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!
    
    *Note: You'll also see a second link: `http://localhost:8000___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://next.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*
    
    Open the the `starter-kit-path` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── static
    ├── .eslintrc.json
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── package.json
    ├── README.md
    └── yarn.lock

  1.  **`/node_modules`**: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.  
  
  2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser), like your site header, or a page template. “Src” is a convention for “source code”.

  3.  **`/static`**: If you put a file into the static folder, it will not be processed by Webpack. Instead it will be copied into the public folder untouched. Check out the [assets docs](https://www.gatsbyjs.org/docs/adding-images-fonts-files/#when-to-use-the-static-folder) for more detail.

  4.  **`.eslintrc.json`**: This file tells the linter ([ESLint](https://eslint.org)) which plugins and configuration settings we want to lint our code with.
  
  5.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.
  
  6.  **`.prettierrc`**: This is a configuration file for a tool called [Prettier](https://prettier.io/), which is a tool to help keep the formatting of your code consistent.
  
  7.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://next.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.
  
  8.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://next.gatsbyjs.org/docs/gatsby-config/) for more detail).
  
  9.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby node APIs](https://next.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
  
  10.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://next.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.
   
  11.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
  
  12.  **`README.md`**: This text file containing useful reference information about your project.
  
  13.  **`yarn.lock`**: [Yarn](https://yarnpkg.com/) is a package manager alternative to npm. You can use either yarn or npm, though all of our docs reference yarn.

## :mag: SEO Configuration
By default, The starter inclues the default Gatsby metadata and as well as a React-Helmet component that includes some common SEO metatdata. Please be sure to replace the placeholders.

### Site Metadata
In the `gatsby-config.js` file there is `siteMetadata` key that contains the placeholder metatdata for the site. This information will be included on every page by the `SEOWrapper` (Which can be found in `src/components/SEOWrapper.js`)

The `SEOWrapper` pulls the site metatdata through and adds it to the head with React Helmet. Any additional metadata keys will need to be added to the `SEOWrapper` helmet like so:

```javascript
  const getWrapper = data => (
    <div>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta
          name="keywords"
          content={data.site.siteMetadata.keypwords.join(', ')}
        />
        {/* Your Awesome Metatdata tag here */}
      </Helmet>
      {children}
    </div>
  )
```

## :sparkles: Styling

By default the starter kit includes the [Normalize.css](https://necolas.github.io/normalize.css/) package. This is then imported in the `gatsby-browser.js` to ensure the css is included globally.

## :art: Themeing
The starter kit uses [Emotion](https://emotion.sh/docs/theming) as its CSS processor. Each page is wrapped in a `ThemeProvider` in order to pass color pallete and other default information to all components.

Theme information is located in `src/styles/theme.js`. Any variables can be passed down to style components.

Theme varables can be accessed by the components `theme` prop.

```javascript
import styled from 'react-emotion'

export const mySuperCoolButton = styled.button`
  color: ${props => props.theme.primaryButton}
`
```


## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kansohq/web_starter_kit)

## :microscope: Testing
This project uses [Jest](https://jestjs.io/en/) and [React-test-renderer](https://reactjs.org/docs/test-renderer.html#testrendererupdate) to test react components. You should endevour to test wherever there is logic written by you. There is no need to test third party libraries, or Gatsby static graphQL queries.

We should strive for 100% test coverage. You can see test coverage by running `yarn test --coverage`

Test should reside in the same folder as their parent component. They should be the same name as the compoent with .test.js at the end.

```bash
MyComponent
├── MyComponent.js
└── MyComponent.test.js
```

The project has a pre-push git hook for unit tests, which means you should ensure your tests are passing before you push to the repo.
