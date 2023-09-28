import requests
import pandas as pd

def request_finance():

    l_key = "NSK8UHCQUQZ8OMMW"
    p_key = "KT76MWEQFJZSAT6Z"

    urls = [
        f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=ITUB3.SAO&apikey={l_key}",
        f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOOG&apikey={l_key}",
        f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=META&apikey={l_key}",
        f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey={l_key}",
        f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=BBAS3.SAO&apikey={l_key}"
    ]

    all_data = []

    for url in urls:
        response = requests.get(url)
        #print(f"Requisição: {url} - Resposta: {response}")

        if response.status_code == 200:
            data = response.json()
            #print(f"Requisição: {url} - FOI!\n")
            #print(data)
            
            
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

                # print(f" Testando a variável:{last_refreshed_date}")

    df = pd.DataFrame(all_data)
    json_data = df.to_json(orient='index')
    #print(json_data)
    return json_data


