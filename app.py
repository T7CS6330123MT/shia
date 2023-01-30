from flask import Flask
app = Flask(__name__)
@app.route("/")
def hello():
    return "Hello, World!"
if __name__ == "__main__":
    app.run("localhost", 6969)

#https://www.makeuseof.com/tag/python-javascript-communicate-json/
#https://www.quora.com/How-can-I-integrate-a-Python-backend-into-a-JavaScript-frontend
#https://tms-dev-blog.com/python-backend-with-javascript-frontend-how-to/