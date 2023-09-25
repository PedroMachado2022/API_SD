import { useState } from "react";

import './Moedas.css'


const Moedas = () => {
 //  hook para alterar variais que mudam de valor useState
 const [formData, setFormData] = useState({
    moeda1: '',
    moeda2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ... formData,
      [name]: value,
    });
  };

  console.log(formData['moeda1'])



  const handleSubmit = async (e) => {
    // n ter que carregar pagina
    e.preventDefault();
    // zerar valores
    setFormData({
        moeda1: '',
        moeda2: '',
    });
    if (formData['moeda1'] === formData['moeda2']) {
      window.alert('Não pode mesma moeda')
    } else{
    try {
      // estrutura padrao de envio
      const response = await fetch('http://127.0.0.1:5000//api/rota', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Erro ao enviar POST:', error);
    }}
  };

  return (
    <div id="Moedas">
      <form onSubmit={handleSubmit} id="form-moedas">
        <label>
            <h3>Faça a conversão</h3>
          <span>Selecione moeda de compra:</span>
          <select name="moeda1" value={formData.moeda1} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="BRL">Real</option>
            <option value="USD">Dolar</option>
            <option value="BIT">BitCoin</option>
          </select>
        </label>
        <br />
        <label>
          <span>Selecione moeda de venda:</span>
          <select name="moeda2" value={formData.moeda2} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="BRL">Real</option>
            <option value="USD">Dolar</option>
            <option value="BIT">BitCoin</option>
          </select>
        </label>
        <br />
        <button type="submit">Trocar</button>
      </form>
    </div>
  );
}

export default Moedas