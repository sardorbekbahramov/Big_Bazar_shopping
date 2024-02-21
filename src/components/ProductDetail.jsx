import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify'
import { FaStar } from "react-icons/fa6";



import { useLocation } from 'react-router-dom';
import { addToCart } from '../redux/bazarSlice';

const ProductDetail = () => {
    const dispatch = useDispatch()
    const [details, setDetails] = useState({})
    let [baseQty, setBaseQty] = useState(1)

    const location = useLocation();
    useEffect(()=>{
        setDetails(location.state.item);
    }, [location.state.item]);
    return (
        <>
        <div>
            <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
                <div className='w-2/5 relative'>
                    <img className='w-full h-full' src={details.image} alt="img" />
                    <div className='absolute top-4 right-0 border-l-[1.5px]'>
                      {
                        !details.isNew && (<p className='bg-[#001E3D] text-white px-6 py-1 flex'><FaStar className='flex relative right-1 top-[2px] text-[#F8D301]'/>5</p>)
                      }
                    </div>
                </div>

                <div className='w-3/5 flex flex-col justify-center gap-12'>
                      <div>
                        <h2 className='text-4xl font-semibold text-[#001E3D] drop-shadow-lg'>{details.title}</h2>
                      </div>

                      <div className='flex gap-2 items-center text-base'>
                        <p className='text-gray-500 text-sm'>Category: <span className='text-[#FE3E00]'>{`_${details.category}`}</span></p>
                        <p className='font-semibold'>${details.price * baseQty}</p>
                      </div>

                      <p className='text-base text-gray-500 -mt-3 max-w-[600px] capitalize'>{details.description}</p>

                      <div className='flex gap-6'>
                        <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border border-red-400 p-3'>
                            <p className="text-sm">Quantity</p>
                            <div className='flex items-center gap-4 text-sm font-semibold'>
                                <button onClick={()=> setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)} className='border border-red-400 px-2 hover:bg-[#FE3E00] duration-500 hover:text-white active:bg-red-400 active:text-white'>-</button>
                                <span>{baseQty}</span>
                                <button onClick={()=> setBaseQty(baseQty + 1)} className='border border-red-400 px-2 hover:bg-[#FE3E00] duration-500 hover:text-white active:bg-red-400 active:text-white'>+</button>
                            </div>
                        </div>
                        <div>
                            <button onClick={()=>dispatch(addToCart({
                                                                id: details.id,
                                                                title: details.title,
                                                                image: details.image,
                                                                price: details.price,
                                                                quantity: baseQty,
                                                                description: details.description,
                                                                rate: details.rating.rate
                                                            })
                                                        ) & toast.success(`${details.title} is added!`)
                                                    } className='bg-[#FE3E00] font-semibold text-white py-3 px-6 active:bg-red-400'>Add To Cart</button>
                        </div>
                      </div>

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

export default ProductDetail;
