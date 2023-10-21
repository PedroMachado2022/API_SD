import React, { useState, useEffect } from 'react';
import { ResponsiveLine } from '@nivo/line';

import './Graphics.css'




// funçoes de grafico
const Graphics = () => {

  // constates
const [data, setData] = useState({
  name: 'Dólar Americano/Real Brasileiro',
  historico: [
    '4.9373', '4.9709', '4.9877', '5.044', '5.0351', '5.0344', '5.0642', '5.1694',
    '5.1588', '5.1694', '5.1482', '5.1385', '5.054', '5.0503', '5.0477'
  ]
});

  const chartData = [
    {
      id: data.name,
      data: data.historico.map((value, index) => ({
        x: index + 1,  // Usando índice + 1 como valor de x para representar os dias
        y: parseFloat(value)  // Convertendo o valor para um número de ponto flutuante
      })),
    },
  ];

  const customTheme = {
    background: '#0D1117', // Cor de fundo preta
    axis: {
      legend: {
        text: {
          fill: 'white', // Cor do texto das legendas
        },
      },
      ticks: {
        text: {
          fill: 'white', // Cor do texto das escalas
        },
      },
    },
    grid: {
      line: {
        stroke: 'transparent', // Remover as linhas de grade definindo a cor como transparente
      },
    },
  };

  const customColors = ['#999']; // Uma cor de linha personalizada (por exemplo, laranja)


  // funçao a ser chamada sempre que pagina for carregada

  // url https://apisd-production.up.railway.app//api/historico
  // http://127.0.0.1:5000//api/historico
  useEffect(() => {

    fetch('https://apisd-production.up.railway.app//api/historico')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao enviar dados');
        }
        return response.json();
      })
      .then((data) => {

        setData(JSON.parse(data));

      })
      .catch((error) => {
        console.error('Erro durante o envio de dados:', error);

      });
  }, []);

  return (
    <div style={{ height: '100%' }} id='grafico'>
      <h6 id='titulo_gra'>{data.name}</h6> {/* Adicionar um título acima do gráfico */}
      <ResponsiveLine
        data={chartData}
        margin={{ top: 40, right: 10, bottom: 20, left: 60 }} // Aumente o espaço superior para acomodar o título
        xScale={{ type: 'linear' }}
        xFormat={value => value}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisTop={null}
        axisRight={null}
        enableSlices={false}
        axisBottom={null}
        axisLeft={{
          orient: 'left',
          legend: 'Preço de Venda',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        curve="monotoneX"
        enablePoints={false}
        theme={customTheme}
        enableGridX={false} // Remover as linhas de grade no eixo X
        enableGridY={false} // Remover as linhas de grade no eixo Y
        colors={customColors} // Definir a cor da linha do gráfico
      />
    </div>
  );
};

export default Graphics;
