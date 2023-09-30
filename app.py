from flask import Flask, render_template, request, jsonify
from request_BackendAPI import requestAPI

app = Flask(__name__)
@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route('/api/rota', methods=['POST', 'GET'])
def receber_post():
    data = request.json 
    gab = {"Real": "BRL", "Dolar": "USD", "BitCoin": "BTC", "Peso(ARG)": "ARS", "Dolar(CAN)": "CAD", "Euro": "EUR", "Libra(BGB)": "GBP", "Dogcoin": "DOGE", "Ethereum": "ETH", "Rublo": "RUB", "Yuan": "CNY", "Iene": "JPY"}

    data['moeda1'] = gab[data['moeda1']]
    volta_moeda2 = []
    for i in data['moeda2']:
        volta_moeda2.append(gab[i])
    data['moeda2']= volta_moeda2

    queryGenerator_front(data)
    response_data = queryGenerator_front(data)   
    return jsonify(response_data)  


@app.route('/api/lista', methods=['POST', 'GET'])
def enviar_lista():
    response_data = [{'Moeda': 'Real', 'compra': 5.05, 'vender': 5.01, 'data':'09/30'}, {'Moeda': 'Real', 'compra': 5.05, 'vender': 5.01, 'data':'09/30'}]
    print(request.json)
    print(response_data)
    return jsonify(response_data) 


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
    return a
   
if __name__ == "__main__":
    app.run(debug=True)

