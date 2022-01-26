from flask_app import app
from flask import render_template,request,redirect

@app.route("/")
def create():
    return render_template("home.html")
