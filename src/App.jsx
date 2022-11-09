import { useState } from "react";

import "./App.css";
import ProductForm from "./components/ProductForm";
import FormularioEnsayo from "./components/FormularioEnsayo";
import ProductsList from "./components/ProductsList";

function App() {
  const initialProducts = [
    {
      id: 1,
      name: "Computer",
      category: "technology",
      price: 800,
      isAvailable: true,
    },
    {
      id: 2,
      name: "Play Station",
      category: "Videgames",
      price: 300,
      isAvailable: false,
    },
    {
      id: 3,
      name: "Heartpods",
      category: "Multimedia",
      price: 110,
      isAvailable: false,
    },
    {
      id: 4,
      name: "Heartpods",
      category: "Multimedia",
      price: 110,
      isAvailable: false,
    },
  ];

  const [productsList, setProductsList] = useState(initialProducts);
  const [productSelected, setProductSelected] = useState(null);

  const addProduct = (newProduct) => {
    /* alert("agregando"); */
    setProductsList([...productsList, newProduct]);
  };

  const deleteProduct = (id) => {
    confirm("Estás seguro que quieres eliminar");
    const filteredProducts = productsList.filter(
      (product) => product.id !== id
    );
    setProductsList(filteredProducts);
  };

  const selectProduct = (product) => {
    alert(`Haz seleccionado ${product.name}`);
    setProductSelected(product);
  };

  const updateProduct = (editedProduct) => {
    editedProduct.id = productSelected.id;
    const index = productsList.findIndex(
      (product) => product.id === editedProduct.id
    );
    productsList[index] = editedProduct;
    setProductsList([...productsList]);
    setProductSelected(null);
  };

  return (
    <div className="App">
      <div className="containerListProducts">
        <h1>Add Product</h1>
        <ProductForm
          addProduct={addProduct}
          selectProduct={selectProduct}
          productSelected={productSelected}
          updateProduct={updateProduct}
        />
        <ProductsList
          productsList={productsList}
          deleteProduct={deleteProduct}
          selectProduct={selectProduct}
        />
      </div>

      {/*  <FormularioEnsayo /> */}
    </div>
  );
}

export default App;
