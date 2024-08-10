# app/routes.py

from flask import request, jsonify
from app import app
from app import util


@app.route('/text', methods=['POST'])
def home():
    data = request.get_json()
    text = data.get('text')
    
    # Process the text using somefun
    result = util.get_res_from_gem(user_input=text,type='text',prompt=util.prompt_text)
    
    # Return the result as JSON
    return jsonify(result)


@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    text = data.get('text')
    
    # Process the text using somefun
    result = util.get_res_from_gem(user_input=text,type='chat',prompt="chat with me")
    
    # Return the result as JSON
    return jsonify(result)

@app.route('/image', methods=['POST'])
# def image():
    

@app.route('/about')
def about():
    return "This is the About page."

