def evaluate_response(duration, eye_contact=True):
    if duration < 5:
        score = 3
        feedback = "Antwort war zu kurz."
    elif duration > 60:
        score = 5
        feedback = "Antwort war zu lang."
    else:
        score = 8
        feedback = "Antwortlänge war gut."

    if not eye_contact:
        score -= 1
        feedback += " Versuchen Sie mehr Blickkontakt zu halten."

    return {"score": score, "feedbackText": feedback}
