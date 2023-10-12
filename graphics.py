import requests
import pandas as pd

def obter_historico():
    response = requests.get('https://economia.awesomeapi.com.br/json/daily/USD-BRL/15')
    
    df = pd.DataFrame(response.json())
    valores_de_venda = df['ask'].tolist()  
    valores_de_venda = valores_de_venda[::-1]

   
    resultado = {
        'name': response.json()[0]['name'],
        'historico': valores_de_venda
    }
    
    return resultado


