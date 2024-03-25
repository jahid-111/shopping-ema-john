import React, { useState, useEffect } from 'react';
import DisplayProduct from './DisplayProduct';


const Products = () => {
    const [products, getProducts ] = useState([])
    const [cart, setCart] = useState([])
    useEffect( ()=> {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then (res => res.json())
        .then (data => getProducts(data))
    },[])

    const sendIdfunc = (id) => {
            const newCart = [...cart, id]
            console.log(newCart)
            setCart(newCart)
        }
    
    return (
        <div className='w-full gap-4 sm:flex justify-around sm:px-24 mx-auto'> 
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
                    addCart = {sendIdfunc}

                    category={product.category}
                    stock={product.stock}
                    ratingsCount={product.ratingsCount}
                
                ></DisplayProduct>)
            }   
            </div>

            {/* CART SECTION */}
            <div className=' w-4/12 bg-green-500'> 
               <h2 className='  text-3xl text-[#1C2B35] '>Order Summary</h2>
               <h4>Selected Items : {cart.length}</h4>
            </div>        
        </div>
    );
};

export default Products;