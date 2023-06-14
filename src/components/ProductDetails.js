import React from 'react';
import { Link , useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';

//Context


// styles
import styles from '../components/ProductDetails.module.css';

const ProductDetails = (props) => {
    const params = useParams();
    const id = params.id;
    const data = useSelector(state => state.productsState.products);
    const product = data[id - 1];
    const { description , title , category , price , image } = product || {};

    return (
        <div className={styles.container}>
            <img className={styles.image}  src={image}  alt='product' />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>category:</span>{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to="/products">Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;