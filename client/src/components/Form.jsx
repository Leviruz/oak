import React, { useState } from "react";
import Wrapper from "../assets/Wrappers/Form";

const Form = ({ onProductAdded }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [disponible, setDisponible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      description,
      value: parseFloat(value),
      disponible,
    };
    onProductAdded(newProduct);
    setName("");
    setDescription("");
    setValue("");
    setDisponible(false);
  };

  return (
    <div>
      <Wrapper onSubmit={handleSubmit}>
        <label htmlFor="productName">
          Nome do Produto
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="description">
          Descrição do Produto
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label htmlFor="value">
          Valor do Produto
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </label>
        <label htmlFor="disponibility">
          Disponível para venda:
          <select
            value={disponible}
            onChange={(e) => setDisponible(e.target.value === "true")}
          >
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </select>
        </label>
        <button type="submit">Cadastrar</button>
      </Wrapper>
    </div>
  );
};

export default Form;
