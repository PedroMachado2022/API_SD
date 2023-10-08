import React, { useEffect, useRef, useState } from 'react';
import "./MenuBolsa.css"


const MenuBolsa = () => {
    const bolsaBoxRef = useRef(null);
    const ele = useRef(null)
    
    // Importar event de compartilhamento (EventEmitter)
    

    const [dbolsa, setDbolsa] = useState([{ "A\u00e7\u00e3o": "ITUB3.SAO", "Data": "2023-09-29", "Fechamento": 23.06, "Maior Pre\u00e7o": 23.28, "Menor Pre\u00e7o": 22.93 }, { "A\u00e7\u00e3o": "GOOG", "Data": "2023-09-29", "Fechamento": 131.85, "Maior Pre\u00e7o": 134.89, "Menor Pre\u00e7o": 131.32 }, { "A\u00e7\u00e3o": "META", "Data": "2023-09-29", "Fechamento": 300.21, "Maior Pre\u00e7o": 310.64, "Menor Pre\u00e7o": 299.36 }, { "A\u00e7\u00e3o": "IBM", "Data": "2023-09-29", "Fechamento": 140.3, "Maior Pre\u00e7o": 142.13, "Menor Pre\u00e7o": 139.61 }, { "A\u00e7\u00e3o": "BBAS3.SAO", "Data": "2023-09-29", "Fechamento": 47.18, "Maior Pre\u00e7o": 47.89, "Menor Pre\u00e7o": 47.1 }, { "A\u00e7\u00e3o": "TSLA", "Data": "2023-09-29", "Fechamento": 250.22, "Maior Pre\u00e7o": 254.77, "Menor Pre\u00e7o": 246.35 }, { "A\u00e7\u00e3o": "FDMO34.SAO", "Data": "2023-09-29", "Fechamento": 62.34, "Maior Pre\u00e7o": 63.36, "Menor Pre\u00e7o": 62.04 }, { "A\u00e7\u00e3o": "PETR4.SAO", "Data": "2023-09-29", "Fechamento": 34.64, "Maior Pre\u00e7o": 34.69, "Menor Pre\u00e7o": 34.25 }, { "A\u00e7\u00e3o": "DIS", "Data": "2023-09-29", "Fechamento": 81.05, "Maior Pre\u00e7o": 81.33, "Menor Pre\u00e7o": 80.41 }, { "A\u00e7\u00e3o": "VALE", "Data": "2023-09-29", "Fechamento": 13.4, "Maior Pre\u00e7o": 13.505, "Menor Pre\u00e7o": 13.3321 }])

    
    useEffect(() => {
        /*https://apisd-production.up.railway.app/api/lista-bolsa
        http://127.0.0.1:5000/api/lista-bolsa*/
        fetch('https://apisd-production-dc3a.up.railway.app/api/lista-bolsa')
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
        <div id="bolsa_box" ref={bolsaBoxRef} onClick={() => { console.log(dbolsa) }}>

            {Object.keys(dbolsa).length > 2 && (
                Object.values(dbolsa).map((item) => (
                    <div className='bolsa_item' ref={ele}>
                        <div className='titulo_box'>
                            <p>{item.Ação}</p>
                            <img src={`./static/logos/${item.Ação}.png`} />
                        </div>

                        <div className="box_org">
                            <p className='closed'>{item.Fechamento} $</p>
                            <div className='footer-box'>
                                <p className='alta'>{item["Menor Preço"]}</p>
                                <p className='baixa'>{item["Menor Preço"]}</p>
                            </div>
                        </div>

                    </div>
                )
                ))}
                {Object.keys(dbolsa).length > 2 && (
                Object.values(dbolsa).map((item) => (
                    <div className='bolsa_item' ref={ele}>
                        <div className='titulo_box'>
                            <p>{item.Ação}</p>
                            <img src={`./static/logos/${item.Ação}.png`} />
                        </div>

                        <div className="box_org">
                            <p className='closed'>{item.Fechamento} $</p>
                            <div className='footer-box'>
                                <p className='alta'>{item["Menor Preço"]}</p>
                                <p className='baixa'>{item["Menor Preço"]}</p>
                            </div>
                        </div>

                    </div>
                )
                ))}
        
        </div>
    )
}

export default MenuBolsa