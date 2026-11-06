import { useEffect, useState } from "react";
import "./form.css";
import { ProductForm } from "./ProductForm";
import { GetAllProducts } from "./ProductList";

export function Catalogo({ products }) {
  //Definicion de estado para catalogo y loader
  const [productos, setProductos] = useState([...products]);
  const [isLoading, setLoading] = useState(true);

  //Contralar si el formulario esta siendo abierto y si se edita o crea
  const [showForm, setShowForm] = useState(false);
  const [productSeleccionado, setProductSeleccionado] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setProductos(products);
    }, 2500);
  }, []);

  //crud
  const handlerSaveProduct = (nuevoOActualizado) => {
    //update: reemplazar el producto seleccionado
    if (productSeleccionado) {
      //remplacemos el producto que coincida con el ID
      setProductos((prev) =>
        prev.map((p) =>
          p.id == productSeleccionado.id ? nuevoOActualizado : p
        ),
      );
    } else {
      //Agrega un nuevo elemento
      setProductos((prev) => [
        ...prev,
        { ...nuevoOActualizado, id: `p${Date.now()}` },
      ]);
    }

    // cerrar el formulario y limpiarlo
    setShowForm(false);
    setProductSeleccionado(null);
  };

  const handlerRemoveProduct = (id) => {
    // Elimine o saque de productos el id seleccionado
    //Podriamos eliminar con filter o con slice
    setProductos((prev) => prev.filter((p) => p.id != id));
  };

  const handlerIniciarEdicion = (producto) => {
    setProductSeleccionado(producto);
    setShowForm(true);
  };

  return (
    <>
      <div>
        {isLoading ? (
          <h4>Cargando Poductos...</h4>
        ) : (
          <GetAllProducts
            products={productos}
            onEdit={handlerIniciarEdicion}
            onRemove={handlerRemoveProduct}
          />
        )}
      </div>
      <div className="mag-btns">
        <button
          onClick={() => {
            setProductSeleccionado(null);
            setShowForm(true);
          }}
          className="mag-btn mag-btn-primary"
        >
          Agregar Producto
        </button>
      </div>

      {showForm ? (
        <ProductForm
          key={productSeleccionado ? productSeleccionado.id : ""}
          productAEditar={productSeleccionado}
          onSave={handlerSaveProduct}
          onCancel={() => {
            setShowForm(false);
            setProductSeleccionado(null);
          }}
        />
      ) : (
        ""
      )}
    </>
  );
}
