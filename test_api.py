import json
from app import app

def test_evaluate_api():
    client = app.test_client()
    response = client.post("/evaluate",
                           data=json.dumps({"duration": 20, "eyeContact": True}),
                           content_type="application/json")
    assert response.status_code == 200
    data = response.get_json()
    assert "score" in data
    assert "feedbackText" in data
