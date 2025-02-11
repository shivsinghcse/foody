import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route, Outlet } from 'react-router';
import RestaurantMenu from './components/RestaurantMenu';

const App = () => {
    return (
        <>
            <Header />
            <Outlet />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
            </Routes>
        </>
    );
};

export default App;
