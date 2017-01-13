var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Nav Component</h2>
        <Link to="/">contact</Link>
        <Link to="/about">About</Link>
        <Link to="/examples">Examples</Link>
        <Link to="/career">career</Link>
        <Link to="/location">location</Link>
        <Link to="/weather">weather</Link>
      </div>
    );
  }
});

module.exports = Nav;
