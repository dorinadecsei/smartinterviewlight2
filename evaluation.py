def evaluate_response(metadata: dict) -> dict:
    duration = metadata.get("duration", 0)
    eye_contact = metadata.get("eyeContact", False)

    if duration < 10:
        score = 3
        feedback = "Antwort war zu kurz. Bitte ausführlicher antworten."
    elif 10 <= duration <= 60:
        score = 7
        feedback = "Gute Antwortlänge. Klar und präzise."
    else:
        score = 5
        feedback = "Antwort war zu lang. Versuchen Sie, prägnanter zu sein."

    if eye_contact:
        score += 2
        feedback += " Positiv: guter Blickkontakt!"

    score = min(score, 10)
    return {"score": score, "feedbackText": feedback}
