import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { FaStar } from "react-icons/fa";
import cartphoto from '../components/images/cartphoto.jpg'

//notification successfull
import { ToastContainer, toast } from 'react-toastify'

//payment checkout
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";



const Cart = () => {
    const productData = useSelector((state)=> state.bazar.productData);

    //Login page userinfo
    const userInfo = useSelector((state)=> state.bazar.userInfo)

    //cart total amount for checkout
    const [totalAmt, setTotalAmt] = useState('');

    const [payNow, setPayNow] = useState(false)

//======= Total amount ===========================>
    useEffect(()=>{
        let price = 0;
        productData.map((item)=> {
            price += item.price * item.quantity
            return price
        })
        setTotalAmt(price.toFixed(2));
    },[productData])
//======= Total amount finished =================>
//============ checkout function ================>
    const handleCheckout = ()=> {
        if(userInfo) {
            setPayNow(true);
        }else {
            toast.error('Please, sign in to checkout!')
        }
    };

    const payment = async (token) => {
        await axios.post("http://localhost:8000/pay", {
          amount: totalAmt * 100,
          token: token,
        });
    };
 //========== checkout function finished ============>   
console.log(productData);
    return (
        <>
            <div>
                <img className='w-full h-60 object-cover' src={cartphoto} alt="cartImg" />
                <div className='max-w-screen-xl mx-auto py-20 flex'>
                    <CartItem/>
                    <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
                        <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
                            <h2 className='text-2xl font-medium text-[#001E3D] w-full py-2 text-center bg-gray-100'>Cart Totals</h2>
                            <p className='flex items-center gap-4 text-base'>
                                Submital{': '}
                                <span className='font-semibold text-lg text-[#FE3E00]'>$ {totalAmt}</span>
                            </p>
                            <p className='flex items-start gap-3 text-base'>
                                Quality{': '}
                                <div className='flex relative gap-[2px] text-[#F6D301] cursor-pointer'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </p>
                        </div>

                        <p className='font-semibold flex justify-between mt-6 text-[#001E3D]'>
                            Total{': '}
                            <span className='tetx-xl  font-bold'>${totalAmt}</span>
                        </p>
                        <button onClick={handleCheckout} className='bg-[#001E3D] tetx-white text-white w-full py-3 mt-6 hover:bg-gray-800 duration-500 active:bg-gray-900'>checkout payment</button>

                        {
                            payNow && <div className='w-full mt-6 flex items-center justify-center'>
                                <StripeCheckout
                                    stripeKey='pk_live_51OjPb3Hidjf5z9ZNzD5lP4b5yfKh9p2ZDxbleH4cLwt0zyTiXMMM2Y6ilucpVcRL39NPUx0NMRmAlBlOseW2bx3m005QUu6rqO'
                                    name='Bazar Online Shopping'
                                    amount={totalAmt * 100}
                                    label='Pay to bazar'
                                    description={`Your payment amount is $${totalAmt}`}
                                    token={payment}
                                    email={userInfo.email}
                                />
                            </div>
                        }
                    </div>
                </div>
                <ToastContainer
                                position= 'top-left'
                                autoClose= {2000}
                                hideProgressBar= {false}
                                newestOnTop= {false}
                                closeOnClick
                                rtl= {false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme= 'dark'
                
                            />
            </div>
        </>
    );
}

export default Cart;
