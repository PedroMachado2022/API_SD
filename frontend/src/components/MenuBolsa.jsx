import React, { useEffect, useRef, useState } from 'react';
import "./MenuBolsa.css"

const MenuBolsa = () => {
    const bolsaBoxRef = useRef(null);
    const ele = useRef(null) 

    const [dbolsa, setDbolsa] = useState()


    useEffect(()=>{
        fetch('http://127.0.0.1:5000/api/lista-bolsa')
        .then((response)=> {
            if(!response.ok) {
                throw new Error("Erro ao enviar")
            }
            return response.json();
        })
        .then((data)=> {
            setDbolsa(data)
        })
        .catch((error) => {
            console.error("Erro durante o envio de dados", error)
        })
    })
    
    useEffect(() => {
      // Obtém uma referência para o elemento com a classe "bolsa_box"
      const bolsaBox = bolsaBoxRef.current;
      let intervaloRolagem; // Declara uma variável para controlar a rolagem automática
  
      // Velocidade da rolagem (pixels por segundo)
      const velocidadeRolagem = 30;
  
      // Função para rolar automaticamente
      function rolarAutomaticamente() {
        // Calcula a nova posição de rolagem
        const novaPosicao = bolsaBox.scrollLeft + 1; // Mova 1 pixel para a direita
        if (novaPosicao < bolsaBox.scrollWidth - bolsaBox.clientWidth) {
          bolsaBox.scrollLeft = novaPosicao;
        } else {
          // Quando chegar ao final, volte ao início
          console.log(ele.current.offSetLeft, bolsaBox.scrollLeft)
          bolsaBox.scrollLeft = 0;
        }
      }
  
      // Inicia a rolagem automática
      intervaloRolagem = setInterval(rolarAutomaticamente, 1000 / velocidadeRolagem);
  
      // Para a rolagem automática quando o mouse passar sobre o elemento
      bolsaBox.addEventListener('mouseenter', () => {
        clearInterval(intervaloRolagem);
      });
  
      // Retoma a rolagem automática quando o mouse sair do elemento
      bolsaBox.addEventListener('mouseleave', () => {
        intervaloRolagem = setInterval(rolarAutomaticamente, 1000 / velocidadeRolagem);
      });
  
      // Limpa o intervalo quando o componente for desmontado
      return () => {
        clearInterval(intervaloRolagem);
      };
    }, []); 

  return (
    <div id="bolsa_box" ref={bolsaBoxRef}>
        <div className='bolsa_item' ref={ele}>
            <a href='#'>
                <h4>Casas<span></span></h4>
                <p>R$ 20,00</p>
            </a>
        </div>
        <div className='bolsa_item'>
            <a href='#'>
                <h4>Casas<span></span></h4>
                <p>R$ 20,00</p>
            </a>
        </div>
        <div className='bolsa_item'>
            <a href='#'>
                <h4>Casas<span></span></h4>
                <p>R$ 20,00</p>
            </a>
        </div>
        <div className='bolsa_item'>
            <a href='#'>
                <h4>Casas<span></span></h4>
                <p>R$ 20,00</p>
            </a>
        </div><div className='bolsa_item'>
            <a href='#'>
                <h4>Casas<span></span></h4>
                <p>R$ 20,00</p>
            </a>
        </div><div className='bolsa_item'>
            <a href='#'>
                <h4>Casas<span></span></h4>
                <p>R$ 20,00</p>
            </a>
        </div><div className='bolsa_item'>
            <a href='#'>
                <h4>Casas<span></span></h4>
                <p>R$ 20,00</p>
            </a>
        </div><div className='bolsa_item'>
            <a href='#'>
                <h4>Casas<span></span></h4>
                <p>R$ 20,00</p>
            </a>
        </div><div className='bolsa_item'>
            <a href='#'>
                <h4>Casas<span></span></h4>
                <p>R$ 20,00</p>
            </a>
        </div><div className='bolsa_item'>
            <a href='#'>
                <h4>Casas<span></span></h4>
                <p>R$ 20,00</p>
            </a>
        </div><div className='bolsa_item'>
            <a href='#'>
                <h4>Casas<span></span></h4>
                <p>R$ 20,00</p>
            </a>
        </div>
    </div>
  )
}

export default MenuBolsa