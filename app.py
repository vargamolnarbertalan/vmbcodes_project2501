from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify(message="Welcome to the Flask API Server!")

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify(data={"key": "value"})

if __name__ == '__main__':
    app.run(debug=True)
