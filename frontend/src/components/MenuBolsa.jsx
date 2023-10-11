import React, { useEffect, useRef, useState } from 'react';
import './MenuBolsa.css';

const MenuBolsa = () => {
  const bolsaBoxRef = useRef(null);
  
  const [dbolsa, setDbolsa] = useState([]);

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
