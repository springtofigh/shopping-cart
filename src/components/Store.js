import React,{ useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';

//Components
import Product from './shared/Product';

// Redux
import { fetchProducts } from './../redux/products/productsAction';

//Styles
import styles from '../components/Store.module.css';

const Store = () => {

    const dispatch = useDispatch();
    const productsState = useSelector(state => state.productsState)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className={styles.container}>
            {
                productsState.loading ?
                <h2>Loading....</h2> :
                productsState.error ?
                <p>Something is Wrong</p> :
                productsState.products.map(product => <Product
                key={product.id}
                productData={product}
                />)
            }
            
        </div>
    );
};

export default Store;