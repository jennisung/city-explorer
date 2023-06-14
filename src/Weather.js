import React from 'react';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>City Weather</h2>
        <div className="row">
          {this.props.forecastData.map((day, index) => (
            <div key={index} className="">
              <Card>
                <Card.Body>
                  <Card.Title>Date: {day.date}</Card.Title>
                  <Card.Text>Description: {day.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Weather;
