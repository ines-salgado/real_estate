import json
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/data', methods=['GET'])
def get_dados():
    with open('data.json', mode='r') as files:
        dados = json.load(files)
        # text = files.read()
    return jsonify(dados) 
    # return text

if __name__ == '__main__':
    import os
    debug_mode = os.getenv('FLASK_DEBUG', '0') == '1'
    app.run(debug=debug_mode)
