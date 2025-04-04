from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

pomodoro_config = {
    'pomodoro_length': 65,    
    'short_break_length': 35,
    'long_break_length': 95,
    'long_break_count':15}


@app.route('/')
def main_func():
    return render_template("index.html")

@app.route('/check')
def sub_func():
    return jsonify(pomodoro_config)

if __name__ == '__main__':
    app.run(debug=True)