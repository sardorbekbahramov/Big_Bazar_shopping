import React from 'react';
import ProductCard from './ProductCard';

const Products = ({data}) => {
    return (
        <>
           <div className="py-0">
                <div className='flex flex-col items-center gap-4'>
                    <div className='w-[100%] h-[50px] bg-[#f6f6f6] drop-shadow	filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));'></div>
                    <h1 className='text-2xl bg-[#f6f6f6] text-[#001E3D] w-[100%] font-semibold  text-center py-3 drop-shadow	filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));'>ALL TRENDING PRODUCTS</h1>
                    <span className='w-[100%] h-[3px] bg-[#f6f6f6]'></span>
                </div>
                <div className='max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10 mt-4'>
                    <ProductCard data={data}/>
                </div>
            </div> 
        </>
    );
}

export default Products;
