import React from 'react';
import { FaPiggyBank, FaHeadphones } from "react-icons/fa6";
import { FaShippingFast, FaWallet } from "react-icons/fa";
import logo from './images/Big_Bazaar.png'

const Footer = () => {
    return (
        <>
            <div className="w-full py-8 px-10 bg-[#f6f6f6]">
                <div className="flex w-full">
                    <div className="w-[30%] p-6 border-r border-gray-400 ">
                        <div className="flex py-[10px] px-6 mt-[15px]">
                            <div className="text-[26px] text-[#FE3E00] mt-2">
                                <FaPiggyBank/>
                            </div>
                            <div className="ml-[15px]">
                                <h3 className='uppercase text-[16px] text-[#FE3E00] font-semibold tracking-[1px]'>Great Saving</h3>
                                <p className='text-[14px] text-[#001E3D]'>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>

                        <div className="flex py-[10px] px-6 mt-[15px]">
                            <div className="text-[26px] text-[#FE3E00] mt-2">
                                <FaShippingFast />
                            </div>
                            <div className="ml-[15px]">
                                <h3 className='uppercase text-[16px] text-[#FE3E00] font-semibold tracking-[1px]'>Free Delevery</h3>
                                <p className='text-[14px] text-[#001E3D]'>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>

                        <div className="flex py-[10px] px-6 mt-[15px]">
                            <div className="text-[26px] text-[#FE3E00] mt-2">
                                <FaHeadphones />
                            </div>
                            <div className="ml-[15px]">
                                <h3 className='uppercase text-[16px] text-[#FE3E00] font-semibold tracking-[1px]'>24/7 Support</h3>
                                <p className='text-[14px] text-[#001E3D]'>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>

                        <div className="flex py-[10px] px-6 mt-[15px]">
                            <div className="text-[26px] text-[#FE3E00] mt-2">
                                <FaWallet />
                            </div>
                            <div className="ml-[15px]">
                                <h3 className='uppercase text-[16px] text-[#FE3E00] font-semibold tracking-[1px]'>Money Back</h3>
                                <p className='text-[14px] text-[#001E3D]'>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[69%] py-[10px] px-5">
                        <div className="w-full justify-center items-center">
                            <img className='ml-[40%] w-[150px]' src={logo} alt="logo" />
                            <p className='mt-4 text-[14px] font-semibold text-[#001E3D] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisicing dolor sit</p>
                        </div>

                        <div className="p-[20px] mt-[20px] w-full flex justify-between">
                            <div className="py-[10px] px-6">
                                <h3 className='uppercase text-[#001E3D] text-[17px] tracking-[1px] font-semibold'>Our Company</h3>
                                <ul className='mt-[10px]'>
                                    <li className='mt-[5px] text-[#8a8a8a] capitalize tracking-[1px] text-[13px] font-semibold cursor-pointer hover:underline hover:text-[#707070]'>About Us</li>
                                    <li className='mt-[5px] text-[#8a8a8a] capitalize tracking-[1px] text-[13px] font-semibold cursor-pointer hover:underline hover:text-[#707070]'>Account</li>
                                    <li className='mt-[5px] text-[#8a8a8a] capitalize tracking-[1px] text-[13px] font-semibold cursor-pointer hover:underline hover:text-[#707070]'>Payment</li>
                                    <li className='mt-[5px] text-[#8a8a8a] capitalize tracking-[1px] text-[13px] font-semibold cursor-pointer hover:underline hover:text-[#707070]'>Help Center </li>
                                </ul>
                            </div>

                            <div className="py-[10px] px-6">
                                <h3 className='uppercase text-[#001E3D] text-[17px] tracking-[1px] font-semibold'>Products</h3>
                                <ul className='mt-[10px]'>
                                    <li className='mt-[5px] text-[#8a8a8a] capitalize tracking-[1px] text-[13px] font-semibold cursor-pointer hover:underline hover:text-[#707070]'>Delevery</li>
                                    <li className='mt-[5px] text-[#8a8a8a] capitalize tracking-[1px] text-[13px] font-semibold cursor-pointer hover:underline hover:text-[#707070]'>Track Order</li>
                                    <li className='mt-[5px] text-[#8a8a8a] capitalize tracking-[1px] text-[13px] font-semibold cursor-pointer hover:underline hover:text-[#707070]'>Terms & Conditions</li>
                                    <li className='mt-[5px] text-[#8a8a8a] capitalize tracking-[1px] text-[13px] font-semibold cursor-pointer hover:underline hover:text-[#707070]'>Customer Care</li>
                                </ul>
                            </div>

                            <div className="py-[10px] px-6">
                                <h3 className='uppercase text-[#001E3D] text-[17px] tracking-[1px] font-semibold'>Contact</h3>
                                <ul className='mt-[10px]'>
                                    <li className='mt-[5px] text-[#8a8a8a] capitalize tracking-[1px] text-[13px] font-semibold cursor-pointer hover:underline hover:text-[#707070]'>Adress: 70 Washengton, USA</li>
                                    <li className='mt-[5px] text-[#8a8a8a] capitalize tracking-[1px] text-[13px] font-semibold cursor-pointer hover:underline hover:text-[#707070]'>Email: ulib.email@gmail.com</li>
                                    <li className='mt-[5px] text-[#8a8a8a] capitalize tracking-[1px] text-[13px] font-semibold cursor-pointer hover:underline hover:text-[#707070]'>Phone: +1 155 356 957</li>
                                    <li className='mt-[5px] text-[#8a8a8a] capitalize tracking-[1px] text-[13px] font-semibold cursor-pointer hover:underline hover:text-[#707070]'>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;