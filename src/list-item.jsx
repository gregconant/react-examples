var React = require('react');

module.exports = React.createClass({
  handleClick: function() {
    console.log(this.props);
    this.props.whenItemClicked(this.props.item);
  },
  render: function() {
    return <li className={this.props.className}>
             <a onClick={this.handleClick}>{this.props.item}</a>
           </li>
  }
});
