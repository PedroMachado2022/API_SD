import { useContext, useState } from "react";
import MoedaContext from "./MoedaContext";
import './Moedas.css'


const Moedas = () => {
  //const {titu} = useContext(MoedaContext) 
  
//   input de busca

  //const gab = {"Real": "BRL", "Dolar": "USD", "BitCoin": "BTC", "Peso(ARG)": "ARS", "Dolar(CAN)": "CAD", "Euro": "EUR", "Libra(BGB)": "GBP", "Dogcoin": "DOGE", "Ethereum": "ETH", "Rublo": "RUB", "Yuan": "CNY", "Iene": "JPY"}

  const [opcoes, setOpcoes] = useState(['Real', 'Dolar', 'Euro', 'Iene', 'BitCoin', 'Peso(ARG)', 'Dolar(CAN)', 'Libra(BGB)', "Dogcoin", "Ethereum", "Rublo", 'Yuan'])

  const [opcao_sele, setOpcoes_sele] = useState([])
  


  const [busca, setBusca] = useState([]); // Estado para o texto de busca
  const [opcoesVisiveis, setOpcoesVisiveis] = useState([]); 


    const handleRemove = () => {
        setOpcoesVisiveis([])
    }

  const handleChangeBusca = (e) => {
    const valorBusca = e.target.value;
    setBusca(valorBusca);

    // Filtrar as opções com base no texto de busca
    const opcoesFiltradas = opcoes.filter((opcao) =>
      opcao.toLowerCase().includes(valorBusca.toLowerCase())
    );

    setOpcoesVisiveis(opcoesFiltradas);
  };
 

  const selecionarOpcao = async (opcao) => {
    const novaLista = opcoes.filter((item) => item !== opcao);
    setOpcoes(novaLista);
    const sele = opcao_sele
    sele.push(opcao)
    console.log(opcao)
    setOpcoes_sele(sele)
    // console.log(opcao_sele)
    setOpcoesVisiveis([]); // Limpar as opções visíveis ao selecionar uma opção
  };

 //  hook para alterar variais que mudam de valor useState


//   mudar titulo e opçoes de envio
  const [titulo, setTitulo] = useState('')
  const [resultado, setResultado] = useState(null);

  const handleVoltaLista = (e) => {
      setOpcoes([...opcoes, e.target.className])
      setOpcoes_sele(opcao_sele.filter((i)=>{i !== e.target.className}))

  }
  
  const handleChange = (e) => {
    
    setTitulo(e.target.options[e.target.selectedIndex].textContent)
    if(opcao_sele.length > 0) {
      const i = [...opcao_sele, ...opcoes]
      setOpcoes(i)
      setOpcoes_sele([])
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const m1 = document.querySelector("#titulo_moeda").textContent;
      if (!m1) {
        window.alert('Selecione uma moeda antes de continuar.');
        return;
      }
      
      const formDataToSend = {
        moeda1: m1,
        moeda2: opcao_sele,
      };
  
      const response = await fetch('http://127.0.0.1:5000/api/rota', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao enviar a solicitação.');
      }
  
      const data = await response.json();
      setResultado(JSON.parse(data));
    } catch (error) {
      console.error('Erro ao processar a solicitação:', error);
    } finally {
      // Zerar os valores
      setFormData({ moeda1: "", moeda2: [] });
    }
  };
  

  return (
    <div id="Moedas" onClick={handleRemove}>
      <form onSubmit={handleSubmit} id="form-moedas" autoComplete="off">
        <h3>Procurar cotação</h3>
        <div id="form_busca" >
            <div id="titulo">
                <p id="titulo_moeda">{titulo}</p>
                <label id="label1">
                <select id="moeda1" name="moeda1"  onChange={handleChange}>
                {opcoes.map((e) => (<option key={e}>{e}</option>))}
                </select>
                </label>
            </div>
        <label id="label2">
          <div id="input_img">
          <input
              type="text"
              name="busca"
              id="busca_moeda"
              value={busca}
              onChange={handleChangeBusca}
              
            />
            <img src="./static/lupa.png" alt="lupa" />
              {/* Exibir opções abaixo do campo de busca */}
              {opcoesVisiveis.length > 0 && (
                <ul className="c">
                  {opcoesVisiveis.map((opcao) => (
                    <li key={opcao} onClick={() => selecionarOpcao(opcao)}>
                      {opcao}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
        </label>
       
        </div>
        <div id="ops">
                {opcao_sele.length>0 && (
                    <ul className="moedas_sele">
                        {opcao_sele.map((op) => (
                            <li key={op} >{op}<span className={op} onClick={handleVoltaLista}>X</span></li>
                        ))}
                    </ul>
                )}
        </div> 
        <div id="btn-submit">
          <button type="submit">Trocar</button>
          <button onClick={()=>{console.log(opcao_sele)}}>aqui</button>
        </div>
      </form>
      
       {/* Exibe o resultado */}
       {resultado &&  (
  <div>
    <p>
      <strong>Código:</strong> {resultado[0].code}<br />
      <strong>Nome:</strong> {resultado[0].name}<br />
      <strong>Alta:</strong> {resultado[0].high}<br />
      <strong>Baixa:</strong> {resultado[0].low}<br />
    </p>
  </div>
)}
    </div>
  );
}

export default Moedas