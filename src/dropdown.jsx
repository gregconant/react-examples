// dropdown is a button and a list
// should know when to show the list
// based on when user clicks on button
var React = require('react');
var Button = require('./button');
//var List = require('./list');

module.exports = React.createClass({
  handleClick: function() {
    alert('hello from dropdown');
    },
  render: function() {
    return <div class="dropdown">
      <Button whenClicked={this.handleClick} title = { this.props.title } className="btn-default" subTitleClassName="caret" />
    </div>
}

});
