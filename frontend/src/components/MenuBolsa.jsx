import React, { useEffect, useRef, useState } from 'react';
import "./MenuBolsa.css"

const MenuBolsa = () => {
    const bolsaBoxRef = useRef(null);
    const ele = useRef(null) 

    const [dbolsa, setDbolsa] = useState({})


    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/lista-bolsa')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao enviar")
                }
                return response.json();
            })
            .then((data) => {
                setDbolsa(data);

                // Inicie a rolagem automática aqui após o carregamento bem-sucedido dos dados
                const bolsaBox = bolsaBoxRef.current;
                let intervaloRolagem;

                const velocidadeRolagem = 30;

                function rolarAutomaticamente() {
                    const novaPosicao = bolsaBox.scrollLeft + 1;
                    if (novaPosicao < bolsaBox.scrollWidth - bolsaBox.clientWidth) {
                        bolsaBox.scrollLeft = novaPosicao;
                    } else {
                        bolsaBox.scrollLeft = 0;
                    }
                }

                intervaloRolagem = setInterval(rolarAutomaticamente, 1000 / velocidadeRolagem);

                bolsaBox.addEventListener('mouseenter', () => {
                    clearInterval(intervaloRolagem);
                });

                bolsaBox.addEventListener('mouseleave', () => {
                    intervaloRolagem = setInterval(rolarAutomaticamente, 1000 / velocidadeRolagem);
                });

                return () => {
                    clearInterval(intervaloRolagem);
                };
            })
            .catch((error) => {
                console.error("Erro durante o envio de dados", error)
            })
    }, []); 

  return (
    <div id="bolsa_box" ref={bolsaBoxRef} onClick={()=> {console.log(dbolsa)}}>
        <div className='bolsa_item' ref={ele}>
           
                <h4>Casas</h4>
                <img src='./static/lupa.png'/>
                
                <p className='closed'>closed: 440.1</p>
                <div className='footer-box'>
                    <p className='baixa'>400</p>
                    <p className='alta'>400</p>
                </div>
            
        </div>
        {Object.keys(dbolsa).length > 2 && (
            Object.values(dbolsa).map((item) => (
             <div className='bolsa_item' ref={ele}>
                    <h4>{item.Ação}</h4>
                <img src='./static/lupa.png'/>
                
                <p className='closed'>closed: {item.Fechamento}</p>
                <div className='footer-box'>
                    <p className='baixa'>{item["Menor Preço"]}</p>
                    <p className='alta'>{item["Menor Preço"]}</p>
                </div>
            </div>
            )
            ))}

    </div>
  )
}

export default MenuBolsa