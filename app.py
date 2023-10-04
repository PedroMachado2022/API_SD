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

@app.route('/api/lista', methods=['POST', "GET"])
def enviar_lista():
    with open('Cotas_data.json', 'r') as file:
        data = json.load(file)
    
    return jsonify(data)  


@app.route('/api/lista-bolsa', methods=['POST', 'GET'])
def envia_financas():
    with open('finance_data.json', 'r') as file:
        data = json.load(file)
    return jsonify(data)

def arq_financas():
     return_request()

#schedule.every(24).hours.do(arq_financas)

def arq_financas_periodicamente():
    while True:
        schedule.run_pending()
        time.sleep(1)


   
if __name__ == "__main__":
     

    #arq_financas_thread = Thread(target=arq_financas_periodicamente)
    #arq_financas_thread.daemon = True  
    #arq_financas_thread.start()

    app.run(debug=True)

