import React, {useContext} from 'react';

//Context
import { CardContext } from '../../context/CardContextProvider';

// Functions
import { shorten } from '../../helper/functions';

// Icons
import trashIcon from '../../assets/trash.svg';

//styles
import styles from './Cart.module.css';

const Cart = (props) => {

    const {image , title , price , quantity} = props.data;
    const {dispatch} = useContext(CardContext);

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
                    <button onClick={() => dispatch({type:"DECREASE" , payload: props.data})} >-</button> :
                    <button onClick={() => dispatch({type:"REMOVE_ITEM" , payload: props.data})} ><img src={trashIcon} style={{width: "20px"}} alt='trashIcon'/></button> 
                }
                    <button onClick={() => dispatch({type:"INCREASE" , payload: props.data})} >+</button>
                
            </div>
        </div>
    );
};

export default Cart;