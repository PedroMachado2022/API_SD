import requests
import pandas as pd
import time
import json

def organize_requests(vez):

    l_key = "NSK8UHCQUQZ8OMMW"
    p_key = "KT76MWEQFJZSAT6Z"

    if vez == 'first':
        frist_urls = [
                    
                    f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=ITUB3.SAO&apikey={l_key}",
                    f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOOG&apikey={l_key}",
                    f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=META&apikey={l_key}",
                    f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey={l_key}",
                    f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=BBAS3.SAO&apikey={l_key}"
                    
                    ]
        return frist_urls
    else:
        second_urls = [
                    
                    f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&apikey={p_key}",
                    f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=FDMO34.SAO&apikey={p_key}",
                    f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=PETR4.SAO&apikey={p_key}",
                    f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DIS&apikey={p_key}",
                    f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=VALE&apikey={p_key}"
                    
                    ]
        return second_urls

def request_finance(vez):
    urls = organize_requests(vez)
    all_data = []

    for url in urls:
        response = requests.get(url)
        print(f"Requisição: {url} - Resposta: {response}")

        if response.status_code == 200:
            data = response.json()
            print(f"Requisição: {url} - FOI!\n")
            if "Time Series (Daily)" in data:
                time_series = data["Time Series (Daily)"]
                symbol = data["Meta Data"]["2. Symbol"]
                
                last_refreshed_date = data["Meta Data"]["3. Last Refreshed"]
                
                if last_refreshed_date in time_series:
                    values = time_series[last_refreshed_date]
                    close_price = float(values .get("4. close", 0))
                    high_price = float(values.get("2. high", 0))
                    low_price = float(values.get("3. low", 0))

                    all_data.append({
                        "Ação": symbol,
                        "Data": last_refreshed_date,
                        "Fechamento": close_price,
                        "Maior Preço": high_price,
                        "Menor Preço": low_price
                    })

    return all_data

def save_to_json(data, filename):
    with open(filename, 'w') as file:
        json.dump(data, file)

def load_from_json(filename):
    try:
        with open(filename, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return []

def return_request():
   
    all_data = load_from_json('finance_data.json')

    
    data_first = request_finance('first')
   
    time.sleep(60)
    
    data_second = request_finance('second')

    all_data += data_first + data_second

   
    save_to_json(all_data, 'finance_data.json')

    print("Dados combinados de ambos os conjuntos:")
    print(all_data)

#return_request()