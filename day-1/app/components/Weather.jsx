var React = require('react');

var Greeter = require('Greeter');

var Weather = React.createClass({
  render: function () {
    return (
    <div>
      <h3>Weather Component</h3>
      <Greeter />
      </div>
    )
  }
});

module.exports = Weather;
