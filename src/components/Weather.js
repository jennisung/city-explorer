import Table from 'react-bootstrap/Table';
import React from 'react';
import '../styles/Weather.css';
import WeatherDay from './Weatherday';

class Weather extends React.Component {
  render() {
    return (
      <div className="div-weather">
        <Table className='weather-table' striped bordered hover>
          <thead>
          <tr>
              <td colSpan={2}>
                <h2 className='city-weather-heading'>7-day forecast</h2>
              </td>
            </tr>
            <tr>
              <th>Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
           
            <WeatherDay forecastData={this.props.forecastData} />
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Weather;
