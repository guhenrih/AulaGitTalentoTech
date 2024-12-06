import datetime

# Gerando texto dinâmico
current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
text = f"Olá! A data e hora atuais são: {current_time}"

# Salvando o texto em um arquivo
with open("data.txt", "w") as file:
    file.write(text)

print("Arquivo 'data.txt' gerado com sucesso!")
