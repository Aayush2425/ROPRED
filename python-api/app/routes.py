from flask import request, jsonify
from app import app
from app import util
import traceback
@app.route('/text', methods=['POST'])
def home():
    try:
        data = request.get_json()
        text = data.get('text')
        print(text)
        # Process the text using somefun
        result = util.get_res_from_gem(user_input=text, type='text', prompt=util.prompt_text)
        return jsonify(result)
    except Exception as e:
        print(f"Error: {e}")
        traceback.print_exc()
        return jsonify({"error": "Internal Server Error"}), 500

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        text = data.get('text')
        result = util.get_res_from_gem(user_input=text, type='chat', prompt="chat with me")
        return jsonify(result)
    except Exception as e:
        print(f"Error: {e}")
        traceback.print_exc()
        return jsonify({"error": "Internal Server Error"}), 500

@app.route('/image', methods=['POST'])
def image():
    # Placeholder for image processing route
    return jsonify({"message": "Image route not implemented yet"})

@app.route('/about')
def about():
    return "This is the About page."
