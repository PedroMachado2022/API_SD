import React, { useEffect, useState } from 'react';

function App() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    // Faz a solicitação GET para o servidor Flask
    fetch('http://127.0.0.1:5000//api/rota') // Substitua pelo URL do servidor Flask
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao fazer a solicitação.');
        }
        return response.json();
      })
      .then((data) => {
        setResponseData(data);
      })
      .catch((error) => {
        console.error('Erro ao fazer a solicitação:', error);
      });
  }, []);

  return (
    <div>
      <h1>Dados Recebidos do Servidor Flask:</h1>
      {responseData && (
        <pre>{JSON.stringify(responseData, null, 2)}</pre>
      )}
    </div>
  );
}

export default App;
