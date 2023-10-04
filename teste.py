from flask import Flask, render_template, request, jsonify
from request_BackendAPI import requestAPI
from request_finanças import return_request
import json
import time
import schedule
from threading import Thread



app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("index.html")



@app.route('/api/lista', methods=['POST'])
def enviar_lista():
    
    data = request.json
    #arq_financas()

    gab = {"Real": "BRL", "Dolar": "USD", "Dólar Australiano": "AUD", "Peso(ARG)": "ARS", "Dolar(CAN)": "CAD", "Euro": "EUR", "Libra(BGB)": "GBP", "Dólar Neozelandês": "NZD","Rand Sul-Africano": "ZAR", "Rublo": "RUB", "Yuan": "CNY", "Yen": "JPY"}
    
    print(data)
    main_coin = data = gab[data]
    

    comparate_list = [] 

    for coin, cod in gab.items():
        if cod != main_coin:
            comparate_list.append(cod)
    print("aqui")
    
    return jsonify(queryGenerator_front(main_coin, comparate_list))  


gab = {"Real": "BRL", "Dolar": "USD", "Dólar Australiano": "AUD", "Peso(ARG)": "ARS", "Dolar(CAN)": "CAD", "Euro": "EUR", "Libra(BGB)": "GBP", "Dólar Neozelandês": "NZD","Rand Sul-Africano": "ZAR", "Rublo": "RUB", "Yuan": "CNY", "Yen": "JPY"}

main_coin = 'JPY'

comparate_list = [] 

for coin, cod in gab.items():
    if cod != main_coin:
        comparate_list.append(cod)
print(comparate_list)