import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('Product.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
         <h1 className='text-2xl font-semibold text-center'>Product</h1>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 my-10'>
            {
                products.map(product=><Service key={product.id} product={product}></Service>)
            }
         </div>
        </div>
    );
};

export default Services;