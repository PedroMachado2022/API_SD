import requests
import pandas as pd
import json

def requestAPI():
   
    def save_to_json(data, filename):
        with open(filename, 'w+') as file:
            json.dump(data, file)
    
    # Função que realiza o request para a API
    def request(query: str):
        url = f"https://economia.awesomeapi.com.br/last/{query}"
        response = requests.get(url)
        return response
    
    # Chamada da função que cria a lista BTC-BRL, BTC-USD, BTC-EUR
    list_query: list[str] = ['BRL-JPY', 'BRL-USD', 'BRL-AUD', 'BRL-ARS', 'BRL-CAD', 'BRL-EUR', 'BRL-GBP', 'BRL-NZD', 'BRL-ZAR', 'BRL-RUB', 'BRL-CNY', 'USD-JPY', 'USD-BRL', 'USD-AUD', 'USD-ARS', 'USD-CAD', 'USD-EUR', 'USD-GBP', 'USD-NZD', 'USD-ZAR', 'USD-RUB', 'USD-CNY','EUR-JPY', 'EUR-BRL', 'EUR-AUD', 'EUR-ARS', 'EUR-CAD', 'EUR-USD', 'EUR-GBP', 'EUR-NZD', 'EUR-ZAR', 'EUR-RUB', 'EUR-CNY']
    #print(list_query)

    # Query pronta para a URL.
    queryUrl: str = ",".join(list_query)
    response = request(queryUrl)

    # Query para comparação
    query_final: str = queryUrl.replace("-","").replace(',', " ")
    query_final_list: list[str] = query_final.split()
    #print(query_final_list)

    if response.status_code == 200:
        # Pegando o json resposta da API
        data = response.json()
        #print(data)
        # Criaçao do Df através do Json resposta
        df = pd.DataFrame.from_dict(data, orient='index')
        #print(df)
        
        dfFinal = pd.DataFrame()

        for i in query_final_list:
            objData = df.loc[i]
            objData_toDict = objData.to_dict()
            dfFinal = dfFinal._append(objData_toDict, ignore_index=True)
        #print(dfFinal)  

        # Filtra o DataFrame para os dados que quremos utilizar no FrontEnd
        dfFiltered = dfFinal[["code", "codein", "name", "high", "low", "pctChange", "bid", "ask", "create_date"]]
        
        # Transforma o DataFrame filtrado para o formado json para  retornar para o FrontEnd
        json_data = dfFiltered.to_json(orient='index')
        
        #save_to_json(json_data, "Cotas_data.json")
        return json_data

    else:
        print("Falha na solicitação à API. Código de status:", response.status_code)

    
#print(requestAPI()) 


"['BRL-JPY', 'BRL-USD', 'BRL-AUD', 'BRL-ARS', 'BRL-CAD', 'BRL-EUR', 'BRL-GBP', 'BRL-NZD', 'BRL-ZAR', 'BRL-RUB', 'BRL-CNY']"
"['USD-JPY', 'USD-BRL', 'USD-AUD', 'USD-ARS', 'USD-CAD', 'USD-EUR', 'USD-GBP', 'USD-NZD', 'USD-ZAR', 'USD-RUB', 'USD-CNY']"
"['EUR-JPY', 'EUR-BRL', 'EUR-AUD', 'EUR-ARS', 'EUR-CAD', 'EUR-USD', 'EUR-GBP', 'EUR-NZD', 'EUR-ZAR', 'EUR-RUB', 'EUR-CNY']"

'''
 ## Moeda principal da query
    mainCoin = main_coin

    ## Moeadas a serem comparadas
    coins_list = comparate_coins

    
# Função para gerar a Query
    def query_generator(lista: list[str]) -> list[str]:
        listQuery: list[str] = []
        # Loop para percorrer a lista de moedas a serem comparadas e criar a query com elas
        for i in lista:
            query = f"{mainCoin.upper()}-{i}"
            # Comparaçao Ex:. BRL-USD, BRL-EUR (formatadas para string)
            listQuery.append(query)
        return listQuery
'''