from flask import Flask, render_template, request, jsonify

from pymongo import MongoClient
client = MongoClient("localhost", 27017)
db = client.pomodorodb
sessionlengths = db.sessionlengths

sessionlengths.update_one({},{"$set":{'id': 1,
    'pomodoro_length': 30,    
    'short_break_length': 5,
    'long_break_length': 30,
    'long_break_count':5}},upsert=True)

app = Flask(__name__)

@app.route('/')
def main_func():
    return render_template("index.html")

@app.route('/loadConfig')
def load_config():
    print(f"Data from database: {jsonify(sessionlengths.find_one({}, {'_id':0}))}")
    return jsonify(sessionlengths.find_one({},{'_id':0}))

@app.route('/settings', methods=['POST'])
def modify_pomodoro_config():
    output = request.get_json()
    sessionlengths.update_one({},{"$set":{'pomodoro_length': output.get("pomodoro_length"), 'short_break_length': output.get("short_break_length"), 'long_break_length': output.get("long_break_length"), 'long_break_count': output.get("long_break_count") }})
    print(f"This is the new data in backend: {sessionlengths.find_one({},{'_id':0})}\n")
    return sessionlengths.find_one({},{'_id':0})

if __name__ == '__main__':
    app.run(debug=True)