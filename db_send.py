import psycopg2 
from psycopg2 import IntegrityError
from hashlib import sha256

# Conexão com o BD em nuvem no railway
connect = psycopg2.connect(database = "railway",
                            host="containers-us-west-176.railway.app",
                            user="postgres",
                            password= "5z9iyw8PZWBKZaY6m8hY",
                            port="7524"
                            )

def send_data(name, email, password):

    # Tratamento de erro
    try:
        # Cursor para executar as querys no DB.
        cursor = connect.cursor()

        # Enviaremos a senha do cliente com HASH para o banco de dados
        hashed_password = sha256(password.encode()).hexdigest()

        # Query de inserção de dados no DB
        insert_query = "INSERT INTO users (name, email, password) VALUES (%s, %s, %s)"
        # Valores a serem inseridos
        values = (name,email,hashed_password) 

        #Execução da query e envio para o DB
        cursor.execute(insert_query, values)
        connect.commit()
    
    # Caso ja exista o email no banco
    except IntegrityError as e:
        connect.rollback()
        print("Erro ao inserir na tabela:", e)
        print("Nome já existe na tabela.")

    except Exception as e:
        connect.rollback() 
        print("Erro ao inserir na tabela:", e)

    # Fim da conexão
    finally:
        cursor.close()
        connect.close()

#send_data("Jorge", "luizinhohashado", "password")