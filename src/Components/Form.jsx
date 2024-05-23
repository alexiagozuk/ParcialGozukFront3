import { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    marca: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChangeNombre = (e) => {
    setFormData({ ...formData, nombre: e.target.value });
  };
  const handleChangeMarca = (e) => {
    setFormData({ ...formData, marca: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.nombre.length > 3 &&
      !formData.nombre.startsWith(" ") &&
      formData.marca.length > 6
    ) {
      setError("");
      setSubmitted(true);
    } else {
      setError(
        "Por favor chequea que la información sea correcta (nombre mayor a 3 digitos y marca de ropa mayor a 6 digitos)"
      );
      setSubmitted(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Tu Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChangeNombre}
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="marca">Marca de ropa favorita Argentina:</label>
          <input
            type="text"
            name="marca"
            value={formData.marca}
            onChange={handleChangeMarca}
            placeholder="Tu marca favorita"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {submitted && <Card data={formData} />}
    </div>
  );
};

export default Form;
