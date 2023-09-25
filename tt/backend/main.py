from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("index.html")

#aqui recebe moedas comentario muito foda okay?
@app.route('/api/rota', methods=['POST'])
def receber_post():
    data = request.json 
    resposta = {"mensagem": "Solicitação POST recebida com sucesso", "dados": data}
    #funçao pra converçao (sem numero)
    print(data['moeda1'], data['moeda2'])
    return jsonify(resposta)

if __name__ == "__main__":
    app.run(debug=True)