import React from 'react';
import shoes from './../shoes.json';
import {Link} from 'react-router-dom';

function Product() {
  return (
    <div>
      <h1>Welcome To Product Panel</h1>
      <div className="productContainer">
        {Object.keys(shoes).map(keyName => {
          const shoe = shoes[keyName];
          return(
            <Link className="link" key={keyName} to={`/product/${keyName}`}>
              <h4>{shoe.name}</h4>
              <img src = {shoe.img} height = {150} alt="" />
    
            </Link>
          )
        }) }
      </div>
    </div>
  );
}

export default Product;


