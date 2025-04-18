from flask import Flask, render_template, request, jsonify

from pymongo import MongoClient
from bson import ObjectId
client = MongoClient()
db = client["pomodorodb"]
sessionlengths = db["sessionlengths"]

sessionlengths.update_one({'task_name': "General"},{"$set":{'task_name': "",
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
    tasks = sessionlengths.find({}).to_list()
    tasks_ids = [{'_id':str(x["_id"]), 'task_name': x['task_name'], 'pomodoro_length':x["pomodoro_length"], 'short_break_length': x['short_break_length'], 'long_break_length': x['long_break_length'], 'long_break_count': x['long_break_count']} for x in tasks]
    return jsonify(tasks_ids)

@app.route('/savesettings', methods=['POST'])
def save_task_settings():
    output = request.get_json()
    sessionlengths.update_one({'task_name': output.get("task_name")}, {"$set":{'task_name': output.get("task_name"), 'pomodoro_length': output.get("pomodoro_length"), 'short_break_length': output.get("short_break_length"), 'long_break_length': output.get("long_break_length"), 'long_break_count': output.get("long_break_count") }},upsert=True)
    x = sessionlengths.find_one({"task_name":output.get("task_name")}, {'_id':1})["_id"]
    return jsonify(str(x))

@app.route('/deleteTask', methods=["POST"])
def delete_task():
    output = request.get_json()
    sessionlengths.delete_one({'_id':ObjectId(output["task_id"])})
    return "Okay"

if __name__ == '__main__':
    app.run(debug=True)