import requests

# HG KEY 9af41c80

# Função que faz a requisão para a api weather da HG e retorna o clima de determinado local baseado na LATITUDE, LONGITUDE E IP.
def request_aux(long, lat, ip):

        #Requisição para a API
        response = requests.get(f"https://api.hgbrasil.com/weather?key=9af41c80&lat={lat}&lon={long}&user_ip={ip}")
        
        #Resposta da API
        data = response.json()
        return data

# Função que recebe o IP do cliente e faz uma requisição para uma API que devolve a GEOLOCALIZAÇÃO do mesmo.
def request_tempo(ip):
    
    #Requisição para a API
    response = requests.get(f'https://api.ip2location.io/?key=91B1F61713031B2D4CFB3198E6B7885D&ip={ip}')

    #Resposta da API
    data = response.json()
   
    #Chama da função auxiliar para receber o clima baseado na GEOLOCALIZAÇÃO.
    data_weather = request_aux( data['longitude'],data['latitude'], ip)
    
    
    # Dados que serão utilizados no Front-end (Data, Cidade, Clima e Temperatura)
    data_clean = {'Data': data_weather['results']['date'], 'Cidade': data_weather['results']['city'],
                   'Clima': data_weather['results']['condition_slug'], 'Temperatura': data_weather['results']['temp']}
    
    # Retorno dos dados
    return data_clean
    

print(request_tempo('179.189.130.247'))
