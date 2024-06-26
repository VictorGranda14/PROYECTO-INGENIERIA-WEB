from flask import Flask, jsonify
from flask_cors import CORS
import threading
import time
import random
app = Flask(__name__)

CORS(app)
sensor_data = {
    'Co': 250,
    'Alcohol': 100,
    'Tolueno': 50,
    'Nh4': 120,
    'Acetona': 30
}
temperature_data = {
    'current': 0,
    'min': 100,
    'max': 0
}
def update_temperature():
    while True:
        new_temp = random.randint(0, 100)
        temperature_data['current'] = new_temp
        if new_temp < temperature_data['min']:
            temperature_data['min'] = new_temp
        if new_temp > temperature_data['max']:
            temperature_data['max'] = new_temp
        time.sleep(2)  # Actualiza cada 2 segundos
# Función para actualizar los valores de los sensores periódicamente
def update_sensor_data():
    while True:
        sensor_data['Co'] = random.randint(50, 200)
        sensor_data['Alcohol'] = random.randint(30, 110)
        sensor_data['Tolueno'] = random.randint(20, 60)
        sensor_data['Nh4'] = random.randint(30, 110)
        sensor_data['Acetona'] = random.randint(5, 40)
        time.sleep(5)  # Actualiza cada 5 segundos

# Iniciar un hilo para actualizar los valores de los sensores
threading.Thread(target=update_sensor_data, daemon=True).start()
threading.Thread(target=update_temperature, daemon=True).start()

@app.route('/')
def index():
    return "API Flask funcionando"
@app.route('/temperature', methods=['GET'])
def get_temperature_value():
    return jsonify(temperature_data)

@app.route('/gas', methods=['GET'])
def get_sensor_data():
    return jsonify(sensor_data)
@app.route('/air_quality', methods=['GET'])
def get_air_quality():
    quality = classify_air_quality(sensor_data)
    return jsonify({'quality': quality, 'combined_index': calculate_combined_air_quality(sensor_data)})

def classify_air_quality(data):
  
    combined_index = calculate_combined_air_quality(data)
    
    if combined_index <= 50:
        return 'sin riesgo'
    elif combined_index <= 100:
        return 'moderado'
    elif combined_index <= 150:
        return 'dañino'
    else:
        return 'muy dañino'

def calculate_combined_air_quality(data):
    return (data['Co'] + data['Alcohol'] + data['Tolueno'] + data['Nh4'] + data['Acetona']) / 5
if __name__ == '__main__':
    app.run(host='localhost', port=5000)
