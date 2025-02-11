import Category from './components/Category';
import Header from './components/Header';
import TopRestaurant from './components/TopRestaurant';

const App = () => {
    return (
        <>
            <h1 className="">
                <Header />
                <Category />
                <TopRestaurant />
            </h1>
        </>
    );
};

export default App;
