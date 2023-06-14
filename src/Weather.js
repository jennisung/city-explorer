import React from 'react';


class Weather extends React.Component {
  render() {
    return (
      <div>
        <h2>City Weather</h2>
        <div className="weather-div">
            <div className="weather-card">
              <p>Date: {this.props.forecast.date}</p>
              <p>Description: {this.props.forecast.description}</p>
            </div>
        </div>
      </div>
    );
  }
}

export default Weather;
