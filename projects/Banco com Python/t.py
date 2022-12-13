from PySimpleGUI import PySimpleGUI as sg
sg.theme("Reddit")
layout = [
    [sg.Text('Usuario'), sg.Input(key='usuario')],
    [sg.Text('Senha'), sg.Input(key='usuario')],
    [sg.Text('Usuario'), sg.Input(key='usuario')]
]

janela = sg.Window("Tela", layout)

while True:
    eventos, valores = janela.read()