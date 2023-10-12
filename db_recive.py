import psycopg2
from hashlib import sha256

# Conexão com o BD em nuvem no railway
connect = psycopg2.connect(database = "railway",
                            host="containers-us-west-176.railway.app",
                            user="postgres",
                            password= "5z9iyw8PZWBKZaY6m8hY",
                            port="7524"
                            )

# Função que verifica se os dados do usuário existem
def login(email, password):

    # Tratamento de erro
    try:
        # Cursor para executar as querys no DB.
        cursor = connect.cursor()

        # Execução da Query (Seleciona todos os usuários presentes no DB)
        cursor.execute("SELECT * FROM users")
        
        # Guarda o valor de todas as linhas da tabela do DB
        rows = cursor.fetchall()

        # Percore em todas as linhas procurando o usuário que está tentando realizar o login
        for row in rows:
            # Utilizaremos o email como primary key (Não pode haver emails iguais)
            if email == row[2]:
                # Caso o email exista, verificamos se a senhabate
                if sha256(password.encode()).hexdigest() == row[3]:
                    print(f"Acesso Permitido, Olá {row[1]}")
                else:
                    print("Acesso negado! Senha incorreta!")
            # Caso o email não exista
            else:
                print("Email não encontrado!")

    except Exception as e:
        print("Erro ao consultar a tabela:", e)

    # Finalizamos a conexão ao fim da execução
    finally:
        cursor.close()
        connect.close()

#login("luizinhohashado", "password")


