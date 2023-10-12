import React, { useState, useEffect } from 'react';
import './Header.css';


const Container = () => {
  const [ipAddress, setIpAddress] = useState(null);
  const [weather, setWeather] = useState();

  // funcão para fazer request no servidor da 'localizacão e tempo' baseada no ip do client
  const enviarIp = async (ip) => {
    try {
      const response = await fetch('https://apisd-production.up.railway.app//obter_ip', {
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
    } catch (error) {
      console.error('Erro ao processar a solicitação:', error);
    }
  };


  // Função executada sempre que abrir a pagina, enviando um request para api.ipify.org, a fim de obter o ip do cliente
  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIpAddress(data.ip);
        enviarIp(data.ip);
      } catch (error) {
        console.error('Erro ao obter o endereço IP do cliente:', error);
      }
    };

    fetchIpAddress();
  }, []);


  // --------------html do cabeçalho------------- 
  return (
    <>
      <header>

        <div id='user_weather'>

          <div className="user_menu">
            <div id='user_icon'>
              <a href="https://www.ip2location.io" target="_blank" rel="noopener noreferrer">
                <img id="icon" src="./static/user_1.png" alt="ip2API" />
              </a>
            </div>

            <div id='user_name'>
              <p id='p_g'>
                Welcome
              </p>
              <p id='p_p'>
                User
              </p>
            </div>
          </div>

          <div id="weather">
            <div id="teste">
              <div id="icon">
                {weather && (
                  <img
                    src={`./static/climate/${weather['Clima']}.png`}
                    alt="Clima"
                  />
                )}
              </div>
              <div id="temp">
                {weather && (
                  <p>{weather['Temperatura']}ºC</p>
                )}
              </div>
            </div>
            <div id="city">
              {weather && (
                <p>{weather['Cidade']}</p>
              )}
            </div>
          </div>

        </div>

        <div id="div_pai">
          <div className="apis">
            <div className="api_txt">
              <p>API'S</p>
            </div>
            <div className="api_imgs">
              <a href="https://brapi.dev" target="_blank" rel="noopener noreferrer">
                <img id="aa" src="./static/brapi.png" alt="Brapi API" />
              </a>
              <a
                href="https://docs.awesomeapi.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img id="bb" src="./static/awesomeAPI.png" alt="awesomeAPI" />
              </a>

              <a href="https://hgbrasil.com/status/weather" target="_blank" rel="noopener noreferrer">
                <img id="cc" src="./static/hgweather.png" alt="WeatherAPI" />
              </a>

              <a href="https://www.ipify.org" target="_blank" rel="noopener noreferrer">
                <img id="dd" src="./static/ipfy.png" alt="ipfyAPI" />
              </a>

              <a href="https://www.ip2location.io" target="_blank" rel="noopener noreferrer">
                <img id="ee" src="./static/ip2.png" alt="ip2API" />
              </a>

            </div>
          </div>
        </div>


      </header>
    </>
  );
};

export default Container;