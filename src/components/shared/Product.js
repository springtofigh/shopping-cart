import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//Functions
import { shorten , isInCart , quantityCount} from '../../helper/functions';

// Icons
import trashIcone from "../../assets/trash.svg";

//Styles
import styles from './Product.module.css'

// ACTIONS
import {addItem , removeItem ,increas , decreas } from "../../redux/cart/cartAction";

const Product = ({productData}) => {

    const state = useSelector(state => state.cartStat);
    const dispatch = useDispatch();


    return (
        <div className={styles.container}>
            <img className={styles.cardImage}  src={productData.image} alt='product' style={{width:"200px"}}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Detailes</Link>
                    <div className={styles.buttonContainer}>
                {quantityCount (state , productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch(removeItem(productData))}><img src={trashIcone} alt='trashIcone' style={{width: "20px"}} /></button>}
                {quantityCount (state , productData.id) > 1 && <button className={styles.smallButton}  onClick={() => dispatch(decreas(productData))}>-</button>}
                {quantityCount (state , productData.id) > 0 && <span className={styles.counter}>{ quantityCount (state , productData.id) }</span>}
                {
                isInCart (state , productData.id) ?
                <button className={styles.smallButton}  onClick={() => dispatch(increas(productData))}>+</button>:
                <button onClick={() => dispatch(addItem(productData))}>Add to cart</button>
                }
                    </div>
            </div>
        </div>
    );
};

export default Product;