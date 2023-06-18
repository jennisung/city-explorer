import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import '../styles/Movies.css';


class Movies extends React.Component {
  render() {
    let moviesData = this.props.moviesData.slice(0, 5);

    return (
      <div className="text-center">
        <Carousel>
          {moviesData.map((movie, index) => (
          <Carousel.Item key={index}>
            <Card className="movie-card">
              <Card.Img src={movie.imageUrl} alt={movie.title} />
              <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>

                <p>Synopsis: {movie.overview}</p>
                <p>Average Votes: {movie.average_votes}</p>
                <p>Total Votes: {movie.total_votes}</p>
                <p>Popularity: {movie.popularity}</p>
                <p>Released: {movie.released}</p>

              </Card.Text>
              </Card.Body>
              </Card>
          </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Movies;



// import React from 'react';

// class Movies extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Movies</h2>
//         {this.props.moviesData.map((movie, index) => (
//           <div key={index}>
//             <h3>{movie.title}</h3>
//             <p>{movie.overview}</p>
//             <p>Average Votes: {movie.average_votes}</p>
//             <p>Total Votes: {movie.total_votes}</p>
//             <img src={movie.imageUrl} alt={movie.title} />
//             <p>Popularity: {movie.popularity}</p>
//             <p>Released: {movie.released}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default Movies;
