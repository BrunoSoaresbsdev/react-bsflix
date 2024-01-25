import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './Home.css';

// API's URL: movie/now_playing?api_key=43368dd925983cce245dd82395bd4330

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    async function loadMovies() {
        const response = await api.get('movie/now_playing', {
            params: {
                api_key: '43368dd925983cce245dd82395bd4330',
                page: 1,
            },
        });
        setMovies(response.data.results.slice(0, 10));
        setLoading(false);
    }

    useEffect(() => {
        loadMovies();
    });

    if (loading) {
        return (
            <div className='loading'>
                <h2>Loading movies ...</h2>
            </div>
        );
    }

    return (
        <div className='container'>
            <div className='movies-list'>
                {movies.map((movie) => {
                    return (
                        <article key={movie.id}>
                            <b>{movie.title}</b>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            <Link to={`/movie/${movie.id}`}>Access</Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
};
