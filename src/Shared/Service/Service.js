import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({product}) => {
    const {Name,id,model,img}=product;
    const navigate=useNavigate();
    return (
      <div
        style={{ height: "450px", width: "350px" }}
        class="card w-96 bg-base-100 shadow-xl"
      >
        <figure>
          <img
            style={{ height: "350px", width: "350px" }}
            src={img}
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{Name}</h2>
          <p>{model}</p>
          <div class="card-actions justify-end">
            <button onClick={()=>navigate('/login')} class="btn btn-primary text-white">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Service;