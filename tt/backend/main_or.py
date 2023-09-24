import requests
import pandas as pd

# Função para gerar a Query
def query_generator(lista: list[str]) -> list[str]:
    listQuery: list[str] = []
    # Loop para percorrer a lista de moedas a serem comparadas e criar a query com elas
    for i in lista:
        query = f"{moeda1.upper()}-{i}"
        # Comparaçao Ex:. BRL-USD, BRL-EUR (formatadas para string)
        listQuery.append(query)
    return listQuery


## Moeda principal da query
moeda1 = input("DIGITE QUAL SEU DESEJO: ")

## Moeadas a serem comparadas
list_moedas = ['BRL', 'USD', 'EUR']

# Chamada da função que cria a lista BTC-BRL, BTC-USD, BTC-EUR
list_query: list[str] = query_generator(list_moedas)
print(list_query)


# Query pronta para a URL.
queryUrl: str = ",".join(list_query)
print(queryUrl)

# Query para comparação
query_final: str = queryUrl.replace("-","").replace(',', " ")
query_final_list: list[str] = query_final.split()
print(query_final_list)

url = f"https://economia.awesomeapi.com.br/last/{queryUrl}"

#url2 = "https://economia.awesomeapi.com.br/json/daily/USD-BRL/15"

# Requisição para a API
response = requests.get(url)


if response.status_code == 200:
    # Pegando o json resposta da API
    data = response.json()
    # Criaçao do Df através do Json resposta
    df = pd.DataFrame.from_dict(data, orient='index')
    print(df)
    
    dfFinal = pd.DataFrame()

    for i in query_final_list:
        objData = df.loc[i]
        objData_toDict = objData.to_dict()
        dfFinal = dfFinal._append(objData_toDict, ignore_index=True)
    print(df)  
else:
  print("Falha na solicitação à API. Código de status:", response.status_code)




