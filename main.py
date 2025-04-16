from flask import Flask, render_template, request, jsonify

from pymongo import MongoClient
client = MongoClient()
db = client["pomodorodb"]
sessionlengths = db["sessionlengths"]

sessionlengths.update_one({'task_name': "General"},{"$set":{'task_name': "General",
    'pomodoro_length': '25',    
    'short_break_length': '5',
    'long_break_length': '15',
    'long_break_count':'4'}},upsert=True)

app = Flask(__name__)

@app.route('/')
def main_func():
    return render_template("index.html")

@app.route('/loadTasks')
def load_tasks():
    task = sessionlengths.find({}).to_list()
    task_ids = [{'_id':str(x["_id"]), 'task_name': x['task_name'], 'pomodoro_length':x["pomodoro_length"], 'short_break_length': x['short_break_length'], 'long_break_length': x['long_break_length'], 'long_break_count': x['long_break_count']} for x in task]
    return jsonify(task_ids)

@app.route('/loadConfig')
def load_config():
    print(f"Data from database: {jsonify(sessionlengths.find_one({'task_name': "General"}, {'_id':0}))}")
    return sessionlengths.find_one({},{'_id':0})

@app.route('/savesettings', methods=['POST'])
def save_task_settings():
    output = request.get_json()
    sessionlengths.update_one({'task_name': output.get("task_name")}, {"$set":{'task_name': output.get("task_name"), 'pomodoro_length': output.get("pomodoro_length"), 'short_break_length': output.get("short_break_length"), 'long_break_length': output.get("long_break_length"), 'long_break_count': output.get("long_break_count") }},upsert=True)
    x = sessionlengths.find_one({"task_name":output.get("task_name")}, {'_id':1})["_id"]
    return jsonify(str(x))

if __name__ == '__main__':
    app.run(debug=True)