from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

pomodoro_config = {
    'pomodoro_length': 35,    
    'short_break_length': 5,
    'long_break_length': 15,
    'long_break_count':5}

@app.route('/')
def main_func():
    return render_template("index.html")

@app.route('/loadConfig')
def load_config():
    return jsonify(pomodoro_config)

@app.route('/settings', methods=['POST'])
def modify_pomodoro_config():
    output = request.get_json()
    pomodoro_config['pomodoro_length'] = output.get("pomodoro_length")
    pomodoro_config['short_break_length'] = output.get("short_break_length")
    pomodoro_config['long_break_length'] = output.get("long_break_length")
    pomodoro_config['long_break_count'] = output.get("long_break_count")
    print(f"This is the new data in backend: {pomodoro_config}\n")
    return jsonify(pomodoro_config)

if __name__ == '__main__':
    app.run(debug=True)