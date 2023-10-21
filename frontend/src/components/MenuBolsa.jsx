import React, { useEffect, useRef, useState } from 'react';
import './MenuBolsa.css';

const MenuBolsa = () => {
  const bolsaBoxRef = useRef(null);
  
  const [dbolsa, setDbolsa] = useState([{'Ação': 'ITUB3.SAO', 'Data': '2023-10-20', 'Fechamento': 23.13, 'Maior Preço': 23.26, 'Menor Preço': 22.86}, {'Ação': 'GOOG', 'Data': '2023-10-20', 'Fechamento': 136.74, 'Maior Preço': 139.04, 'Menor Preço': 136.245}, {'Ação': 'META', 'Data': '2023-10-20', 'Fechamento': 308.65, 'Maior Preço': 315.3, 'Menor Preço': 306.47}, {'Ação': 'IBM', 'Data': '2023-10-20', 'Fechamento': 137.16, 'Maior Preço': 139.27, 'Menor Preço': 137.12}, {'Ação': 'TSLA', 'Data': '2023-10-20', 'Fechamento': 211.99, 'Maior Preço': 218.8606, 'Menor Preço': 210.42}, {'Ação': 'FDMO34.SAO', 'Data': '2023-10-20', 'Fechamento': 58.39, 'Maior Preço': 59.41, 'Menor Preço': 58.34}, {'Ação': 'PETR4.SAO', 'Data': '2023-10-20', 'Fechamento': 37.85, 'Maior Preço': 38.86, 'Menor Preço': 37.39}]);

  useEffect(() => {
    fetch('https://apisd-production.up.railway.app/api/lista-bolsa')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao enviar");
        }
        return response.json();
      })
      .then((data) => {
        setDbolsa(data);
      })
      .catch((error) => {
        console.error("Erro durante o envio de dados", error);
      });
  }, []);

  return (
    <div id="bolsa_box" ref={bolsaBoxRef}>
      {dbolsa.length > 0 && dbolsa.map((item, index) => (
        <div className='bolsa_item' key={index}>
          <div className='titulo_box'>
            <p>{item["Ação"]}</p>
            <img src={`./static/logos/${item["Ação"]}.png`} alt={item["Ação"]} />
          </div>
          <div className="box_org">
            <p className='closed'>{item["Fechamento"]} $</p>
            <div className='footer-box'>
              <p className='alta'>{item["Maior Preço"]}</p>
              <p className='baixa'>{item["Menor Preço"]}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuBolsa;
