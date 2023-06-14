import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Cart from './shared/Cart';


//Styles
import styles from '../components/ShopCart.module.css';

// Actions
import { checkout ,clear } from "../redux/cart/cartAction";

const ShopCart = () => {

    const state = useSelector( state => state.cartStat);
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id}  data={item} />)}
            </div>
            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                <p><span>Total items : {state.itemsCounter}</span></p>
                <p><span>Total Payments : {state.total} $</span></p>
                <div className={styles.buttonContainer}>
                    <button onClick={() => dispatch(checkout())} className={styles.checkout} >Checkout</button>
                    <button onClick={() => dispatch(clear())} className={styles.clear} >Clear</button>
                </div>
                </div>
            }

            {
                state.checkout && 
                <div className={styles.complete}>
                    <h3>Check Out successfully!</h3>
                    <Link to='/products'>Buy More?</Link>
                </div>
            }
            
            {
                !state.checkout && state.itemsCounter === 0 &&
                <div className={styles.complete}>
                    <h3>Want to buy?</h3>
                    <Link to='/products'>Go to shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;