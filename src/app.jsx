var React = require('React'),
    Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert', // displayed on button to open/close dropdown
  items: [
    'Apple Pie',
    'Chocolate Eclair',
    'Mochi (Green Tea)',
    'Mochi (Chocolate)',
    'Flan'
  ]
};

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));
