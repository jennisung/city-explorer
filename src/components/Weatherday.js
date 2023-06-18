import React from 'react';

class WeatherDay extends React.Component {
  render() {
    let sevenDayForecast = this.props.forecastData.slice(0, 7);
    return (
      <>
        {sevenDayForecast.map((day, index) => (
          <tr key={index}>
            <td>{day.date}</td>
            <td>{day.description}</td>
          </tr>
        ))}
      </>
    );
  }
}

export default WeatherDay;
