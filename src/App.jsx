import { ToastContainer } from 'react-toastify';
import RoutesApp from './routes';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
    return (
        <div className='app'>
            <ToastContainer autoClose={2000} />
            <RoutesApp />
        </div>
    );
}
