import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      locationData: [],
      error: false,  //keep it false so that catch will handle errors, then switch boolean to true
      errorMessage: ''
    }
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value

    })
  }

   // *** DEMO NOTES async & await: handle our asychronous code
  // *** DEMO NOTES try/catch to handle our errors: TRY to resolve the promise, and if not successful it will CATCH our errors


  handleGetCityInfo = async (event) => {
    event.preventDefault();

    try {

      // TODO ONE use axios to pass in the url to hit a location. Use city in STATE

      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API}&q=${this.state.city}&format=json`

      let dataFromAxios = await axios.get(url);

      // TODO TWO: store that return from axios into state

      this.setState({
        locationData: dataFromAxios.data[0],
        error: false, 
        errorMessage: ''
      })

    } catch (error) {
      // TODO THREE: If there is an ERROR then >>>> Set state with the error boolean and the error message
      this.setState({
        error: true,
        errorMessage: error.response.data.error
      })
    }

  }



  render() {
    return(
      <>
        <form onSubmit={this.handleGetCityInfo}>
        <label htmlFor=""> Search City By Name: 
          <input type="text" onInput={this.handleCityInput}/>
        </label>
        <button type="submit">Explore!</button>
      </form>

    {/* Add Ternary from Error Todo three - Acronym W-T-F */}
        {
       this.state.error ? <p>{this.state.errorMessage}</p> : <p>{this.state.locationData.display_name}</p>
        }
      </>
    )
  }
}



export default App;