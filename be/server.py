from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os


genai.configure(api_key="AIzaSyAF_-Wrt5MYl4cDcZ_T6I1JKNS7feUzNTU")

app = Flask(__name__)

# CORS setup for secure cross-origin access
CORS(app, resources={
     r"/*": {"origins": ["http://localhost:5173", "http://localhost:5174"]}})


@app.after_request
def add_cors_headers(response):
    allowed_origin = request.headers.get("Origin", "http://localhost:5173")
    response.headers["Access-Control-Allow-Origin"] = allowed_origin
    response.headers["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS, DELETE, PUT"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    response.headers["Access-Control-Allow-Credentials"] = "true"
    return response


# for model in genai.list_models():
#     print(model.name)


@app.route("/chat/", methods=["POST"])
def chat_with_gemini():
    try:
        data = request.get_json()
        if not data or "user_input" not in data or "language" not in data:
            return jsonify({"error": "Invalid request: Missing 'user_input' or 'language'"}), 400

        user_query = data["user_input"].strip()
        # Get selected language
        selected_language = data["language"].strip().lower()

        if not user_query:
            return jsonify({"error": "Empty input received"}), 400

        # Updated Persona with Asterisks (*) & Language Specification
        prompt = f"""
        You are Dr. Ai Hippocrates, the world's best doctor with extensive medical knowledge.
        Provide clear, simple, and practical medical advice with professional accuracy.
        Always do not include asterisks (*) in your response.
        
        If asked about a disease, explain it briefly, list possible causes, symptoms, and suggest medications (with tablet names and dosages).
        Provide relevant health tips related to the condition.
        
        Your response should not exceed 100 words and must be in the selected language: {selected_language}.
        Ignore unrelated topics.

        User Query: {user_query}
        """

        model = genai.GenerativeModel("models/gemini-2.0-flash")
        response = model.generate_content(prompt)

        if not response.text:
            return jsonify({"error": "Failed to generate a response"}), 500

        return jsonify({
            "response": response.text.strip(),
            "language": selected_language
        })

    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": f"Internal Server Error: {str(e)}"}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
