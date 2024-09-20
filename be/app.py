from flask import Flask, jsonify
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/data', methods=['GET'])
def get_dados():
    
    with open('data.json', 'r') as f:
        dados = json.load(f)
    return jsonify(dados)  # Retorna o JSON como resposta da API

if __name__ == '__main__':
    app.run(debug=True)
