import google.generativeai as genai
import os
from dotenv import load_dotenv
from PIL import Image

load_dotenv()

api_key = os.getenv('API_KEY')

genai.configure(api_key=api_key)

model = genai.GenerativeModel('gemini-1.5-flash')
chat = model.start_chat(history=[])

prompt_text = "Hi Gemini, I’m interested in learning more about rockets and space exploration. Could you provide an overview of recent advancements in rocket technology, notable space missions, and emerging trends in the field of space exploration? Im also curious about the challenges and future prospects in these areas. Thanks! (if the request ins't related to rocket then give resposne based on context)"



def get_res_from_gem(user_input, type, prompt):
    if type == 'text':
        responsee = model.generate_content(user_input)  # Example API call
        print("API Response:", responsee)
        try:
            return responsee.text  # Or access the relevant part
        except AttributeError:
            return {"error": "Invalid response format"}
        # input_prompt = prompt + user_input
        # response = model.generate_content(input_prompt)
        # return response.text
    # elif type == 'image':
        # img = Image.open('img.png')
        # res = model.generate_content(["write 5 points about this image",img], stream=True)
        # res.resolve()
        # print(res.text)
    # elif type == 'video':
        
    elif type == 'chat':
        res = chat.send_message(user_input, stream=True)
        res.resolve()
        return res.text 
        
        
    