import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route, Outlet } from 'react-router';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';

const App = () => {
    return (
        <>
            <Header />
            <Outlet />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    );
};

export default App;
