import React from 'react';
import { useParams } from 'react-router-dom';
import shoes from './../shoes.json';

function ProductItem() {
  let { id } = useParams();
  const shoe = shoes[id];
  
  if(!shoe){
    return <h3>Product Not Found!</h3>
  }
  

  return (
    <div>

      <h1>Welcome To ProductItem.js</h1>
      <div>
      < h4>{shoe.name}</h4>
        <img src = {shoe.img} height = {500} alt="" />
      </div>
    
    </div>
  );
}

export default ProductItem;
