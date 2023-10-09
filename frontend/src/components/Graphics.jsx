import React, { useEffect, useState } from 'react';

const Graphics = () => {
  const [ipAddress, setIpAddress] = useState(null);

  useEffect(() => {
    // Função para obter o endereço IP do cliente
    const fetchIpAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error('Erro ao obter o endereço IP do cliente:', error);
      }
    };

    
    fetchIpAddress();
  }, []);

  

  return (
    <>
      <p>Endereço IP do cliente: {ipAddress}</p>
      {/* Você pode exibir as informações de localização e clima aqui com base no endereço IP */}
    </>
  );
};

export default Graphics;""
