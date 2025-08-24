from flask import Flask, request, jsonify
from flask_cors import CORS
from evaluation import evaluate_response

app = Flask(__name__)
CORS(app)

@app.route("/evaluate", methods=["POST"])
def evaluate():
    data = request.get_json()
    result = evaluate_response(data)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
