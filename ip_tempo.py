import requests


def request_tempo(ip):
    
    response = requests.get(f'https://api.ip2location.io/?key=91B1F61713031B2D4CFB3198E6B7885D&ip={ip}')
    
    data = response.json()
    
    for key, data in data.items():
        print(f"{key}: {data}\n")
    
    


request_tempo('192.168.0.2')

