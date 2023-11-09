
<div style="text-align:center;">
    <img src="static/logo.png" width="350px" style="margin: 0 auto;">
</div>

**Descrição concisa do projeto**
<div style="background: #333; padding: 20px; margin: 10px 30px;">
    Esse é um projeto de aplicativo web criado em Flask, uma estrutura de desenvolvimento em Python, que oferece uma interface para acessar informações financeiras, cotações de moedas, ações e dados meteorológicos com base no IP do usuário. Aqui está uma explicação geral do projeto.
</div>
## Funcionalidades

Neste projeto, você encontrará as seguintes funcionalidades:

### 1. Cotações Atualizadas Diariamenes
<div style="background: #333; padding: 20px; margin: 10px 30px;">
    Aplicativo criar uma tread para cada atualização de informaçoes, tem 3 treads uma para atualizaçao de moedas, outra pra açoes e a ultima com intuito de montar um grafico.
</div>
### 2. Dados de Ações
<div style="background: #333; padding: 20px; margin: 10px 30px;">
    O projeto disponibiliza informações detalhadas sobre ações de empresas, permitindo que os usuários acompanhem os valores de mercado e outras informações relacionadas.
</div>

### 3. Gráficos Históricos
<div style="background: #333; padding: 20px; margin: 10px 30px;">
    Grafico disponibiliza o historico de 15 dias da cotaçoes de Real para Dolar.
</div>
### 4. Dados Meteorológicos
<div style="background: #333; padding: 20px; margin: 10px 30px;">
    Com base no IP do usuário, o aplicativo obtém informações meteorológicas locais, incluindo clima, cidade e temperatura, oferecendo aos usuários uma visão rápida das condições meteorológicas atuais.
</div>

## Atualização Automática de Dados
<div style="background: #333; padding: 20px; margin: 10px 30px;">
    O projeto é tem como base manter os dados atualizados automaticamente. Três threads separadas cuidam da atualização de cotações, ações e gráficos em intervalos regulares.
</div>

## Dependências
<div style="background: #333; padding: 20px; margin: 10px 30px;">
    -Python
    -Flask
    -React
    -HTML CSS JS
</div>


## Autores

<div style="background: #333; padding: 20px; margin: 10px 30px;">
    Liste os autores ou colaboradores do projeto.
</div>

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