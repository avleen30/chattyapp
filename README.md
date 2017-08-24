React Boilerplate
=====================

A minimal and light dev environment for ReactJS.

## Screenshots
![screenshot of Login Page](https://github.com/avleen30/TinyApp/blob/master/Docs/Login.png?raw=true)
![screenshot of registration page](https://github.com/avleen30/TinyApp/blob/master/Docs/register.png?raw=true)
![screenshot for getting a short URL](https://github.com/avleen30/TinyApp/blob/master/Docs/GetaShortURL.png?raw=true)
![screenshot of short URL's](https://github.com/avleen30/TinyApp/blob/master/Docs/shortURL.png?raw=true)
![screenshot of Home Page](https://github.com/avleen30/TinyApp/blob/master/Docs/userHomePage.png?raw=true)

### Usage

Clone the boilerplate and create your own git repo.

```
git clone git@github.com:lighthouse-labs/react-simple-boilerplate.git
cd react-simple-boilerplate
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```



### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
