import { useEffect, useState } from 'react';
import './Favorites.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Favorites = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const favoriteMovies = localStorage.getItem('@favorites');
        setMovies(JSON.parse(favoriteMovies) || []);
    }, []);

    function deleteMovie(id) {
        let otherMovies = movies.filter(movie => {
            return (movie.id !== id);
        });
        setMovies(otherMovies);
        localStorage.setItem("@favorites", JSON.stringify(otherMovies));
        toast.success("Movie deleted from favorites list sucessfully!");
    }

    return (
        <div className='favorites'>
            <h1>Favorites movies</h1>
            {movies.length === 0 && <span>Favorite movies list is empty!</span>}
            <ul>
                {movies.map((favoriteMovie) => {
                    return (
                        <li key={favoriteMovie.id}>
                            <span>{favoriteMovie.title}</span>
                            <div>
                                <Link to={`/movie/${favoriteMovie.id}`}>Movie details</Link>
                                <button onClick={() => deleteMovie(favoriteMovie.id)}>Remove favorite</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
