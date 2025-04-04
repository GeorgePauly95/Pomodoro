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

@app.route('/test1', methods=['POST','GET'])
def modify_pomodoro_config1():
    output = request.get_json()
    pomodoro_config['pomodoro_length'] = output.get("pomodoro_length")
    print(f"This is the new data in backend: {pomodoro_config}\n")
    return jsonify(pomodoro_config)
        
@app.route('/test2', methods=['POST'])
def modify_pomodoro_config2():
    output = request.get_json()
    pomodoro_config['short_break_length'] = output.get("short_break_length")
    print(f"This is the new data in backend: {pomodoro_config}\n")
    return jsonify(pomodoro_config)
        
@app.route('/test3', methods=['POST'])
def modify_pomodoro_config3():
    if request.method == 'POST':
        output = request.get_json()
        pomodoro_config['long_break_length'] = output.get("long_break_length")
        print(f"This is the new data in backend: {pomodoro_config}\n")
        return jsonify(pomodoro_config)
        
@app.route('/test4', methods=['POST'])
def modify_pomodoro_config4():
    if request.method == 'POST':
        output = request.get_json()
        pomodoro_config['long_break_count'] = output.get("long_break_count")
        print(f"This is the new data in backend: {pomodoro_config}\n")
        return jsonify(pomodoro_config)
  


if __name__ == '__main__':
    app.run(debug=True)