import { useEffect, useState } from "react";
import "./form.css";
import { ProductForm } from "./ProductForm";
import { GetAllProducts } from "./ProductList";

export function Catalogo({ products }) {
  //Definicion de estado para catalogo y loader
  const [productos, setProductos] = useState([...products]);
  const [isLoading, setLoading] = useState(true);
  const [canHandleForm, setCandleForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  });

  return (
    <>
      <div>
        {isLoading ? (
          <h4>Cargando Poductos...</h4>
        ) : (
        //   <ul>
        //     {productos.map((producto) => (
        //       <li key={producto.id}>{producto.id}</li>
        //     ))}
        //   </ul>
        <GetAllProducts products={productos} callbackSetHandlerForm={setCandleForm}/>
        )}
      </div>
      <div className="mag-btns">
        <button onClick={() => setCandleForm(true)} className="mag-btn mag-btn-primary">
          Agregar Producto
        </button>
        <button onClick={() =>setCandleForm(false)} className="mag-btn mag-btn-ghost">
          Eliminar Producto
        </button>
      </div>

      {canHandleForm ? <ProductForm products={productos} callbackSetLoadingProducts={setLoading}/> : ""}
      
    </>
  );
}
