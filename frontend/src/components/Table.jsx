import React, { useState, useEffect, useContext } from 'react'
import "./Table.css"
import { DadosContext } from './DadosContext'

const Table = () => {
  const a = JSON.parse("{\"0\":{\"code\":\"BRL\",\"codein\":\"JPY\",\"name\":\"Real Brasileiro\\/Iene Japon\\u00eas\",\"high\":\"28.893\",\"low\":\"28.829\",\"pctChange\":\"0.16\",\"bid\":\"28.878\",\"ask\":\"28.892\",\"create_date\":\"2023-10-04 01:36:32\"},\"1\":{\"code\":\"BRL\",\"codein\":\"USD\",\"name\":\"Real Brasileiro\\/D\\u00f3lar Americano\",\"high\":\"0.1935\",\"low\":\"0.1935\",\"pctChange\":\"0\",\"bid\":\"0.1934\",\"ask\":\"0.1936\",\"create_date\":\"2023-10-04 01:36:32\"},\"2\":{\"code\":\"BRL\",\"codein\":\"AUD\",\"name\":\"Real Brasileiro\\/D\\u00f3lar Australiano\",\"high\":\"0.3078\",\"low\":\"0.3064\",\"pctChange\":\"0.03\",\"bid\":\"0.3069\",\"ask\":\"0.3073\",\"create_date\":\"2023-10-04 01:36:30\"},\"3\":{\"code\":\"BRL\",\"codein\":\"ARS\",\"name\":\"Real Brasileiro\\/Peso Argentino\",\"high\":\"69.0562\",\"low\":\"67.7085\",\"pctChange\":\"0.03\",\"bid\":\"67.7113\",\"ask\":\"67.7487\",\"create_date\":\"2023-10-04 01:36:30\"},\"4\":{\"code\":\"BRL\",\"codein\":\"CAD\",\"name\":\"Real Brasileiro\\/D\\u00f3lar Canadense\",\"high\":\"0.2705\",\"low\":\"0.2659\",\"pctChange\":\"1.73\",\"bid\":\"0.2692\",\"ask\":\"0.2718\",\"create_date\":\"2023-10-04 01:36:32\"},\"5\":{\"code\":\"BRL\",\"codein\":\"EUR\",\"name\":\"Real Brasileiro\\/Euro\",\"high\":\"0.185\",\"low\":\"0.1848\",\"pctChange\":\"0.05\",\"bid\":\"0.1849\",\"ask\":\"0.1849\",\"create_date\":\"2023-10-04 01:36:54\"},\"6\":{\"code\":\"BRL\",\"codein\":\"GBP\",\"name\":\"Real Brasileiro\\/Libra Esterlina\",\"high\":\"0.1605\",\"low\":\"0.1601\",\"pctChange\":\"0.12\",\"bid\":\"0.1603\",\"ask\":\"0.1604\",\"create_date\":\"2023-10-04 01:36:53\"},\"7\":{\"code\":\"BRL\",\"codein\":\"NZD\",\"name\":\"Real Brasileiro\\/D\\u00f3lar Neozeland\\u00eas\",\"high\":\"0.3296\",\"low\":\"0.3268\",\"pctChange\":\"0.36\",\"bid\":\"0.3282\",\"ask\":\"0.3286\",\"create_date\":\"2023-10-04 01:36:55\"},\"8\":{\"code\":\"BRL\",\"codein\":\"ZAR\",\"name\":\"Real Brasileiro\\/Rand Sul-Africano\",\"high\":\"3.7497\",\"low\":\"3.7332\",\"pctChange\":\"0.11\",\"bid\":\"3.7412\",\"ask\":\"3.7454\",\"create_date\":\"2023-10-04 01:36:55\"},\"9\":{\"code\":\"BRL\",\"codein\":\"RUB\",\"name\":\"Real Brasileiro\\/Rublo Russo\",\"high\":\"19.55\",\"low\":\"19.17\",\"pctChange\":\"0.35\",\"bid\":\"19.23\",\"ask\":\"19.24\",\"create_date\":\"2023-10-04 01:36:57\"},\"10\":{\"code\":\"BRL\",\"codein\":\"CNY\",\"name\":\"Real Brasileiro\\/Yuan Chin\\u00eas\",\"high\":\"1.4131\",\"low\":\"1.4127\",\"pctChange\":\"0.05\",\"bid\":\"1.4127\",\"ask\":\"1.4131\",\"create_date\":\"2023-10-03 19:30:03\"},\"11\":{\"code\":\"USD\",\"codein\":\"JPY\",\"name\":\"D\\u00f3lar Americano\\/Iene Japon\\u00eas\",\"high\":\"149.32\",\"low\":\"148.97\",\"pctChange\":\"0.17\",\"bid\":\"149.27\",\"ask\":\"149.28\",\"create_date\":\"2023-10-04 01:36:56\"},\"12\":{\"code\":\"USD\",\"codein\":\"BRL\",\"name\":\"D\\u00f3lar Americano\\/Real Brasileiro\",\"high\":\"5.1677\",\"low\":\"5.1668\",\"pctChange\":\"0.02\",\"bid\":\"5.1672\",\"ask\":\"5.1682\",\"create_date\":\"2023-10-03 19:30:03\"},\"13\":{\"code\":\"USD\",\"codein\":\"AUD\",\"name\":\"D\\u00f3lar Americano\\/D\\u00f3lar Australiano\",\"high\":\"1.5908\",\"low\":\"1.5836\",\"pctChange\":\"-0.04\",\"bid\":\"1.5862\",\"ask\":\"1.5863\",\"create_date\":\"2023-10-04 01:36:38\"},\"14\":{\"code\":\"USD\",\"codein\":\"ARS\",\"name\":\"D\\u00f3lar Americano\\/Peso Argentino\",\"high\":\"350.1572\",\"low\":\"349.8913\",\"pctChange\":\"0\",\"bid\":\"350.0317\",\"ask\":\"350.0417\",\"create_date\":\"2023-10-04 01:36:38\"},\"15\":{\"code\":\"USD\",\"codein\":\"CAD\",\"name\":\"D\\u00f3lar Americano\\/D\\u00f3lar Canadense\",\"high\":\"1.372\",\"low\":\"1.3699\",\"pctChange\":\"0\",\"bid\":\"1.3705\",\"ask\":\"1.371\",\"create_date\":\"2023-10-04 01:36:53\"},\"16\":{\"code\":\"USD\",\"codein\":\"EUR\",\"name\":\"D\\u00f3lar Americano\\/Euro\",\"high\":\"0.9563\",\"low\":\"0.9546\",\"pctChange\":\"0.02\",\"bid\":\"0.9556\",\"ask\":\"0.9556\",\"create_date\":\"2023-10-04 01:36:39\"},\"17\":{\"code\":\"USD\",\"codein\":\"GBP\",\"name\":\"D\\u00f3lar Americano\\/Libra Esterlina\",\"high\":\"0.8291\",\"low\":\"0.8275\",\"pctChange\":\"0.06\",\"bid\":\"0.8285\",\"ask\":\"0.8286\",\"create_date\":\"2023-10-04 01:36:39\"},\"18\":{\"code\":\"USD\",\"codein\":\"NZD\",\"name\":\"D\\u00f3lar Americano\\/D\\u00f3lar Neozeland\\u00eas\",\"high\":\"1.7031\",\"low\":\"1.689\",\"pctChange\":\"0.3\",\"bid\":\"1.6973\",\"ask\":\"1.6976\",\"create_date\":\"2023-10-04 01:36:28\"},\"19\":{\"code\":\"USD\",\"codein\":\"ZAR\",\"name\":\"D\\u00f3lar Americano\\/Rand Sul-Africano\",\"high\":\"19.3783\",\"low\":\"19.2918\",\"pctChange\":\"0.07\",\"bid\":\"19.3337\",\"ask\":\"19.3552\",\"create_date\":\"2023-10-04 01:36:59\"},\"20\":{\"code\":\"USD\",\"codein\":\"RUB\",\"name\":\"D\\u00f3lar Americano\\/Rublo Russo\",\"high\":\"101\",\"low\":\"99.085\",\"pctChange\":\"0.23\",\"bid\":\"99.37\",\"ask\":\"99.44\",\"create_date\":\"2023-10-04 01:36:32\"},\"21\":{\"code\":\"USD\",\"codein\":\"CNY\",\"name\":\"D\\u00f3lar Americano\\/Yuan Chin\\u00eas\",\"high\":\"7.3015\",\"low\":\"7.3015\",\"pctChange\":\"0\",\"bid\":\"7.301\",\"ask\":\"7.302\",\"create_date\":\"2023-10-03 18:00:03\"},\"22\":{\"code\":\"EUR\",\"codein\":\"JPY\",\"name\":\"Euro\\/Iene Japon\\u00eas\",\"high\":\"156.27\",\"low\":\"155.91\",\"pctChange\":\"0.15\",\"bid\":\"156.2\",\"ask\":\"156.22\",\"create_date\":\"2023-10-04 01:36:56\"},\"23\":{\"code\":\"EUR\",\"codein\":\"BRL\",\"name\":\"Euro\\/Real Brasileiro\",\"high\":\"5.399\",\"low\":\"5.3047\",\"pctChange\":\"-1.75\",\"bid\":\"5.2797\",\"ask\":\"5.3297\",\"create_date\":\"2023-10-04 01:36:26\"},\"24\":{\"code\":\"EUR\",\"codein\":\"AUD\",\"name\":\"Euro\\/D\\u00f3lar Australiano\",\"high\":\"1.6643\",\"low\":\"1.6585\",\"pctChange\":\"-0.05\",\"bid\":\"1.6597\",\"ask\":\"1.66\",\"create_date\":\"2023-10-04 01:36:58\"},\"25\":{\"code\":\"EUR\",\"codein\":\"ARS\",\"name\":\"Euro\\/Peso Argentino\",\"high\":\"366.6634\",\"low\":\"366.0334\",\"pctChange\":\"-0.03\",\"bid\":\"366.2564\",\"ask\":\"366.2654\",\"create_date\":\"2023-10-04 01:36:24\"},\"26\":{\"code\":\"EUR\",\"codein\":\"CAD\",\"name\":\"Euro\\/D\\u00f3lar Canadense\",\"high\":\"1.4358\",\"low\":\"1.4342\",\"pctChange\":\"-0.03\",\"bid\":\"1.4341\",\"ask\":\"1.4345\",\"create_date\":\"2023-10-04 01:36:58\"},\"27\":{\"code\":\"EUR\",\"codein\":\"USD\",\"name\":\"Euro\\/D\\u00f3lar Americano\",\"high\":\"1.0476\",\"low\":\"1.0457\",\"pctChange\":\"0\",\"bid\":\"1.0464\",\"ask\":\"1.0466\",\"create_date\":\"2023-10-04 01:36:53\"},\"28\":{\"code\":\"EUR\",\"codein\":\"GBP\",\"name\":\"Euro\\/Libra Esterlina\",\"high\":\"0.8675\",\"low\":\"0.8661\",\"pctChange\":\"0.03\",\"bid\":\"0.867\",\"ask\":\"0.8671\",\"create_date\":\"2023-10-04 01:36:55\"},\"29\":{\"code\":\"EUR\",\"codein\":\"NZD\",\"name\":\"Euro\\/D\\u00f3lar Neozeland\\u00eas\",\"high\":\"1.7823\",\"low\":\"1.7683\",\"pctChange\":\"0.26\",\"bid\":\"1.7756\",\"ask\":\"1.7763\",\"create_date\":\"2023-10-04 01:36:55\"},\"30\":{\"code\":\"EUR\",\"codein\":\"ZAR\",\"name\":\"Euro\\/Rand Sul-Africano\",\"high\":\"20.2702\",\"low\":\"20.1908\",\"pctChange\":\"0\",\"bid\":\"20.2344\",\"ask\":\"20.2515\",\"create_date\":\"2023-10-04 01:36:56\"},\"31\":{\"code\":\"EUR\",\"codein\":\"RUB\",\"name\":\"Euro\\/Rublo Russo\",\"high\":\"104.335\",\"low\":\"104.16\",\"pctChange\":\"0.17\",\"bid\":\"104.335\",\"ask\":\"104.335\",\"create_date\":\"2023-10-04 01:36:53\"},\"32\":{\"code\":\"EUR\",\"codein\":\"CNY\",\"name\":\"Euro\\/Yuan Chin\\u00eas\",\"high\":\"7.6491\",\"low\":\"7.6352\",\"pctChange\":\"0.01\",\"bid\":\"7.6398\",\"ask\":\"7.6423\",\"create_date\":\"2023-10-04 01:36:54\"}}")
  const [lista_moedas, setLista] = useState(a)
  const [code, setCode] = useState('')
 
  const [valorTroca, setValorTroca] = useState([])
  const [inputV, SetInputV] = useState('')

  const [resultado, setResultado] = useState("")
  // const {Dados} = useContext(DadosContext)
  
  // useEffect(()=>{
  //   const gab = {'Real': 'BRL', 'Dolar': "USD", 'Euro': 'EUR'}
  //   setCode(gab[Dados])
  //   console.log(code)
  // })

  
 

  // url https://apisd-production.up.railway.app/api/lista
  useEffect(() => {
    
    fetch('http://127.0.0.1:5000/api/lista')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao enviar dados');
        }
        return response.json();
      })
      .then((data) => {
        
        setLista(JSON.parse(data));
        
      })
      .catch((error) => {
        console.error('Erro durante o envio de dados:', error);

      });
  }, []);

  // functions

  const handleTable = (e) => {
    // Acesse o elemento da linha que foi clicado
  const row = e.currentTarget;
  
  // Use métodos DOM para acessar os valores das células da linha
  const cells = row.getElementsByTagName('td');

  // Agora você pode acessar os valores das células individualmente
  const name = cells[0].innerText;
  const bid = cells[1].innerText;
  const ask = cells[2].innerText;
  
  // Faça o que quiser com esses valores
  setValorTroca([name, bid, ask])
};
const handleResult = (e) => {
  //e.preventDefault()
  setResultado(inputV*valorTroca[2])
  console.log(resultado)
}
  return (
    <div id='Table-moedas'
    >

      <table>
        <thead>
          <tr>
            <th>Moeda</th>
            <th>Compra</th>
            <th>Venda</th>
            <th>Variação</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>

            {Object.keys(lista_moedas).length > 2 && (
            Object.values(lista_moedas).map((item, i) => (
              <tr key={i} onClick={handleTable}>
                <td>{item.name}</td>
                <td>{item.bid}</td>
                <td>{item.ask}</td>
                <td className={item.pctChange < 0 ? 'red' : 'green'}>{item.pctChange}</td>
                <td>{item.create_date}</td>
              </tr>
            ))

          )}  


        </tbody>

      </table>
      <div id='lado_table'> 
          <div id='tela-simulacao'>
            <p className='titulo-cota'>{valorTroca.length>0? valorTroca[0] :'Clique na tabela para poder simular.'}</p>
            <form onSubmit={handleResult} className={valorTroca.length < 1 ? 'formDefault': undefined}>
                <p>Venda: {valorTroca.length>0? valorTroca[2] : ''}</p>
                
                <input type="number" placeholder={valorTroca.length > 0 ? valorTroca[0].split('/')[0] : undefined} 
                value={inputV}
                onChange={(e)=> SetInputV(e.target.value)}/>
                <input type="submit" value="enviar" />
                
            </form>
            <p class="resultado">{resultado>0? ` Em ${valorTroca[0].split('/')[1]}, ficou: ${resultado}`: undefined}</p>
          </div>
          <div id='nhoinc'>
            <img src="./static/pigzito.png" alt="porquinho" className='pigzito1'/>
          </div>
          <div className='soon'>
              <h1>Em breve...</h1>
          </div>
      </div>
    </div>
  )
}

export default Table