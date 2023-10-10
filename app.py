from flask import Flask, render_template, request, jsonify
from request_BackendAPI import requestAPI
from request_finanças import return_request
from ip_tempo import request_tempo
import json
import time
import schedule
from threading import Thread
import requests

app = Flask(__name__)

tabela = ''
bolsa = ''

@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route('/api/lista', methods=['POST', "GET"])
def enviar_lista():
    return jsonify(tabela)  


@app.route('/api/lista-bolsa', methods=['POST', 'GET'])
def envia_financas():
    return jsonify(bolsa)



def arq_financas():
     return_request()


def arq_financas_periodicamente():
    while True:
        schedule.run_pending()
        time.sleep(1)

@app.route('/obter_ip', methods=['POST', 'GET'])
def get_public_ip():
    try:
        response = request.get_json()
        print(response)
        public_ip = response['ip']
        

        a = request_tempo(public_ip)

        return jsonify(f'Dadinhos: {a}')

    except Exception as e:
        return jsonify({'error': str(e)}), 500



def atualizar_arquivo_periodicamente():
    global tabela
    while True:
        tabela = requestAPI()
        print('tabelafoi')
        time.sleep(43200)

def atualizar_arquivo_periodicamente2():
    global bolsa
    while True:
        bolsa = return_request()
        print(bolsa)
        time.sleep(43200)


thread = Thread(target=atualizar_arquivo_periodicamente)
thread.daemon = True
thread.start()

thread2 = Thread(target=atualizar_arquivo_periodicamente2)
thread2.daemon = True
thread2.start()

if __name__ == "__main__":
    app.run(debug=True)

