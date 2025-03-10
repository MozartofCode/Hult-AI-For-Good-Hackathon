# @Author: Bertan Berker
# @Language: Python

from flask import Flask, jsonify
from agents import get_analysis, get_habits, compare_last_week
import os

app = Flask(__name__)

@app.route('/get_analysis', methods=['GET'])
def api_get_analysis():
    result = get_analysis()
    return jsonify(result)
 
@app.route('/get_habits', methods=['GET'])
def api_get_habits():
    result = get_habits()
    return jsonify(result)

@app.route('/compare_weeks', methods=['GET'])
def api_get_weeks():
    result = compare_last_week()
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, port=3000)