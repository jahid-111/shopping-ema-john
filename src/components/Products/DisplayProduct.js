import {faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const textForImage = "Images Not AVailabe";

const DisplayProduct = (props) => {


    return (
        <div className='gap-7  '>
                <div className=" h-full border-2  rounded-md">
                    <img className=" h-[200px] mt-2 mx-auto bg-slate-100 rounded-md" src={props.image} alt={textForImage} />

                    <div className="px-4">
                        <h3 className=" mt-2 h-10  text-wrap font-semibold text-[#0E161A]"> Name : {props.name} </h3>
                            <h4 className=" h-6 mt-1  text-[#0E161A] text-2xl font-medium">Price : {props.price} </h4> 
                        <div className=" my-4 text-[#2A414F] font-medium  h-18" >
                            <p>Manufacture : { props.manufacture}</p>
                            <p>Ratings : {props.ratings} </p>
                        </div>
                   
                    </div>
                    <button onClick={ ()=>{props.addCart(props.product_id)}} 
                        className=" w-full flex justify-center items-center gap-3 rounded-b-md border-t-2 bg-[#FFE0B3] outline-none   py-2 hover:bg-amber-400" >
                            <p>Add Cart</p>

                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </button>
                </div>

        </div>
    );
};

export default DisplayProduct;