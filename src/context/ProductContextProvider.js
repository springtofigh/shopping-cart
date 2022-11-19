import React, { useEffect , useState , createContext } from 'react';

// API
import { getProducts } from '../services/api';

export const ProductsContext = createContext();

const ProductContextProvider = ({children}) => {

    const [products , setproducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setproducts(await getProducts());
        }

        fetchAPI();
    }, []);

    return (
        <div>
            <ProductsContext.Provider  value={products}>
                {children}
            </ProductsContext.Provider>
        </div>
    );
};

export default ProductContextProvider;