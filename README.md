# Pharmacy project

React application with Ruby on Rails [backend](https://github.com/roonyx/pharmacy-backend/)

## Contains

- [Typescript](https://www.typescriptlang.org/) 2.7
- [React](https://facebook.github.io/react/) 16
- [Mobx](https://github.com/mobxjs/mobx)
- [Mobx React](https://github.com/mobxjs/mobx-react)
- [Mobx React Devtools](https://github.com/mobxjs/mobx-react-devtools)
- [Ant Design](https://ant.design/)

### Build tools

- [Webpack](https://webpack.github.io) 4
  - [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
  - [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
- [Typescript Loader](https://github.com/TypeStrong/ts-loader)
- [PostCSS Loader](https://github.com/postcss/postcss-loader)
  - [CSS next](https://github.com/MoOx/postcss-cssnext)
  - [CSS modules](https://github.com/css-modules/css-modules)
- [React Hot Loader](https://github.com/gaearon/react-hot-loader)
- [ExtractText Plugin](https://github.com/webpack/extract-text-webpack-plugin)
- [HTML Webpack Plugin](https://github.com/ampedandwired/html-webpack-plugin)


## Setup

```
$ git clone git@github.com:roonyx/pharmacy-frontend.git
$ cd pharmacy-frontend
$ npm install
```

## Running

```
$ npm start
```

## Build

```
$ npm run build
```

## Code Format

```
$ npm run prettier
```

## Deploy

```
$ git remote add heroku https://git.heroku.com/demo-pharmacy.git
$ git push heroku master 
```
