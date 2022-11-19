import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

//Context
import { CardContext } from '../../context/CardContextProvider';

// Icons
import shopIcon from '../../assets/shop.svg';

//Styles
import styles from './Navbar.module.css'

const Navbar = () => {

    const {state} = useContext(CardContext)
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link to='/products' className={styles.productLink}>Products</Link>
                <div className={styles.iconContainer}>
                    <Link to='/Cart'><img src={shopIcon} alt="shop"/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;