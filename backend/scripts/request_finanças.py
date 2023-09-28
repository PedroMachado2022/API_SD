import requests
import pandas as pd

# Defina as URLs para cada ação
urls = [
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=ITUB3.SAO&apikey=KT76MWEQFJZSAT6Z",
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOOG.SAO&apikey=KT76MWEQFJZSAT6Z",
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=META.SAO&apikey=KT76MWEQFJZSAT6Z",
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM.SAO&apikey=KT76MWEQFJZSAT6Z",
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=BBAS3.SAO&apikey=KT76MWEQFJZSAT6Z"
]

query_final_list = ["ITUB3.SAO", "GOOG", "META", "IBM", "BBAS3.SAO"]

# Inicialize uma lista vazia para armazenar os dados
all_data = []

for url in urls:
    response = requests.get(url)
    print(f"Requisição: {url} - Resposta: {response}")

    if response.status_code == 200:
        data = response.json()
        print(f"Requisição: {url} - FOI!\n")
        print(data)
        
        
        if "Time Series (Daily)" in data:
            time_series = data["Time Series (Daily)"]
            symbol = data["Meta Data"]["2. Symbol"]
            
           
            last_refreshed_date = data["Meta Data"]["3. Last Refreshed"]
            
            
            if last_refreshed_date in time_series:
                values = time_series[last_refreshed_date]
                close_price = float(values.get("4. close", 0))
                high_price = float(values.get("2. high", 0))
                low_price = float(values.get("3. low", 0))

                all_data.append({
                    "Ação": symbol,
                    "Data": last_refreshed_date,
                    "Fechamento": close_price,
                    "Maior Preço": high_price,
                    "Menor Preço": low_price
                })

            print(f" Testando a variável:{last_refreshed_date}")

df = pd.DataFrame(all_data)
print(df)