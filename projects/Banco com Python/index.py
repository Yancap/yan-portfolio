import random
import json
import os
from PySimpleGUI import PySimpleGUI as sg
#Continuar refatorando o código, melhorar o UX e UI e tentar torna mais seguro
#Estudar sobre Python GUI

sg.theme("Reddit")

class Bank():
    __dataBank = []
    __dataComplete = []
    __cpf = []
    def __init__(self, digit):

        def create(index):
            if index == 1:
                #Conta Bancaria com 00000-0
                return random.randint(100000,999999)
            elif index == 2:
                #Agencia com 4 digitos: 0000
                return random.randint(1000,9999)
            elif index == 3:
                
                    try:
                        password = int(input("Digite sua senha\n(obs: 5 caracteres):"))
                        while password < 10000 or password > 99999:
                             password = int(input("Digite apenas 5 numeros:"))
                    except ValueError:
                        while True:
                            try:
                                password = int(input("Digite apenas numeros: "))
                                while password < 10000 or password > 99999:
                                    password = int(input("Digite apenas 5 numeros:"))
                            except ValueError:
                                continue
                    return password
            elif index == 4:
                try:
                    cpf = int(input("Digite seu CPF\n(obs: digite sem o '-'):"))
                    while cpf < 10000000000 or cpf > 99999999999:
                            cpf = int(input("Digite um CPF valido:"))
                except ValueError:
                    while True:
                        try:
                            cpf = int(input("Digite apenas numeros: "))
                            while cpf < 10000000000 or cpf > 99999999999:
                                cpf = int(input("Digite digite um CPF valido:"))
                        except ValueError:
                            continue
                return cpf
            else:
                return random.randint(1000, 9999)

        
        #Tenta fazer a interface grafica
        if digit == 2:
            layout = [
                [sg.Text('Tela de Cadastro')],
                [sg.Text('Nome'), sg.Input(key='name')],
                [sg.Text('CPF'), sg.Input(key='cpf'), sg.Text('(obs: digite sem o "-"")')],
                [sg.Text('Senha'), sg.Input(key='password', password_char='*'), sg.Text('(obs: 5 caracteres)')]
                [sg.Button('Enviar')]
            ]
            window = sg.Window('Tela de Cadastro', layout)
            while True:
                events, datas = window.read()
            name = datas['name']
            cpf = create(4)
            account = create(1)
            agency = create(2)
            password = create(3)
            codeSecurity = create(5)

            #Gera Banco de Dados
            data = open("data.txt", "a", encoding="UTF-8")
            self.__dataString = json.dumps(str(cpf))+ ":" + "{" + '"name"' + ":" + json.dumps(name).lower() + "," + '"account"' + ":" + json.dumps(account) + "," + '"agency"' + ":" + json.dumps(agency) + "," + '"password"' + ":" + json.dumps(password) + "," + '"codeSecurity"' + ":" + json.dumps(codeSecurity) + "," + '"balance"' + ":" + json.dumps('0') + "}"+"\n"
            data.write(self.__dataString)
            data.close()
            data = open("data.txt", "r", encoding="UTF-8")
            auxData = data.readlines()
            self.__dataBank = auxData
            newData = "{"

            for i in auxData:
                for j in i:
                    if j == "'" or j == "\n":
                        pass
                    if j == "}":
                        newData += j + ","
                        continue
                    newData += j
            
            newData = newData[:-2] + "}"
            print(json.loads(newData))
            data.close()
            self.login()
        else:
            self.login()    
        self.operations()

    #---------------------------- ENTRAR NA CONTA ---------------------------------
    def login(self):
        def autentication(data, tp):
            i = 0
            if tp == 'name':
                name = input("Digite seu Nome: ").lower()
                while i < 3:
                    if name == data["name"]:
                        break
                    else:
                        i += 1
                        if i < 3 :
                            print("Você possui apenas", 3-i, "tentativas")
                            name = input("Digite seu Nome Novamente: ").lower()
                            continue
                        else:
                            self.block()
                return name.lower()
            elif tp == 'account': 
                while True:
                    try:
                        account = int(input("Digite sua Conta Bancaria: (obs: 6 digitos) >> "))
                        while account < 100000 or account > 999999:
                                account = int(input("Apenas 6 Digitos \nDigite sua Bancaria: (obs: 6 digitos) >> "))
                    except ValueError:
                        print("Digite apenas numeros inteiros")
                        continue
                    else:
                        
                        
                        i = 0
                        while i < 3:
                            if account == data['account']:
                                break
                            else:
                                i += 1
                                if i < 3 :
                                    print("Você possui apenas", 3-i, "tentativas")
                                    account = int(input("Digite sua Bancaria Novamente: (obs: 6 digitos) >> "))
                                    continue
                                else:
                                    self.block()
                            
                        break
                return account

            elif tp == 'agency':
                while True:
                    try:
                        agency = int(input("Digite sua Agencia: (obs: 4 digitos) >> "))
                        while agency < 1000 or agency > 9999:
                                agency = int(input("Apenas 4 Digitos \nDigite sua Agencia: (obs: 4 digitos) >> "))
                    except ValueError:
                        print("Digite apenas numeros inteiros")
                        continue
                    else:    
                        i = 0
                        while i < 3:
                            if agency == data['agency']:
                                break
                            else:
                                i += 1
                                if i < 3 :
                                    print("Você possui apenas", 3-i, "tentativas")
                                    agency = int(input("Digite sua Agencia Novamente: (obs: 4 digitos) >> "))
                                    continue
                                else:
                                    self.block()
                        break
                return agency

            elif tp == 'password':
                while True:
                    try:
                        password = int(input("Digite sua Senha: (obs: 5 digitos) >> "))
                        while password < 10000 or password > 99999:
                                password = int(input("Apenas 5 Digitos \nDigite sua Senha: (obs: 5 digitos) >> "))
                    except ValueError:
                        print("Digite apenas numeros inteiros")
                        continue
                    else:
                        
                        
                        i = 0
                        while i < 3:
                            if password == data['password']:
                                break
                            else:
                                i += 1
                                if i < 3 :
                                    print("Você possui apenas", 3-i, "tentativas")
                                    password = int(input("Digite sua Senha Novamente: (obs: 5 digitos) >> "))
                                    continue
                                else:
                                    self.block()    
                            
                        break
                return password

            elif tp == 'code':
                while True:
                    try:
                        code = int(input("Digite seu Código de Segurança: (obs: 4 digitos) >> "))
                        while code < 1000 or code > 9999:
                                code = int(input("Apenas 4 Digitos \nDigite seu Código de Segurança: (obs: 4 digitos) >> "))
                    except ValueError:
                        print("Digite apenas numeros inteiros")
                        continue
                    else:   
                        i = 0
                        while i < 3:
                            if code == data['codeSecurity']:
                                break
                            else:
                                i += 1
                                if i < 3 :
                                    print("Você possui apenas", 3-i, "tentativas")
                                    code = int(input("Digite seu Código de Segurança Novamente: (obs: 4 digitos) >> "))
                                    continue
                                else:
                                    self.block()
                        break
                return code

        data = open("data.txt", "r", encoding="UTF-8")
        txt = ""
        i = 0
        txt = data.readlines()
        data.close()
        
        controlLine = 0 
        cpf = str(input("Digite seu CPF: "))

        for data in txt:
            auxCpf = ""
            auxIndex = 0
            for i in data:
                if i == '"':
                    continue
                if i != ":":
                    auxCpf  += i
                    auxIndex += 1
                else:
                    
                    auxIndex += 1
                    
                    break
            self.__dataComplete.append(json.loads("{"+data+"}"))
            self.__cpf.append(auxCpf)
            print(self.__dataComplete)
            self.__dataBank.append(json.loads(data[auxIndex+2:]))
            
            
            if str(auxCpf) == cpf:
                dataDict = json.loads(data[auxIndex+2:])
                print(dataDict)
                self.__accountBank =  {
                "name": autentication(dataDict, 'name'),
                "account": autentication(dataDict, 'account'),
                "agency": autentication(dataDict, 'agency'),
                "password": autentication(dataDict, 'password'),
                "codeSecurity": autentication(dataDict, 'code') ,
                "balance": float(dataDict['balance']),
                }
            else:
                controlLine += 1
                if controlLine == len(txt):
                    print("CPF não encontrado em nosso banco de dados")
                    self.block()    
                continue
    
    #---------------------------- OPERAÇÕES BANCARIA -------------------------------

    def operations(self):
        while True:
            question = input("Qual operação que deseja fazer?\n 1- Saque\n 2- Deposito\n 3- Transferencia\n 4- Ver Saldo Bancario\n 5- Sair >> ").lower()
            if question == "1" or question == "saque":
                os.system('cls') or None
                self.withdraw()
                self.saving()
                question = input("Deseja Continuar?\n 1- Sim\n 2- Não\n >> ").lower()
                os.system('cls') or None
                if question == "1" or question == "sim":
                    continue
                else:
                    exit()
            elif question == "deposito" or question == "2":
                os.system('cls') or None
                self.deposit()
                self.saving()
                question = input("Deseja Continuar?\n 1- Sim\n 2- Não\n >> ").lower()
                os.system('cls') or None
                if question == "1" or question == "sim":
                    continue
                else:
                    exit()
            elif question == "transferencia" or question == "3":
                os.system('cls') or None
                self.tranferencia()
                self.saving()
                question = input("Deseja Continuar?\n 1- Sim\n 2- Não\n >> ").lower()
                os.system('cls') or None
                if question == "1" or question == "sim":
                    continue
                else:
                    exit()

            elif question == "ver saldo bancario" or question == "4":
                self.getBankBalance()
                question = input("Deseja Continuar?\n 1- Sim\n 2- Não\n >> ").lower()
                os.system('cls') or None
                if question == "1" or question == "sim":
                    continue
                else:
                    exit()
            elif question == "sair" or question == "5":
                exit()
            else:
                pass
        return None
    def getBankBalance(self):
        os.system('cls') or None
        print("Seu saldo bancario é de R$", self.__accountBank['balance'])

    #OPERAÇÃO DE TRANSFERENCIA
    def tranferencia(self):             
        while True:
            try:
                account = int(input("Digite a Conta Bancaria que deseja fazer transferencia >> "))
                verifyAc = self.verify(account, "account")
            except ValueError:
                print("Digite apenas numeros!")
                continue
            if account < 100000 and account > 999999:
                print("Digite apenas 6 numeros!")
                continue
            elif verifyAc[1]:
                print("Digite uma conta bancaria existente!")
                continue
            else:
                break
        while True:
            try:
                agency = int(input("Digite Agencia da Conta Bancaria >> "))
                verifyAg = self.verify(agency, "agency")
            except ValueError:
                print("Digite apenas numeros!")
                continue
            if agency < 1000 and agency > 9999:
                print("Digite apenas 4 numeros!")
                continue
            elif verifyAc[1]:
                print("Digite uma Agencia valida!")
                continue
            else:
                break
        while True:
            try:
                transfer = float(input("Digite a quantia que deseja transferir >> "))
            except ValueError:
                print("Digite apenas numeros!")
                continue
            if self.verify(transfer, "balance"):
                print("Sua Conta saldo insuficiente para fazer a transferencia\nTente Novamente\n!")
                continue
            else:
                self.__accountBank['balance'] -= transfer
                for index in range(len(self.__dataBank)):
                    if self.__dataBank[index]['account'] == verifyAc[0] and self.__dataBank[index]['agency'] == verifyAg[0]:
                        self.__dataBank[index]['balance'] = float(self.__dataBank[index]['balance']) + transfer  
                        break
                break
            
    
    #OPERAÇÃO DE SAQUE
    def withdraw(self):
        while True:
            try:
                value = float(input("Deseja Sacar quantos R$?\n >> "))
            
            except ValueError:
                print("Digite apenas numeros!!!")
                continue
            else: 
                break
        if value >= self.__accountBank["balance"]:
            self.__accountBank["balance"] = 0
        else:
            self.__accountBank["balance"] -= value

    #OPERAÇÃO DE DEPOSITO
    def deposit(self):
        while True:
            try:
                value = float(input("Deseja Depositar quantos R$?\n >> "))
            except ValueError:
                print("Digite apenas numeros!!!")
                continue
            else: 
                break
        self.__accountBank["balance"] += value

    #VERIFICAÇÃO DE CONTAS BANCARIAS NO BANCO DE DADOS
    def verify(self, index, tp):
        if tp == "balance":
            if index > self.__accountBank['balance']:
                return True
            else:
                return False
        auxVerify = 0
        for data in self.__dataBank:
            if tp == "name":
                if index == data['name']:
                    return [data['name'] ,False]
                else:
                    auxVerify += 1
                    if auxVerify == len(self.__dataBank):
                        return [1, True]
                    else:
                        continue

            elif tp == "account":
                if index == data['account']:
                    return [data['account'], False]
                else:
                    auxVerify += 1
                    if auxVerify == len(self.__dataBank):
                        return [1, True]
                    else:
                        continue

            elif tp == "agency":
                if index == data['agency']:
                    return [data['agency'],False]
                else:
                    auxVerify += 1
                    if auxVerify == len(self.__dataBank):
                        return [1, True]
                    else:
                        continue
            

    #SALVA E ATUALIZA O BANCO DE DADOS    
    def saving(self):
        for data in range(len(self.__dataBank)):
            if self.__dataBank[data]['name'] == self.__accountBank['name'] and  self.__dataBank[data]['account'] == self.__accountBank['account'] and self.__dataBank[data]['agency'] == self.__accountBank['agency'] and self.__dataBank[data]['codeSecurity'] == self.__accountBank['codeSecurity']:
                self.__dataBank[data] = self.__accountBank
        newData = open("data.txt", "w", encoding="UTF-8")
                   
        for data in self.__dataBank:
            for i in range(len(self.__dataComplete)):
                if data['name'] == self.__dataComplete[i][self.__cpf[i]]['name'] and  data['account'] == self.__dataComplete[i][self.__cpf[i]]['account'] and data['agency'] == self.__dataComplete[i][self.__cpf[i]]['agency'] and data['codeSecurity'] == self.__dataComplete[i][self.__cpf[i]]['codeSecurity']:
                    self.__dataComplete[i][self.__cpf[i]] = data
        for i in range(len(self.__dataComplete)):
            self.__dataString = json.dumps(self.__cpf[i])+ ":" + "{" + '"name"' + ":" + json.dumps(self.__dataComplete[i][self.__cpf[i]]['name']) + "," + '"account"' + ":" + json.dumps(self.__dataComplete[i][self.__cpf[i]]['account']) + "," + '"agency"' + ":" + json.dumps(self.__dataComplete[i][self.__cpf[i]]['agency']) + "," + '"password"' + ":" + json.dumps(self.__dataComplete[i][self.__cpf[i]]['password']) + "," + '"codeSecurity"' + ":" + json.dumps(self.__dataComplete[i][self.__cpf[i]]['codeSecurity']) + "," + '"balance"' + ":" + json.dumps(self.__dataComplete[i][self.__cpf[i]]['balance']) + "}"+"\n"
            newData.write(self.__dataString)
        newData.close()


    
    #METODOS ESTATICOS  
    
    @staticmethod
    def block():
        os.system('cls') or None
        print("SEU ACESSO FOI BLOQUEADO\nEncerrando o programa....")
        input("Aperte ENTER para continuar >>")
        exit()
    
Bank(int(input("Olá, \n Digite 1 entrar em sua conta bancaria \n Digite 2 para criar conta \n>> ")))