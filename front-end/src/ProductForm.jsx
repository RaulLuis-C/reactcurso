import { useEffect, useState } from "react";

export function ProductForm({ productAEditar, onSave, onCancel }) {
  let newProduct = {
    id: 0,
    nombre: "",
    precio: 0,
    stock: 0,
    categoria: "",
  };
  const [formData, setFormData] = useState(productAEditar || newProduct);

  //Si nosotros le pasamos un producto a editar, estariamos cargando sus datos en el estado de nuestro form local
  // useEffect(() => {
  //   if (productAEditar) {
  //     setFormData(productAEditar);
  //   } else {
  //     setFormData(newProduct);
  //   }
  // }, [productAEditar]);

  const handleChange = (evt) => {
    const { name, value, type, checked } = evt.target;

    setFormData((prevData) => ({
      //...spread

      ...prevData,
      [name]: type == "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSave({
      ...formData,
      precio: +formData.precio,
      //stock: +formData.stock
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="radio"
        name="step"
        id="step1"
        className="msf-radio"
        defaultChecked
      />
      <div className="msf-wrap">
        <div className="msf-body">
          <div className="msf-panel msf-panel-1">
            <h3>Informacion</h3>
            <h3>{productAEditar ? "Editar Producto" : "Nuevo Producto"}</h3>
            <input
              type="text"
              placeholder="ID"
              readOnly="true"
              value={formData.id}
            />
            <input
              type="text"
              placeholder="Name"
              name="nombre"
              onChange={handleChange}
              value={formData.nombre}
            />
            <input
              type="text"
              placeholder="Precio"
              name="precio"
              onChange={handleChange}
              value={formData.precio}
            />
            <input
              type="text"
              name="stock"
              onChange={handleChange}
              value={formData.stock}
            />
            <input
              type="text"
              placeholder="category"
              onChange={handleChange}
              value={formData.categoria}
            />

            <div className="msf-actions">
              <button>
                {productAEditar ? (
                  <label htmlFor="step" className="msf-btn">
                    Actualizar
                  </label>
                ) : (
                  <label htmlFor="step" className="msf-btn">
                    Guardar
                  </label>
                )}
              </button>
              <button type="button" onClick={onCancel}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
