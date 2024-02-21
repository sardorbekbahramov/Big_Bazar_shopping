import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([])
    const data = useLoaderData() //It gives all datas from axios fetch
    
    useEffect(()=>{
        setProducts(data.data);
    }, [data])
    return (
        <>
            <Banner/>
            <Products data={products}/>
        </>
    );
}

export default Home;
