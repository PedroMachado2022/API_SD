import requests

# HG KEY 9af41c80

def request_aux(long, lat, ip):
        response = requests.get(f"https://api.hgbrasil.com/weather?key=9af41c80&{long}&{lat}&user_ip={ip}")
        data = response.json()
        return data

def request_tempo(ip):

    response = requests.get(f'https://api.ip2location.io/?key=91B1F61713031B2D4CFB3198E6B7885D&ip={ip}')
    
    data = response.json()
   
    data_weather = request_aux(data['latitude'], data['longitude'], ip)
    
    #teste = data_weather['results'][0]

    data_clean = {'Data': data_weather['results']['date'], 'Cidade': data_weather['results']['city'],
                   'Clima': data_weather['results']['condition_slug'], 'Temperatura': data_weather['results']['temp']}
    
    return data_clean
    


