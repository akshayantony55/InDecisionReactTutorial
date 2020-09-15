'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);
var user = {
  name: "Akshay"
};
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: --112'
  ),
  React.createElement(
    'p',
    null,
    'Location: Kerala'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
