import requests, pandas as pd

entrada = input("DIGITE QUAL SEU DESEJO: ")


url = f"https://economia.awesomeapi.com.br/last/{entrada}"
url2 = "https://economia.awesomeapi.com.br/json/daily/USD-BRL/15"
response = requests.get(url)

entrada2 = input("DIGITE QUAL SEU DESEJO: ")

if response.status_code == 200:

    data = response.json()
    df = pd.DataFrame.from_dict(data, orient='index')

    btc_data = df.loc[f'{entrada2}']

    print(btc_data)
    btc_dict = btc_data.to_dict()

    for key, value in btc_dict.items():
       print(f"Chave: {key}, Valor: {value}")

else:
    print("Falha na solicitação à API. Código de status:", response.status_code)