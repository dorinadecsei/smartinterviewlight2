from flask import Flask, request, jsonify
from flask_cors import CORS
import evaluation

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({"message": "SmartInterview Light Backend läuft. Verwende POST /evaluate."})

@app.route("/evaluate", methods=["POST"])
def evaluate():
    data = request.get_json()
    duration = data.get("duration", 0)
    eye_contact = data.get("eyeContact", True)

    result = evaluation.evaluate_response(duration, eye_contact)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
