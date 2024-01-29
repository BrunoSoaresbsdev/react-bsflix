import { Link } from 'react-router-dom';
import './Error.css';

export const Error = () => {
    return (
        <div className='not-found'>
            <h1>404</h1>
            <h2>Sorry, this page doesn't exists!</h2>
            <Link to='/'>Check out all the movies!</Link>
        </div>
    );
};
