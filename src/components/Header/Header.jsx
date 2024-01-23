import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <header>
            <Link className='logo' to='/'>
                BSFlix
            </Link>
            <Link className='favorites' to='/favorites'>My movies</Link>
        </header>
    );
};
