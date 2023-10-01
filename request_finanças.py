import requests
import pandas as pd
import time
import json


# Função criada para  resolver o problema de limitação de requests.
def organize_requests(vez):

    l_key = "NSK8UHCQUQZ8OMMW"
    p_key = "KT76MWEQFJZSAT6Z"

    l_key2 = "RQWG7IBE5YLW408I"
    p_key2 = "CZTHQUNRKGPPTM8Z"
    
    l_key3 = "K01WU25XOTPIUE7P"
    p_key3 = "9S80DRE3HSJLDETA"

    l_key3 = "K01WU25XOTPIUE7P"
    p_key3 = "9S80DRE3HSJLDETA"

    # Primeiras 5 URL'S
    if vez == 'first':
        frist_urls = [
                    
                    f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=ITUB3.SAO&apikey={l_key3}",
                    f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOOG&apikey={l_key3}",
                    f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=META&apikey={l_key3}",
                    f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey={l_key3}",
                    f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=BBAS3.SAO&apikey={l_key3}"
                    
                    ]
        return frist_urls
    # Outras 5 URL'S
    else:
        second_urls = [
                    
                    f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&apikey={p_key3}",
                    f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=FDMO34.SAO&apikey={p_key3}",
                    f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=PETR4.SAO&apikey={p_key3}",
                    f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DIS&apikey={p_key3}",
                    f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=VALE&apikey={p_key3}"
                    
                    ]
        return second_urls

# Função criada para realizar os requests de finanças na ALPHAVANTAGE API
def request_finance(vez):
    # Chama a função que retornar as URL'S que serão utilzadas utlizadas no request
    urls = organize_requests(vez)

    # Lista que armazena todos os requests
    all_data = []

    # Percorremos cada um dos URL'S e requisitamos eles para a API
    for url in urls:
        # Requisita para a API com o URL desejado
        response = requests.get(url)
        
        print(f"Requisição: {url} - Resposta: {response}")

        # Verificamos se a API respondeu corretamente com os dados
        if response.status_code == 200:
            # Pegamos o json enviado pela API
            data = response.json()
            print(f"Esta vazio seu burro do caralho {data}")

            print(f"Requisição: {url} - FOI!\n")

            # Verificamos se temos dados dentro do Json
            if "Time Series (Daily)" in data:

                # Pegamos os dados "Time Series" (Datas)
                time_series = data["Time Series (Daily)"]

                # Nome da finança
                symbol = data["Meta Data"]["2. Symbol"]
                
                # Pegamos apenas os dados última atualização da API (Por padrão é o dia anterior)
                last_refreshed_date = data["Meta Data"]["3. Last Refreshed"]
                
                # Percorremos pelos dados do dia anterior
                if last_refreshed_date in time_series:
                    # Pegamos o valor de determinada ação
                    values = time_series[last_refreshed_date]
                    
                    #  Pegamos o valor de fechamento da ação
                    close_price = float(values .get("4. close", 0))

                    # Pegamos o maior preço daquela açao no dia
                    high_price = float(values.get("2. high", 0))

                    # Pegamos o menor valor daquela açao no dia
                    low_price = float(values.get("3. low", 0))
                    
                    # Criamos um dicionário tratado de acordo com o que queremos mostar no site.
                    all_data.append({
                        "Ação": symbol,
                        "Data": last_refreshed_date,
                        "Fechamento": close_price,
                        "Maior Preço": high_price,
                        "Menor Preço": low_price
                    })        

        # Apenas uma verificação de erro
        else:
            print(f"Erro na requisição para {url}, status code: {response.status_code}")
    
    # Retornamos o dicionário para utilizar em outro lugar
    return all_data

# Função para salvar em um arquivo JSON
def save_to_json(data, filename):
    with open(filename, 'w') as file:
        json.dump(data, file)

# Função que realiza tudo desse script
def return_request():
    
    # Chama a função dos requests com o valor "frist"
    data_first = request_finance('first')
    print(data_first)
    
    # Da um tempo de 1 minuto antes de realizar o outro request (Necessário para conseguir as 10 ações que queremos utilizar)
    time.sleep(60)
    
     # Chama a função dos requests com o valor "second"
    data_second = request_finance('second')

    # Junta as duas requisições
    all_data = data_first + data_second  

    # Cria o arquivo JSON com os dados das duas requisições
    save_to_json(all_data, 'finance_data.json')

    print("Dados combinados de ambos os conjuntos:")
    print(all_data)

#return_request()