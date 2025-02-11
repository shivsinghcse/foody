import Category from './components/Category';
import Header from './components/Header';
import OnlineDelivery from './components/OnlineDelivery';
import TopRestaurant from './components/TopRestaurant';

const App = () => {
    return (
        <>
            <h1 className="">
                <Header />
                <Category />
                <TopRestaurant />
                <OnlineDelivery />
            </h1>
        </>
    );
};

export default App;
