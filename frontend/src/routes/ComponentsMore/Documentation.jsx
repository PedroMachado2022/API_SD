import React from 'react'
import './Documentation.css'
const Documentation = () => {
  return (
    <>
    <main>
        <h1>Resumo Do Projeto</h1>
        <section id='conteudo'>
        <div className='texto'>
            <p> <span></span>O projeto "SimulaCotações" é um site que oferece uma simulação interativa de cotações de moedas estrangeiras. Ele utiliza APIs (Application Programming Interfaces) para obter dados em tempo real sobre as taxas de câmbio de diferentes moedas, permitindo aos usuários acompanhar e estimar as cotações das moedas de seu interesse.</p>
        </div>
            <div className='box'>
            <h3>Tecnologias</h3>
            <div id='Tec'>
                <img className='tec-img' src="./static/tec/react.png" alt="react" />
                <img  className='tec-img' src="./static/tec/flask.png" alt="flask" />
                <img className='tec-img' src="./static/tec/html.png" alt="html" />
                <img className='tec-img' src="./static/tec/css.png" alt="css"/>
                <img className='tec-img' src="./static/tec/js.png" alt="javascript"/>
                <img className='tec-img' src="./static/tec/python.png" alt="python"/>
            </div>
            </div>
            <div className="box">
                <h3>API's</h3>
                <div id='Tec'>
                <img className='tec-img2' src="./static/apis/aw.png" alt="react" />
                <img className='tec-img2' src="./static/apis/bra.png" alt="react" />
                <img className='tec-img2' src="./static/apis/hg.png" alt="react" />
                <img className='tec-img2' src="./static/apis/ip2.png" alt="react" />
                <img className='tec-img2' src="./static/apis/ipify.png" alt="react" />
                    
                </div>
            </div>
            <h3>Metodologia</h3>
            <div>

                <div className='bloco'>
                    <div className='texto'>
                    <h4>*Rotas</h4>
                    <p>O aplicativo define várias rotas para a comunicação entre o front-end e back-end, incluindo rotas para listar cotações (/api/lista), informações de ações (/api/lista-bolsa), histórico de cotações (/api/historico), e até mesmo obter o IP do cliente (/obter_ip).</p>
                    </div>
                    <div className='img-texto'>
                        <div>
                        <p>Servidor</p>
                        <img src="./static/exemplos/Exemplo-Rota.png"  alt="rota" srcset="" />
                        </div>
                        <div>
                        <p>client</p>
                        <img src="./static/exemplos/E-rota-client.png"  alt="rota" srcset="" />
                        </div>
                    </div>

                </div>

                <div className='bloco'>
                    <div className='texto'>
                    <h4>Variáveis de Dados:</h4>
                    <p>Existem três variáveis principais para armazenar os dados do projeto: TABELA para cotações de moedas, BOLSA para informações de ações e GRAFICO para dados de histórico de cotações.</p>
                    </div>
                    <div className='box-img'>
                    <img src="./static/exemplos/E-variavel.png"  alt="rota" srcset="" />
                    </div>
                </div>

                <div className='bloco'>
                    <div className="texto">
                    <h4>Atualização Automática</h4>
                    <p>O projeto atualiza automaticamente os dados de cotações e ações a cada X horas, executando as funções de atualização em threads separadas. Isso garante que os dados estejam sempre atualizados.</p>
                    </div>
                    <div className="box-img">
                    <img src="./static/exemplos/E-atualizar.png" width={500} alt="rota" srcset="" />
                    </div>
                </div>
                <div className='bloco'>
                    <div className="texto">
                    <h4>Funções de Requisição</h4>
                    <p>Há funções que fazem requisições para APIs externas para obter informações sobre cotações de moedas, ações e dados climáticos com base no IP do cliente.</p>
                    </div>
                   <div className="box-img">
                   <img src="./static/exemplos/E-request.png" alt="rota" srcset="" />
                   </div>
                </div>
            </div>
        </section>
        </main>
    </>
  )
}

export default Documentation