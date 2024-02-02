/* eslint-disable react/jsx-no-target-blank */
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './Movie.css';
import { toast } from 'react-toastify';

export const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadMovie() {
            await api
                .get(`/movie/${id}`, {
                    params: {
                        api_key: '43368dd925983cce245dd82395bd4330',
                    },
                })
                .then((response) => {
                    setMovie(response.data);                    
                    setLoading(false);
                })
                .catch(() => {
                    navigate('/', { replace: true });
                });
        }

        loadMovie();
    }, [id, navigate]);

    function saveMovie() {
        const favoriteMoviesList = localStorage.getItem('@favorites');
        const favoriteMovies = JSON.parse(favoriteMoviesList) || [];
        const repeatedMovie = favoriteMovies.some((favoriteMovie) => favoriteMovie.id === movie.id);

        if (repeatedMovie) {
            toast.warn('This movie is already in the favorites list!');
            return;
        }

        favoriteMovies.push(movie);
        localStorage.setItem('@favorites', JSON.stringify(favoriteMovies));
        toast.success('Favorite movie saved sucessfully!');
    }

    if (loading) {
        return (
            <div className='movie-info'>
                <h1>Loading details ...</h1>
            </div>
        );
    }

    return (
        <div className='movie-info'>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
            <h3>Synopsis</h3>
            <span>{movie.overview}</span>
            <b>Rate: {movie.vote_average.toFixed(1)} / 10</b>

            <div className='buttons'>
                <button onClick={saveMovie}>Save</button>
                <button>
                    <a target='blank' rel='external' href={`https://youtube.com/results?search_query=${movie.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    );
};
