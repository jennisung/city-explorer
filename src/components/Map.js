import React from 'react';

class Map extends React.Component {
  render() {
    let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API}&center=${this.props.locationData.lat},${this.props.locationData.lon}&zoom=12`;

    return (
      <div>
        <h2 className="map-heading">{this.props.locationData.display_name}</h2>
        <p>Latitude: {this.props.locationData.lat}</p>
        <p>Longitude: {this.props.locationData.lon}</p>
        <img src={mapUrl} alt="" className="img-map" />
      </div>
    );
  }
}

export default Map;
