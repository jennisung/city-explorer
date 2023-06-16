import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
import Error from './components/Error';
import Map from './components/Map';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css';
import Weather from './components/Weather'
import Movies from './components/Movies';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      locationData: {},
      error: false, 
      forecastData: [],
      moviesData: [],
    };
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    });
  }

  handleGetCityInfo = async (event) => {
    event.preventDefault();

    try {
      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API}&q=${this.state.city}&format=json`;
      let response = await axios.get(url);
      let dataFromAxios = response.data;

      if (dataFromAxios.length > 0) {
        this.setState({
          locationData: dataFromAxios[0],
          error: false,
          errorMessage: ''
        });
        this.getWeatherForecast(dataFromAxios[0].lat, dataFromAxios[0].lon);
        this.getMovieData();
      } 
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      });
    }
  }


  getWeatherForecast = async (lat, lon) => {
    try {
      let weatherURL = `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}&searchQuery=${this.state.city}`;
      let weatherDataAxios = await axios.get(weatherURL);
      let forecastData = weatherDataAxios.data;
      console.log('forecast data', forecastData);
      this.setState({
        error: false,
        forecastData: forecastData,
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,
      });
    }
  }


  getMovieData = async () => {
    try {
      let moviesURL = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.city}`;
      let movieDataAxios = await axios.get(moviesURL);
      let moviesData = movieDataAxios.data;
      console.log(moviesData);
      this.setState({
        error: false,
        moviesData,
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,
      });
    }
  }

 

  render() {
    console.log(this.state.forecastData);
    return (
      <div className="div-app">
        <h1 className="heading-app">City Explorer</h1>
        <Form onSubmit={this.handleGetCityInfo}>
          <Form.Control type="text" placeholder="Enter city name" onChange={this.handleCityInput} />
          <Button variant="primary" type="submit">Explore!</Button>
        </Form>
        {this.state.error ? (
          <Error errorMessage={this.state.errorMessage} />
        ) : (
          <>
            {this.state.locationData && <Map locationData={this.state.locationData} />}
            {this.state.forecastData.length > 0 && <Weather forecastData={this.state.forecastData} />}
            {this.state.forecastData.length > 0 && <Movies moviesData={this.state.moviesData} />}
          </>
        )}
      </div>
    );
  }
}

export default App;

