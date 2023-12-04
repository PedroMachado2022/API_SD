from flask import Flask, render_template, request, jsonify
from request_BackendAPI import requestAPI
from request_finanças import return_request
from ip_tempo import request_tempo
import time
from threading import Thread
from graphics import obter_historico
from flask_cors import CORS


import db_send
import db_recive

# Aplicativo Flask
app = Flask(__name__)
CORS(app)

# Variável que guarda os dados das cotações. Ex: (Dólar/Real, Euro/Yen)
TABELA = ''

# Variável que guarda os dados das ações. Ex: (ITAÚ, TESLA)
BOLSA = []

# Variável que guarda os dados do hitorico de 15dias da cotação dola/real
GRAFICO = ''

# Rota padrão para renderizar o HTML.
@app.route("/")
def hello_world():
    return render_template("index.html")

# Rota que onde ocorre a comunicação FRONT-END/BACK-END. (Troca de dados sobre as cotações)
@app.route('/api/lista', methods=['POST', "GET"])
def enviar_lista():
    # Rertorna um json com os dados
    return jsonify(TABELA)  

# Rota que onde ocorre a comunicação FRONT-END/BACK-END. (Troca de dados sobre as ações)
@app.route('/api/lista-bolsa', methods=['POST', 'GET'])
def envia_financas():
    # Rertorna um json com os dados
    return jsonify(BOLSA)

# Rota que onde ocorre a comunicação FRONT-END/BACK-END. (Envia dados historicos de cotas)
@app.route('/api/historico', methods=['POST', 'GET'])
def enviar_historico():
    #Retorna json com o historico e o nome
    return jsonify(GRAFICO)

@app.route('/registro', methods=['POST', 'GET'])
def recive_data():
    if request.method == 'POST':
        try:
            # Obtém os dados do corpo da solicitação como JSON
            data = request.json

            # Chama a função send_data e captura a mensagem de retorno
            mensagem_retorno = db_send.send_data(data['name'], data['email'], data['password'])

            if 'Registardo' in mensagem_retorno:
                # Retorna a mensagem de retorno como parte da resposta JSON
                return jsonify({'message': mensagem_retorno}), 200
        except Exception as e:
            # Em caso de erro, retorne uma resposta de erro
            return jsonify({'error': f'Erro ao processar dados: {str(e)}'}), 500

@app.route('/login', methods=['POST', 'GET'])
def confere_login():
    if request.method == 'POST':
        try:
            data = request.json
            resultado_login = db_recive.login(data['email'], data['password'])
            print(resultado_login)

            if "Liberado" in resultado_login:
                print("Login bem-sucedido!")
                return jsonify({'message': resultado_login}), 200
            else:
                print("Login falhou:", resultado_login)
                return jsonify({'message': resultado_login}), 401

        except Exception as e:
            print(f"Erro durante o login: {e}")

    return jsonify({'message': 'Falha no login'}), 401

# Função que chama o Script que faz as requisições para a API das acões.
def arq_financas():
     return_request()

# Rota que onde ocorre a comunicação FRONT-END/BACK-END. (Troca de dados sobre o IP do cliente)
@app.route('/obter_ip', methods=['POST', 'GET'])
def get_public_ip():

        # Recupera o JSON enviado pelo FRONT-END com o IP público do cliente.
        response = request.get_json()
        
        # Acessamos o IP do cliente
        public_ip = response['ip']
        
        # Chamamos o Script que retorna o Clima, Cidade e Temperatura com o IP público do cliente
        a = request_tempo(public_ip)
        
        # Retornamos os dados como um JSON para o FRONT-END
        return jsonify(a)

# Função que atualiza os dados das cotações a cada 12h.
def atualizar_tabela():

    # Definimos a variável "TABELA" como GLOBAL
    global TABELA

    # Looping infinito, acontecendo a cada 12h
    while True:
        # Chamada da função que é responsável pelas requisições de cotações.
        TABELA = requestAPI()
        print('Tabela: ok')
        
        # 12h de delay
        time.sleep(43200)

# Função que atualiza os dados das açoes a cada 12h.
def atualizar_bolsa():

    # Definimos a variável "BOLSA" como GLOBAL
    global BOLSA

    # Looping infinito, acontecendo a cada 12h
    while True:
        # Chamada da função que é responsável pelas requisições de ações.
        BOLSA = return_request()
        print('Bolsa: ok')
        # 12h de delay
        time.sleep(43200)

def Atualiza_Grafico():
    global GRAFICO

     # Looping infinito, acontecendo a cada 12h
    while True:
        # Chamada da função que é responsável pelas requisições de historico de gráficos.
        GRAFICO = obter_historico()
        print('Grafico: ok')
        # 12h de delay
        time.sleep(43200)

# Thread responsável por atualizar as cotações
thread = Thread(target=atualizar_tabela)
thread.daemon = True
thread.start()

# Thread responsável por atualizar as ações
thread2 = Thread(target=atualizar_bolsa)
thread2.daemon = True
thread2.start()

thread3 = Thread(target=Atualiza_Grafico)
thread3.daemon = True
thread3.start()

# Execução do aplicativo
if __name__ == "__main__":
    app.run(debug=False)

