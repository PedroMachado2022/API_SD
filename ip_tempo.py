import requests


def request_tempo(ip):
    response = requests.get('https://api.ip2location.io/?key=91B1F61713031B2D4CFB3198E6B7885D&ip=2804:14d:4082:8be3:e457:77ec:7069:546d')
    data = response.json()
    print(data)



