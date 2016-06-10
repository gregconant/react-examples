// dropdown is a button and a list
// should know when to show the list
// based on when user clicks on button
var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function() {
    alert('hello from dropdown');
    },
  getInitialState: function() {
    return { open: false }
  },
  render: function() {
    var list = this.props.items.map(function(item) {
      return <ListItem item={item} />
    });
    return <div className="dropdown">
      <Button
        whenClicked={this.handleClick}
        className="btn-default"
        title = { this.props.title }
        subTitleClassName="caret"
      />
    <ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>
        {list}
      </ul>
    </div>
  }
});
