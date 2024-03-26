import React from 'react';

const Cart = ( props ) => {
    const { cart } = props;

    let cartTotal = 0;
    let shipping = 0;
        for (const calculate of cart) {
                cartTotal = cartTotal + calculate.price
                // shipping = shipping + calculate.shipping   //add Condition about shipping  
        }

        if(cartTotal >= 1000){
            shipping = 3;
        } else if (cartTotal >= 600) {
            shipping = 15;
        } else if (cartTotal >= 200) {
            shipping  = 21
        } else if (cartTotal > 1) {
            shipping = 30
        }

        
    const tax = parseFloat((cartTotal * 0.1).toFixed(2));
    const grnadTotal = parseFloat((cartTotal + shipping + tax).toFixed(2));

    return (
        <div>
            <h2 className=' text-3xl text-[#1C2B35] '>Order Summary</h2>
                <div>
                    <h4>Selected Items : $ {cart.length} </h4>
                    <h3>Total Price"  $ {cartTotal} </h3>
                    <h3>Total Shipping Charge : $ {shipping}</h3>
                    <h3>Tax / Vat : $ {tax}</h3>
                    <h3 className=' text-xl font-semibold'>Grand Total : $ {grnadTotal} </h3>
                </div>
        </div>
    );
};

export default Cart;