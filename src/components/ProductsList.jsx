import React from "react";

const ProductsList = ({ productsList, deleteProduct, selectProduct }) => {
  return (
    <ul>
      {productsList.map((product) => (
        <li key={product.id}>
          <h3>
            <b>Name: </b>
            {product.name}
          </h3>
          <div>
            <b>Category: </b> {product.category}
          </div>
          <div>
            <b>Price:</b> {product.price}
          </div>
          <div>Is Avalaible: {product.isAvalaible?.toString()} </div>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
          <button onClick={() => selectProduct(product)}>Select</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
