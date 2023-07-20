import './App.css';
import { useState } from "react";
import Filter from './Components/Filter/Filter';
import MovieList from './Components/MovieList';
import MovieCard from './Components/MovieCard/MovieCard';



function App() {

  // creating a default movie list 
  const [movies, setMovies] = useState([

    {
      title: `MISSION IMPOSSIBLE.`,
      description: `Mission Impossible`,
      imgSrc : 'https://trailers.apple.com/trailers/paramount/mission-impossible-dead-reckoning-part-one/images/poster_2x.jpg',

      rating: 7.5
    },

    {
      title: `WILD CARD`,
      description: `Starring Jason sattham `,
      imgSrc: 'https://upload.wikimedia.org/wikipedia/en/6/6b/WildCard.2015.png',
      rating: 4.0
    }

  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRate, setFilterRate] = useState(0);


  const handleFilterTitle = (input) => {setFilterTitle(input.target.value)};

  const handleFilterRate = (input) => {setFilterRate(parseFloat(input.target.value))};



  //function to allow the user add a new movie

  const handleAddMovie = (movies, title, description, posterURL, rating) => {

    // If the movie is not already in the list, add it
    if (!(movies.title)) {

      const newMovie = {
        title: title,
        description: description,
        posterURL: posterURL,
        rating: rating
      };

      setMovies([...movies, newMovie])
      console.log(`Movie "${title}" added to the list.`);
    } else {
      console.log(`Movie "${title}" already exists in the list.`);
    }
    handleAddMovie(movies, "Movie 3", "Description 3", "poster3.jpg", 4.2);
  }



  return (
    <div className="App">
      <h1> HOME OF THE BEST MOVIES </h1> 

      <div className="Appp">      
      <button className="addButton"  onClick={handleAddMovie} >Add New Movie</button>
      </div>

      <Filter 
        filterByRate={handleFilterRate}
        filterByTitle={handleFilterTitle}
      />

        <div className="movies">
        <MovieList movies={movies} filterTitle={filterTitle} filterRate={filterRate} MovieCard={MovieCard} />
        </div>
      
    </div>

  );
}

export default App;