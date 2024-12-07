from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')  # Виведення головної сторінки

@app.route('/gameplay')
def gameplay():
    return render_template('gameplay.html')

@app.route('/creatures')
def creatures():
    return render_template('creatures.html')

if __name__ == "__main__":
    app.run(debug=True)