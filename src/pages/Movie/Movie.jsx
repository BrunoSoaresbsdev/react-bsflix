import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './Movie.css';

export const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    async function loadMovie(){
        await api.get(`/movie/${id}`, {
            params: {
                api_key: '43368dd925983cce245dd82395bd4330'
            }
        })
        .then((response) => {
            setMovie(response.data);
            setLoading(false);
        })
        .catch(() => console.log("Movie page not found!"))
    }

    useEffect(() => {
        loadMovie();
    }, []);

    if(loading){
        return (
            <div className='movie-info'>
                <h1>Loading details ...</h1>
            </div>
        )
    }

    return (
        <div className='movie-info'>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
            <h3>Synopsis</h3>
            <span>{movie.overview}</span>
            <b>Rate: {movie.vote_average.toFixed(1)} / 10</b>

            <div className='buttons'>
                <button>Save</button>
                <button>Trailer</button>
            </div>
        </div>
    );
};
