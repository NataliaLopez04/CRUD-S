import { React, useState, useEffect } from "react";

// name, price, category, isaVailable

const ProductForm = ({ addProduct, productSelected, updateProduct }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [isAvailable, setIsAvalaible] = useState(false);

  useEffect(() => {
    if (productSelected !== null) {
      setName(productSelected.name);
      setCategory(productSelected.category);
      setPrice(productSelected.price);
      setIsAvalaible(productSelected.isAvailable);
    } else {
      reset();
    }
  }, [productSelected]);

  const submit = (e) => {
    e.preventDefault();
    const product = {
      id: Date.now(),
      name: name,
      category: category,
      price: price,
      isAvailable: isAvailable,
    };
    if (productSelected) {
      updateProduct(product);
    } else {
      addProduct(product);
    }
    reset();
  };

  const reset = () => {
    setName("");
    setCategory("");
    setPrice("");
    setIsAvalaible(false);
  };

  return (
    <div>
      <form action="" onSubmit={submit}>
        <div className="containerForm">
          {/* el htmlFor del label debe ser el mismo valor del id del input */}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Product"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="containerForm">
          {/* el htmlFor del label debe ser el mismo valor del id del input */}
          <label htmlFor="category">Category</label>
          <input
            type="text"
            placeholder="Category"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
        </div>
        <div className="containerForm">
          <label htmlFor="price">Price</label>
          <input
            placeholder="Precio $"
            type="number"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="containerForm">
          <label htmlFor="isAvailable">Is available</label>
          <input
            type="checkbox"
            id="isAvailable"
            onChange={(e) => setIsAvalaible(e.target.checked)}
            checked={isAvailable}
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default ProductForm;
