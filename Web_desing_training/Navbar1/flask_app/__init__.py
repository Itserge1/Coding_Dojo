from flask import Flask
app = Flask(__name__)
app.secret_key = "keepitsecret"

# if __name__ == "__main__":
#     app.run(debug=True) This part goes into the server