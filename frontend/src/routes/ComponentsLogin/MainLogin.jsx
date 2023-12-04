import React, { useState } from 'react';
import './MainLogin.css';

const MainLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();

        if (typeof data.message === 'string' && data.message === 'Liberado') {
          console.log('Dados enviados com sucesso!', data.message);
        }
        
        // Adicione aqui qualquer lógica adicional após o envio bem-sucedido

      } else {
        const errorData = await response.json();
        console.error('Erro ao enviar dados:', response.statusText, errorData.message);
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error.message);
      setErrorMessage('Erro interno ao processar a solicitação.');
    }

    // Resetar o formulário
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MainLogin;
