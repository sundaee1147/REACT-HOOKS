
import MovieCard from "./MovieCard/MovieCard";

// The component that displays all the movie cards.

const MovieList = ({movies, filterTitle, filterRate}) => {

                const filteredMovies = movies.filter(movie => {
                    
                    return(
                        
                        movie.title.toLowerCase().includes(filterTitle.toLowerCase()) && 
                        movie.rating >= filterRate)
                    }
                    );    //returns a list of filtered movies

                return(
                <div className="movieList" >
                    {filteredMovies.map(movie => (
                    <MovieCard key={movie.title} movie={movie}/> 
                    ))}

                </div>    //returns a list of all the movies in the app
                )
}

export default MovieList;