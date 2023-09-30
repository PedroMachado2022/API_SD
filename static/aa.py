
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

