
<div style="text-align:center;">
    <img src="static/logo.png" width="350px" style="margin: 0 auto;">
</div>

**Descrição concisa do projeto**

 Esse é um projeto de aplicativo web criado em Flask, uma estrutura de desenvolvimento em Python, que oferece uma interface para acessar informações financeiras, cotações de moedas, ações e dados meteorológicos com base no IP do usuário. Aqui está uma explicação geral do projeto.


## Funcionalidades

Neste projeto, você encontrará as seguintes funcionalidades:

  A aplicacão utiliza treads para atualizar as informaçoes presentes no site.

### 1. Cotações Atualizadas Diariamete
  Os dados de referentes a cotações de algumas moedas é atualizado diariamente
    - A primeira é utilizada para realizar solicitaçoes à uma API de cotaçoes diárias de moedas.
      
### 2. Dados de Ações
  O projeto disponibiliza informações detalhadas sobre ações de empresas, permitindo que os usuários acompanhem os valores de mercado e outras informações relacionadas.
    - A segunda é utilizada para realizar solicitações à uma API de finanças (estamos utilizando 10 ações na aplicação)

### 3. Gráficos Históricos
  Grafico disponibiliza o historico de 15 dias da cotaçoes de Real para Dolar.
    - A terceira é utilizada, também, para solicitar à uma API de cotaçoes, mas com fechamento de 15 dias. (Utilizada para comparar o Dólar com o Real)

### 4. Dados Meteorológicos
Com base no IP do usuário, o aplicativo obtém informações meteorológicas locais, incluindo clima, cidade e temperatura, oferecendo aos usuários uma visão rápida das condições meteorológicas atuais.

## Dependências
  -Python
  -Flask
  -React
  -HTML CSS JS

## Autores
  Liste os autores ou colaboradores do projeto.
    - Pedro Machado Araújo
    - Luiz Gustavo Lopes

## Exemplo de Tela em execução

<div style="text-align:center;" >
    <img src="static/tela.png" width="850" style="margin: 0 auto;">
</div>

<!--  

##.\venv\Scripts\Activate.ps1
##Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

# code (BRL)
# codein (USD)
# name (REAL BRASIELIRO/DOLAR AMERICANO)
# high (VALOR MAIS ALTO ATINGIDO NAS ÚLTIMAS TRANSAÇÕES)
# low (VALOR MAIS ALTO ATINGIDO NAS ÚLTIMAS TRANSAÇOES)
# pctChange (VALOR EM PORCENTAGEM DA VARIAÇÃO EM RELAÇÃO A ÚLTIMA COTAÇAO)
# bid (VALOR DE VENDA NA COTAÇÃO)
# ask (VALOR DE COMPRA NA COTAÇÃO)
# create_date (DATA DA CRIAÇÃO)

# ALPHA KEY KT76MWEQFJZSAT6Z

# NSK8UHCQUQZ8OMMW
# ALPHA KEY NSK8UHCQUQZ8OMMW 
# ALPHA KEY RQWG7IBE5YLW408I EMAIL 2

*** comandos js ***

npm create vite@latest -- criar um novo app
npm install            -- caso não tenha instalado

npm run dev   -rodar apenas o front
npm run build - construir o front obs* apagar a pasta static;
-->
