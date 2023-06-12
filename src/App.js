import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      locationData: [],
      error: ''
    }
  }
  handleCityInput = (event) => {
    this.setState ({
      city: event.target.value
    })
  }
}


export default App;