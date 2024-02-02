import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <header>
            <Link className='logo' to='/'>
                BSFlix
            </Link>
            <Link className='favorites-button' to='/favorites'>My movies</Link>
        </header>
    );
};
