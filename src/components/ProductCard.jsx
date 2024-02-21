import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/bazarSlice';
import { ToastContainer, toast } from 'react-toastify'
import { FaStar } from "react-icons/fa6";


const ProductCard = ({data}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDetails = (product)=> {
        navigate(`/product/${String(product.title).toLowerCase().split(' ').join('')}`,{
            state: {
                item: product,
            }
        })
    } 

    return (
        <>
            {
                data.map((product)=>{
                    return(
                        <>
                        <div className='group relative'>
                            <div onClick={()=>handleDetails(product)} className='border-t-[1px] border-r-[1px] border-l-[1px] w-full h-96 cursor-pointer overflow-hidden bg-[#f6f6f6]'>
                                <img className='w-full h-full group-hover:scale-110 duration-500' src={product.image} alt="img" />
                            </div>

                            <div className='w-full border-[1px] px-2 py-4'>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h2 className='font-semibold text-base text-[#001E3D]'>{`${product.title.substring(0, 15)}`}</h2>
                                    </div>

                                    <div className='justify-end flex gap-2 relative overflow-hidden w-28 text-sm'>
                                        <div className='flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500'>
                                            <p className='line-through text-gray-500'>{product.oldPrice}</p>
                                            <p className='font-semibold'>${product.price}</p>
                                        </div>
                                        <p onClick={()=>dispatch(
                                                            addToCart({
                                                                id: product.id,
                                                                title: product.title,
                                                                image: product.image,
                                                                price: product.price,
                                                                quantity: 1,
                                                                description: product.description,
                                                                rate: product.rating.rate
                                                            })
                                                        ) & toast.success(`${product.title} is added!`)
                                                    } className='absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500'>add to cart <span><BsArrowRight /></span> </p>
                                    </div>
                                </div>

                                <div>
                                    <p className='text-[#FE3E00]'>{product.category}</p>
                                </div>

                                <div className='absolute top-4 right-0'>
                                    {
                                        !product.isNew && (
                                            <>
                                                <p className='bg-[#001E3D] text-[#F8D301] px-4 py-1 border-l-[1px] flex'><FaStar className='flex relative right-1 top-[2px] text-[#F8D301]'/>{`${product.rating.rate}`}</p>
                                            </>
                                        )
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
                    )
                })
            }
        </>
    );
}

export default ProductCard;
