'use strict';

console.log("app.js is running.");

var app = {
  title: 'Some title',
  subtitle: 'This is my subtitle',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault(); //stops full page refresh. When you submit a form, it usually reloads or goes to a url with a query string in the url. You don't need that here.
  // console.log('Submitted.');

  // target is the element from which this event was triggered. Form here.
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  rerender();
};

var removeAll = function removeAll() {
  app.options = [];

  rerender();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var appRoot = document.getElementById('app');

var rerender = function rerender() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'p',
      null,
      'Array length: ',
      app.options.length
    ),
    app.options.map(function (option) {
      return React.createElement(
        'li',
        { key: option },
        option
      );
    }),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      'What should I do>'
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove all'
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

rerender();
