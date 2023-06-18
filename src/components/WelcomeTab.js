import React from 'react';
import Card from 'react-bootstrap/Card';

const WelcomeTab = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Welcome to City Explorer</Card.Title>
        <Card.Subtitle className="card-subtitle-welcome" > Plan your next adventure with us</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Card.Text>
          Click on the links below to find 
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default WelcomeTab;
