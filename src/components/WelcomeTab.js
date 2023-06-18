import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/WelcomeTab.css';


const WelcomeTab = () => {
  return (
    <Card className="card-welcome" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="card-title-welcome">Welcome to City Explorer</Card.Title>
        <Card.Subtitle className="card-subtitle-welcome">Plan your next adventure with us</Card.Subtitle>
        <Card.Text>
        After entering a city, navigate through our tabs to check the geographical location of that city, review the 7-day forecast, and browse movies associated with keywords related to that city!        </Card.Text>
        <Card.Text>
          Lets Connect! Click Below to connect with me on my LinkedIn
        </Card.Text>
        <Card.Link href="https://www.linkedin.com/in/jennisung/">LinkedIn</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default WelcomeTab;
