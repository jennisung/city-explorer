import React from 'react';
import axios from 'axios';
import Location from './Location';
import Error from './Error.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      locationData: [],
      error: false,
      errorMessage: ''
    };
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    });
  };

  handleGetCityInfo = async (event) => {
    event.preventDefault();

    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API}&q=${this.state.city}&format=json`;

      let dataFromAxios = await axios.get(url);

      this.setState({
        locationData: dataFromAxios.data[0],
        error: false,
        errorMessage: ''
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.response.data.error
      });
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleGetCityInfo}>
          <label htmlFor=""> Search City By Name:
            <input type="text" onInput={this.handleCityInput} />
          </label>
          <button type="submit">Explore!</button>
        </form>

        {this.state.error ? (
          <Error errorMessage={this.state.errorMessage} />
        ) : (
          <p>{this.state.locationData.display_name}</p>
        )}
      </>
    );
  }
}

export default App;
