// import { Link } from 'react-router';
import { LOGO_URL } from '../../../utils/constants';


const Header = () => {
    return (
        <>
            <header
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.7rem 2rem',
                }}
            >
                <div className="logo">
                    {/* <Link to="/"> */}
                    <img
                        style={{
                            width: '4rem',
                            borderRadius: '50%',
                            border: '1.5px solid #000',
                        }}
                        className="logo-img"
                        src={LOGO_URL}
                        alt="logo-image"
                    />
                    {/* </Link> */}
                </div>

                <nav>
                    <button className="sign-in-btn">Sing In</button>
                    <button className="cart-btn">Cart</button>
                </nav>
            </header>
        </>
    );
};

export default Header;
