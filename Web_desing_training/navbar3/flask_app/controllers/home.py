from flask_app import app
from flask import render_template


@app.route("/")
def hoem():
    return render_template("home.html")