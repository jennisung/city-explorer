import React from 'react';
import Alert from 'react-bootstrap/Alert';


class Error extends React.Component {
  render() {
    return (
      <>
        <Alert variant="warning">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{this.props.errorMessage}</p>
        </Alert>
      </>
    );
  }
}

export default Error;

