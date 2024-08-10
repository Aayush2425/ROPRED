from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

# Apply CORS with specific settings for all routes
CORS(app, resources={r"/*": {"origins": "*", "allow_headers": ["Content-Type", "Authorization"]}})

from app import routes
