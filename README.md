# 🚀 Rocket Launch Recommendation System

This repository contains a Rocket Launch Recommendation System that uses collaborative filtering and K-Nearest Neighbors (KNN) to suggest the most suitable rocket configurations based on historical data and user inputs. The project aims to provide recommendations for rocket configurations that match specific criteria such as `Rocket Price`, `Payload to LEO`, `Launch Year`, `Operator`, and more.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Project Overview

The Rocket Launch Recommendation System is designed to help engineers and space agencies make data-driven decisions by recommending rocket configurations that are likely to succeed based on similar historical launches. The system leverages machine learning techniques such as KNN for collaborative filtering and cosine similarity to find the closest matches to a given rocket configuration.

## ✨ Features

- **Data Preparation:** Handles categorical variables using Label Encoding and normalizes numerical features.
- **User-Item Matrix:** Constructs a user-item matrix from the prepared data for use in the recommendation system.
- **KNN Model:** Fits a KNN model using cosine similarity to find the nearest neighbors of a given rocket configuration.
- **Customizable Recommendations:** Users can input their desired rocket parameters to receive the most relevant recommendations.
- **Scalability:** The system can be extended with additional features and data points to improve recommendation accuracy.

## 🛠️ Installation

### Prerequisites

- Python 3.7+
- Install required Python packages by running:

```bash
pip install -r requirements.txt
```

### Required Libraries

- `pandas`
- `numpy`
- `scikit-learn`
- `dash` (for the web-based interface if needed)

### To Run

- `frontend -> npm start`
- `python-api -> python run.py`
- `python-api -> python dash_Base.py`


## 🚀 Usage

1. **Data Preparation:**
   - The data is prepared by encoding categorical features and normalizing numerical features using `LabelEncoder` and `StandardScaler`.

2. **Model Training:**
   - The prepared data is used to create a user-item matrix, which is then used to train a KNN model for making recommendations.

3. **Making Recommendations:**
   - Users can input rocket specifications, and the system will return the top recommendations based on historical data.

4. **Example Code:**
   - See the example usage section below to understand how to run the recommendation system.

### Running the Example:

```python
# Example user input
user_input = {
    'Rocket Price': 50, 
    'Payload to LEO': 2000, 
    'Launch Year': 2022, 
    'Operator': 'SpaceX', 
    'Location': 'USA',
    'Successes': 50,
    'Failures': 5,
    # Add other fields as needed
}

recommendations = recommend_for_user(user_input, train_data, item_similarity, indices, label_encoders, scaler, top_n=5)

# Display recommendations
print(f"Top 5 recommendations based on the user input: {recommendations}")
```


## 🛠️ Example

The provided example showcases how to prepare data, train the model, and make recommendations based on a user-provided configuration.

### User Input

```python
user_input = {
    'Rocket Price': 50,
    'Payload to LEO': 2000,
    'Launch Year': 2022,
    'Operator': 'SpaceX',
    'Location': 'USA',
    'Successes': 50,
    'Failures': 5,
}
```

### Output

The system will return the top 5 most similar rocket configurations based on the user's input.


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
