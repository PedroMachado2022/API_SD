import React, { useState, useEffect } from 'react';

import './Header.css';

const Container = () => {
  const [ipAddress, setIpAddress] = useState(null);
  const [weather, setWeather] = useState();

  const enviarIp = async (ip) => {
    console.log(ip)
    try {
      const response = await fetch('http://127.0.0.1:5000/obter_ip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'ip': ip }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar a solicitação.');
      }

      const data = await response.json();
      setWeather(data);
      console.log(weather)
    } catch (error) {
      console.error('Erro ao processar a solicitação:', error);
    }
  };

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIpAddress(data.ip);
        enviarIp(data.ip);
        console.log(data.ip)
      } catch (error) {
        console.error('Erro ao obter o endereço IP do cliente:', error);
      }
    };

    fetchIpAddress();
  }, []);

  return (
    <>
      <header>

        <div className="user_menu"></div>
        
        <div id="weather">

         <div id="teste">

         <div id="icon">

            <img src={`./static/climate/${weather['Dadinhos']['Clima']}.png`} />

          </div>  

          <div id="temp">

          <p>{weather['Dadinhos']['Temperatura']}ºC </p>

          </div>

         </div>

          <div id="city">

            <p>{weather['Dadinhos']['Cidade']}  </p>

          </div>

          


        </div>
        
        <div className="apis">
          <div className="api_txt">
            
                  <p>API'S</p>
                
          </div>

          <div className="api_imgs">
            <a href="https://brapi.dev" target="_blank">
              <img id="aa" src="./static/brapi.png" alt="Brapi API" />
            </a>

            <a href="https://docs.awesomeapi.com.br" target="_blank">
              <img id="bb" src="./static/awesomeAPI.png" alt="awesomeAPI" />
            </a>
          </div>
        </div>
        
      </header>
    </>
  );
};

export default Container;
