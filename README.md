# react.js hello world
---
first, you should install node and npm.

1. create directory  
    `mkdir helloworld && cd helloworld`

2. init npm  
    `npm init`

3. install webpack and webpack-dev-server  
    `npm install webpack webpack-dev-server --save`

4. install react and react-dom  
    `npm install react react-dom --save`

5. install babel etc.  
    `npm install babel-core babel-loader babel-preset-react babel-preset-es2015 --save`

6. add start scripts to package.json
```javascript
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "webpack-dev-server --hot"
    }
```

7. touch webpack.config.js
```javascript
    var config = {
      entry: './main.js',

      output: {
        path: './',
        filename: 'index.js'
      },

      devServer: {
        inline: true,
        port: 2028
      },

      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
      }
    }

    module.exports = config;
```

8. touch index.html
```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>react helloworld</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="bundle.js" charset="utf-8"></script>
      </body>
    </html>
```

9. touch Component.jsx
```javascipt
      import React, {Component} from 'react';
      import {render} from 'react-dom';
      import Header from './header';
      import Form from './form';

       class Index extends Component {
        render() {
          return (
            <div>
              <Header/>
              <Form/>
            </div>
          );
        }
      }
      export default Index
```

10. touch index.js
```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';

    import Component from './Component.jsx';

    ReactDOM.render(<Component />, document.getElementById('app'));
```

11. start server  
    `npm start`

12. open browser: [http://localhost:2028](http://localhost:2028)

---
if you clone this repository to local, just `npm install` and `npm start`.
