import React from 'react';
import Card from 'react-bootstrap/Card';



class Map extends React.Component {
  render() {
    let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API}&center=${this.props.locationData.lat},${this.props.locationData.lon}&zoom=12`;

    return (
      <Card style={{ width: '45rem' }}>
        <Card.Img variant="top" src={mapUrl} alt="map-city-explorer" className="img-map" />
        <Card.Body>
          <Card.Title className="map-heading">{this.props.locationData.display_name}</Card.Title>
          <Card.Text className="map-lat-lon">
            Latitude: {this.props.locationData.lat}
            <br />
            Longitude: {this.props.locationData.lon}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Map;
