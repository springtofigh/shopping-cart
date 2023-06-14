import React  from 'react';
import { useDispatch } from 'react-redux';

// Functions
import { shorten } from '../../helper/functions';

// Icons
import trashIcon from '../../assets/trash.svg';

//styles
import styles from './Cart.module.css';

// ACTIONS
import { removeItem ,increas , decreas } from "../../redux/cart/cartAction";

const Cart = (props) => {

    const {image , title , price , quantity} = props.data;
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <img className={styles.productImage}  src={image} alt='product' />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div className={styles.quantity}>
                <span>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch(decreas(props.data))} >-</button> :
                    <button onClick={() => dispatch(removeItem(props.data))} ><img src={trashIcon} style={{width: "20px"}} alt='trashIcon'/></button> 
                }
                    <button onClick={() => dispatch(increas(props.data))} >+</button>
                
            </div>
        </div>
    );
};

export default Cart;