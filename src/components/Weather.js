import React from 'react';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {
  render() {
    let forecastData = this.props.forecastData.slice(0, 5);
    let randomIndex = Math.floor(Math.random() * forecastData.length);
    let randomDay = forecastData[randomIndex];

    let WeatherDay = ({ date, description }) => (
    <div>
      <Card>
        <Card.Body>
          {<h2>City Weather</h2>}
          <Card.Title>Date: {date}</Card.Title>
          <Card.Text>Description: {description}</Card.Text>
        </Card.Body>
      </Card>
     </div>
    );

    return (
      <div>
          <WeatherDay
            heading={<h2>City Weather</h2>}
            key={randomIndex}
            date={randomDay.date}
            description={randomDay.description}
          />
      </div>
    );
  }
}

export default Weather;




// import React from 'react';
// import Card from 'react-bootstrap/Card';

// class Weather extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <h2>City Weather</h2>
//         <div className="row">
//           {this.props.forecastData.map((day, index) => (
//             <div key={index} className="">
//               <Card>
//                 <Card.Body>
//                   <Card.Title>Date: {day.date}</Card.Title>
//                   <Card.Text>Description: {day.description}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }




// export default Weather;
