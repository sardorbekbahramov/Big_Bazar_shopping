import React from 'react';
import logo from './images/Big_Bazaar.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoCartOutline } from "react-icons/io5";
import userimg from './images/pngegg (2).png'

const Header = () => {
    const userInfo = useSelector((state)=> state.bazar.userInfo)
    const productData = useSelector((state)=> state.bazar.productData)
    console.log(userInfo);
    return (
        <>
            <div className="shadow-lg p-6 mb-6rounded-md w-full h-20 bg-white  sticky top-0 z-50">
                <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
                    <div>
                        <Link to={'/'}>
                            <div>
                                <img className='w-[140px]' src={logo} alt="logo" />
                            </div>
                        </Link>
                    </div>

                    <div className="flex items-center gap-8">
                        <ul className="flex items-center gap-8">
                            <li className='text-base text-[#FE3E00] border border-solid border-gray-400 px-3 py-2 text-balck font-semibold decoration-[1px] cursor-pointer duration-300'>Home</li>
                            <li className='text-base font-semibold text-[#FE3E00] border border-solid border-gray-400 px-3 py-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
                            <li className='text-base font-semibold text-[#FE3E00] border border-solid border-gray-400 px-3 py-2 decoration-[1px] cursor-pointer duration-300'>Products</li>
                            <li className='text-base font-semibold text-[#FE3E00] border border-solid border-gray-400 px-3 py-2 decoration-[1px] cursor-pointer duration-300'>About</li>
                            <li className='text-base font-semibold text-[#FE3E00] border border-solid border-gray-400 px-3 py-2 decoration-[1px] cursor-pointer duration-300'>Contact</li>
                        </ul>
                    </div>

                    <div className='flex items-center gap-6'>
                        <Link to={'/cart'}>
                            <div className='relative'>
                                <IoCartOutline className='w-[46px] h-[55px]  text-[#001E3D]'/>
                                <span className='absolute w-6 top-[13px] left-[13px] text-sm flex items-center justify-center font-semibold text-[#FE3E00]'>{productData.length}</span>
                            </div>
                       </Link>

                        <Link to={'/login'}>
                            <img className='w-9 h-9 border border-solid border-gray-800 rounded-full bg-cover text-[#001E3D]' src={userInfo ? userInfo.image : userimg} alt="logo" />
                        </Link>

                            {
                                userInfo && 
                                (
                                    <div className='flex flex-col'>
                                        <p className='text-base font-semibold text-[#001E3D]'>{userInfo.name}</p>
                                        <p className='text-xs text-[#001E3D]'>{userInfo.email}</p>
                                    </div>
                                )
                            }
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Header;
