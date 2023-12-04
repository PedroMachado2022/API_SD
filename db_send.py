import psycopg2 
from psycopg2 import IntegrityError
from hashlib import sha256

# Conexão com o BD em nuvem no railway
connect = psycopg2.connect(database = "railway",
                            host="monorail.proxy.rlwy.net",
                            user="postgres",
                            password= "CA1bcaf2c16FGEdc3eBa4FcAE6D6ED1A",
                            port="32414"
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
        return "Registrado"
    
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

#send_data("Admin", "Admin@gmail.com", "Admin")