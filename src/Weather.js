import React from 'react';

class Weather extends React.Component {
  render() {
    return (
      <div>
        <h2>City Weather</h2>
        {this.props.forecastData.map((day, index) => (
          <div key={index} className="weather-div">
            <div className="weather-card">
              <p>Date: {day.date}</p>
              <p>Description: {day.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Weather;
