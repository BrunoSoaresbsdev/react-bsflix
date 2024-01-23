import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Movie } from './pages/Movie/Movie';
import { Error } from './pages/Error/Error';
import { Header } from './components/Header/Header';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movie/:id' element={<Movie />} />

                <Route path='/*' element={<Error/>} />
            </Routes>
        </BrowserRouter>
    );
}
