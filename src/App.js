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
      error: false, //keep it false so that catch will handle errors, then switch boolean to true
      errorMessage: '',
    };
  }

  //Triggered when the user inputs a city name.Updates the city value in the component's state based on input.
  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    });
  }

  // *** DEMO NOTES async & await: handle our asychronous code
  // *** DEMO NOTES try/catch to handle our errors: TRY to resolve the promise, and if not successful it will CATCH our errors

  //HandleGetCityInfo method (async event handler using axios), triggered when the user submits the form. Prevents the default form submission. 
  handleGetCityInfo = async (event) => {
    event.preventDefault();

    try {
      // TODO ONE use axios to pass in the url to hit a location. Use city in STATE
      //GET request of the URL using axios.get.
      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API}&q=${this.state.city}&format=json`;
      let response = await axios.get(url);
      let dataFromAxios = response.data;

      if (dataFromAxios.length > 0) {
        // TODO TWO: store that return from axios into state
        // After getting a response from the API, method checks if the response data (dataFromAxios) has any results >>> if yes, it updates the component's state with the first result/index (dataFromAxios[0]),  sets error to false.
        this.setState({
          locationData: dataFromAxios[0],
          error: false,
          errorMessage: ''
        });
      } 
    } catch (error) {
      // TODO THREE: If there is an ERROR then >>>> Set state with the error boolean and the error message
      this.setState({
        error: true,
        errorMessage: error.message
      });
    }
  }


  // TODO: render method Form with an input field for the city and a submit button.
  // If this.state.error === true, the <Error> component rendered with the errorMessage prop set to this.state.errorMessage, showing an error. If this.state.error is false, the code checks if this.state.locationData is truthy. If it is, the <Map> component is rendered displaying the location data on a map.
  render() {
    return (
      <div className="div-app">
        <h1 className="heading-app">City Explorer</h1>
        {/* FORM and BUTTON COMPONENT: specify event handler */}
        <Form onSubmit={this.handleGetCityInfo}>
          <Form.Control type="text" placeholder="Enter city name" onChange={this.handleCityInput} />
          {/* Button triggers form submission */}
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

