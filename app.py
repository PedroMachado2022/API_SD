from flask import Flask, render_template, request, jsonify
from request_BackendAPI import requestAPI
from request_finanças import return_request
import json

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route('/api/rota', methods=['POST', 'GET'])
def receber_post():
    data = request.json

    queryGenerator_front(data)
    response_data = queryGenerator_front(data)   
    return jsonify(response_data)  


@app.route('/api/lista', methods=['POST'])
def enviar_lista():
    
    data = request.json
    #arq_financas()

    gab = {"Real": "BRL", "Dolar": "USD", "Dólar Australiano": "AUD", "Peso(ARG)": "ARS", "Dolar(CAN)": "CAD", "Euro": "EUR", "Libra(BGB)": "GBP", "Dólar Neozelandês": "NZD",
            "Rand Sul-Africano": "ZAR", "Rublo": "RUB", "Yuan": "CNY", "Iene": "JPY"}
    
  
    main_coin = data = gab[data]
    

    comparate_list = [] 

    for coin, cod in gab.items():
        if cod != main_coin:
            comparate_list.append(cod)
    
    queryGenerator_front(main_coin, comparate_list)
    response_data = queryGenerator_front(main_coin, comparate_list)   
    return jsonify(response_data)  


@app.route('/api/lista-bolsa', methods=['POST', 'GET'])
def envia_financas():
    with open('finance_data.json', 'r') as file:
        data = json.load(file)

    return jsonify(data)

def arq_financas():
     return_request()


def queryGenerator_front(coin, comparate_coins):
    # Dados de entrada
    
    # Moeda a ser comparada com as demais
    main_coin = coin

    # Chama um outro script com a função "RequestAPI", que recebe a requisição do Frontend e faz a requisição para a API 
    a = requestAPI(main_coin, comparate_coins)
    print(a)
    return a
   
if __name__ == "__main__":
    app.run(debug=True)

