from evaluation import evaluate_response

def test_short_answer():
    result = evaluate_response({"duration": 5, "eyeContact": False})
    assert result["score"] == 3
    assert "zu kurz" in result["feedbackText"]

def test_good_answer_with_eye_contact():
    result = evaluate_response({"duration": 30, "eyeContact": True})
    assert result["score"] == 9
    assert "Blickkontakt" in result["feedbackText"]
