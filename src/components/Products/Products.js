import React, { useState, useEffect } from 'react';
import DisplayProduct from './DisplayProduct';
import Cart from './Cart';



const cartBg ={
    backgroundColor: 'rgb(255, 153, 0)'
}

const Products = () => {
    const [products, getProducts ] = useState([])
    const [cart, setCart] = useState([])
    useEffect( ()=> {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then (res => res.json())
        .then(data => {
            // Add => Custom <= shipping value of 5 to each product
            const productsWithShipping = data.map(product => ({
                ...product,
                shipping: 5
            }));
            getProducts(productsWithShipping);
          });


    },[])

    const deliverCartFunc = (id) => {
            const newCart = [...cart, id]

            setCart(newCart)
        }
    
    return (
        <div className='w-full sm:relative gap-4 sm:flex justify-around sm:px-24 mx-auto'> 
            <div className='grid grid-cols-2 p-2 sm:grid-cols-4 sm:w-9/12 gap-3'>
            {
                products.map ( product => <DisplayProduct
                    key={product.id}
                    product_id = {product.id}
                    image={product.img} 
                    name={product.name.split(" ").slice(1, 5).join(" ") }
                    price={product.price}
                    manufacture={product.seller}
                    ratings={product.ratings}
                    addCart = {deliverCartFunc}
                    shipping={product.shipping}
                    
                    category={product.category}
                    stock={product.stock}
                    ratingsCount={product.ratingsCount}
                
                ></DisplayProduct>)
            }   
            </div>

            {/* CART SECTION */}
            <div className=' w-4/12 mt-2 '> 
                <div style={cartBg} className='sticky top-0 bg-green-900 rounded-md p-2'>
                    <Cart
                        cart = { cart }
                    ></Cart>
                </div>
            </div>        
        </div>
    );
};

export default Products;