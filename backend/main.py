from flask import Flask, render_template, request, jsonify
from scripts.request_BackendAPI import requestAPI

app = Flask(__name__)
@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route('/api/rota', methods=['POST', 'GET'])
def receber_post():
    data = request.json 
    #print(data)
    
    queryGenerator_front(data)
    response_data = queryGenerator_front(data)   
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
   
    

# if __name__ == "__main__":
#     app.run(debug=True)

