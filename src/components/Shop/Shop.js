import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const firstTen = fakeData.slice(0,10);
    const[products,setProduct] = useState(firstTen);
    const [cart, setCart] = useState([]);

    const handleAppProduct = (product) => {
        console.log('product added',product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className = "shop-container">
            <div className="product-container">
               
                {
                 products.map(pd => <Product handleAppProduct ={handleAppProduct} product={pd}></Product>)
                }
                
            </div>
            <div className="card-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;