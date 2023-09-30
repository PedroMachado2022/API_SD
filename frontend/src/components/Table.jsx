import React , {  useState ,useEffect} from 'react'
import "./Table.css"


const Table = () => {
    const [lista_moedas, setLista] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/lista', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify('Real'),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Erro ao enviar dados');
            }
            return response.json();
          })
          .then((data) => {
            console.log(data)
            setLista(data);
          })
          .catch((error) => {
            console.error('Erro durante o envio de dados:', error);

          });
      }, []); 
      
    
  
  return (
    <div id='Table-moedas'
    >
        <button onClick={()=>{console.log(lista_moedas)}}>aqui</button>
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
            {/* {opcao_sele.length>0 && (
                    <ul className="moedas_sele">
                        {opcao_sele.map((op) => (
                            <li key={op} >{op}<span className={op} onClick={handleVoltaLista}>X</span></li>
                        ))}
                    </ul>
                )} */}
                {lista_moedas.length > 0 && (
                    lista_moedas.map((i) => (
                            <tr>
                                <td>{i.Moeda}</td>
                                <td>{i.compra}</td>
                                <td>{i.vender}</td>
                                <td>10%</td>
                                <td>{i.data}</td>
                            </tr>
                    )) 
                )}
                
                
            </tbody>
            
        </table>
        
    </div>
  )
}

export default Table