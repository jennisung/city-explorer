import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
import Error from './Error';
import Map from './Map';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      locationData: {},
      error: false,
      errorMessage: '',
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
      } 
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      });
    }
  }

  render() {
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
          this.state.locationData && <Map locationData={this.state.locationData} />
        )}
      </div>
    );
  }
}

export default App;

