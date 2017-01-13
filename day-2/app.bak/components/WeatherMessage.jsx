var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {temp, location,humidity} = this.props;

    return (
    <div>
      <h3>It's it {temp} in {location}.</h3>
        <h3>Humidity is{humidity} .</h3>
        </div>
    )
  }
});

module.exports = WeatherMessage;
