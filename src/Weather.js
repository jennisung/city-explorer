import React from 'react';


class Weather extends React.Component {
  render() {
    return (
      <div>
        <h2>City Weather</h2>
        <div className="weather-div">
          {this.props.forecastData.map((forecast, index) => (
            <div key={index} className="weather-card">
              <p>Date: {forecast.date}</p>
              <p>Description: {forecast.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Weather;
