import Table from 'react-bootstrap/Table';
import React from 'react';

class Weather extends React.Component {
  render() {
  let sevenDayForecast = this.props.forecastData.slice(0, 7);
    return (
      <div className="div-weather">
        {/* <h2 >City Weather</h2> */}
        <Table striped bordered hover>
          <thead>
           <tr>
           <td colSpan={2}> <h2 className='city-weather-heading'>City Weather</h2> </td>     
           </tr>

            <tr>
               <th>Date</th>
               <th>Description</th>
            </tr>
          </thead>
          <tbody>

            {sevenDayForecast.map((day, index) => (
              <tr key={index}>
              <td>{day.date}</td>
              <td>{day.description}</td>
              </tr>
            ))
            }

          </tbody>
        </Table>
      </div>
    );
  }
};


export default Weather;

// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Table from 'react-bootstrap/Table';


// class Weather extends React.Component {
//   render() {
//     let forecastData = this.props.forecastData.slice(0, 5);
//     let randomIndex = Math.floor(Math.random() * forecastData.length);
//     let randomDay = forecastData[randomIndex];

//     let WeatherDay = ({ date, description }) => (
//     <div>
//       <Card>
//         <Card.Body>
//           {<h2>City Weather</h2>}
//           <Card.Title>Date: {date}</Card.Title>
//           <Card.Text>Description: {description}</Card.Text>
//         </Card.Body>
//       </Card>
//      </div>
//     );

//     return (
//       <div>
//           <WeatherDay
//             heading={<h2>City Weather</h2>}
//             key={randomIndex}
//             date={randomDay.date}
//             description={randomDay.description}
//           />
//       </div>
//     );
//   }
// }

// export default Weather;

