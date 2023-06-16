import React from 'react';

class Movies extends React.Component {
  render() {
    let moviesData = this.props.moviesData.slice(0, 3); 

    return (
      <div>
        <h2>Movies</h2>
        {moviesData.map((movie, index) => (
          <div key={index}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <p>Average Votes: {movie.average_votes}</p>
            <p>Total Votes: {movie.total_votes}</p>
            <img src={movie.imageUrl} alt={movie.title} />
            <p>Popularity: {movie.popularity}</p>
            <p>Released: {movie.released}</p>
          </div>
        ))}
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
