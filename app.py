from flask import Flask, render_template, request, jsonify
from request_BackendAPI import requestAPI
from request_finanças import return_request

app = Flask(__name__)
@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route('/api/rota', methods=['POST', 'GET'])
def receber_post():
    # Recebendo dados do FrontEnd
    data = request.json

    # Chama a função que cria a query para o request
    queryGenerator_front(data)

    # Retorna os dados para o front end (Json com os dados que iremos utilizar para mostrar)
    response_data = queryGenerator_front(data)   
    return jsonify(response_data)  

"""
@app.route('/api/lista', methods=['POST', 'GET'])
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
"""


#@app.route('/api/lista-bolsa', methods=['POST', 'GET'])
#def envia_financas():
    #pass

#def arq_financas():
    #return_request()

def queryGenerator_front(data):
    # Dados de entrada
    data_json = data

    # Moeda a ser comparada com as demais
    main_coin = data_json['moeda1']

    # Lista de moedas a ser comparada 
    comparate_coins = [val for chave, val in data_json.items()][1:]
    
    # Chama um outro scrip com a função "RequestAPI", que recebe a requisição do Frontend e faz a requisição para a API 
    a = requestAPI(main_coin, comparate_coins)
    print(a)
   
if __name__ == "__main__":
    app.run(debug=True)

