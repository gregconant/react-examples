var React = require('react'),
    Badge = require('./badge'); // have to specify current directory

module.exports = React.createClass({
  render: function() {
    return <div className="col-sm-6 col-md-4">
      <div className="thumbnail">
        <img src={this.props.imageUrl} alt="..." height="150" width="150"></img>
        <div className="caption">
          <h3>{this.props.header}</h3>
          <p>{this.props.description}</p>
          <p>
            <Badge title={this.props.title} number={this.props.number} />
          </p>
        </div>
      </div>
    </div>
  }
});
