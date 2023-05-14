from flask import Flask, Response, request, jsonify
from flask_cors import CORS

# From the model
# from chat import get_response

app = Flask(__name__)
CORS(app)

@app.post("/predict")
def predict():
    json = request.get_json()
    text = json.get("message")
    loggedIn = json.get("isLoggedIn")
    if(loggedIn == "true"):
        # This method from model should be called
        # response = get_response(text)
        # message = {"message" : response}
        # return jsonify(message), 202
        
        # For testing
        message = {"answer" : "hi there this is the message"}
        return jsonify(message), 202
    else:   
        message = {"answer" : "Please log in" }
        return jsonify(message), 401

# handle invalid URLS
@app.errorhandler(404)
def page_not_found(e):
    return jsonify({"message" : "Invalid URL, page Not found"}), 404

@app.errorhandler(405)
def method_not_allowed(e): 
    return jsonify({"message" : "This method is not allowed here"}), 405

# DEBUG
if __name__ == "__main__":
    app.run(debug=True)