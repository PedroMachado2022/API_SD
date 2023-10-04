import React, { useState, useEffect, useContext } from 'react'
import "./Table.css"
import { DadosContext } from './DadosContext'

const Table = () => {
  const [lista_moedas, setLista] = useState({})
  const {Dados} = useContext(DadosContext)
  
  console.log(Dados)
 

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
            Object.values(lista_moedas).map((item) => (
              <tr key={item.code}>
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
      
    </div>
  )
}

export default Table