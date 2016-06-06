// dropdown is a button and a list
// should know when to show the list
// based on when user clicks on button
var React = require('react');
var Button = require('./button');
//var List = require('./list');

module.exports = React.createClass({

  render: function() {
    return <div class="dropdown">
      <Button title = { this.props.title } className="btn-default" subTitleClassName="caret" />
    </div>
}

});
