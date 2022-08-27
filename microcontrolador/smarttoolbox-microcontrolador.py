# Smart Toolbox Esp32 main program
#
# Github: https://github.com/impatrq/722B_smart_toolbox
#
# Author: https://github.com/FedericoTorres233

import urequests as ureq
from machine import Pin
import network
import time

# Headers
HTTP_HEADERS = {'Content-Type': 'application/json'}

# Wifi essid and password
wifi_essid = ''
wifi_pass = ''

area_trabajo = "sector1"

# DB Url Id
dbId = ""

# DB Url
dbURL = f"https://smart-toolbox-{dbId}-default-rtdb.firebaseio.com"

# I/O ports
contact0 = Pin(25,Pin.IN)
contact1 = Pin(26,Pin.IN)
contact2 = Pin(27,Pin.IN)

linea1 = Pin(12, Pin.OUT)
linea2 = Pin(13, Pin.OUT)
linea3 = Pin(14, Pin.OUT)

# Multiplexer
signal = Pin(16,Pin.IN)
s0 = Pin(0,Pin.OUT)
s1 = Pin(15,Pin.OUT)
s2 = Pin(2,Pin.OUT)
s3 = Pin(4,Pin.OUT)

# Tools constructor
class Herramientas():
    def __init__(self,num,sel,estado,linea):
        self.num = num
        self.sel = sel
        self.estado = estado
        self.linea = linea

# Tools objects
pinza_fuerza = Herramientas(0,[0,0,0,0],False,1)
pinza_punta_1 = Herramientas(1,[0,0,0,0],False,1)
pinza_punta_2 = Herramientas(2,[0,0,0,0],False,1)
pinza_frenar = Herramientas(3,[0,0,0,0],False,1)
pinza_loro = Herramientas(4,[0,0,0,0],False,1)
alicates = Herramientas(5,[0,0,0,0],False,1)
dest_plano_1 = Herramientas(6,[0,0,0,0],False,1)
dest_plano_2 = Herramientas(7,[0,0,0,0],False,1)
dest_phillips_1 = Herramientas(8,[0,0,0,0],False,1)
dest_phillips_2 = Herramientas(9,[0,0,0,0],False,1)
cricket = Herramientas(10,[0,0,0,0],False,1)
# ! Llaves combinadas
# ! Tubos de encastre de 1/4
# ! Tubos de encastre de 1/4
# ! Tubos de encastre de 3/8
# ! Puntas intercambiables
# ! Extensiones llaves cricket
#multimetro = Herramientas([0,0,0,0],False)
#remachadora = Herramientas([0,0,0,0],False)
#minitorno = Herramientas([0,0,0,0],False)
#linterna = Herramientas([0,0,0,0],False)
#lupa = Herramientas([0,0,0,0],False)

cajon1 = [pinza_fuerza,pinza_punta_1,pinza_punta_2,pinza_frenar,pinza_loro,alicates]

# ! No se pueden asignar los pines hasta que
# ! todas las herramientas esten organizadas
# ! en el cajon

# Connect to wifi
def conectarWifi():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        print('connecting to network...')
        wlan.connect(wifi_essid, wifi_pass)
        while not wlan.isconnected():
            pass
    print('network config:', wlan.ifconfig())


def getReq(param):
    return ureq.get(f"{dbURL}/{area_trabajo}/{param}.json", headers=HTTP_HEADERS).json()

conectarWifi() # Connects to the Wifi network

#ureq.patch(dbURL,json={"1":"2"}, headers=HTTP_HEADERS)

print("guardar ha cambiado a true")

while True:
    while not getReq("guardar"):
        time.sleep(60) # Waits until the "guardar" signal arrives

    if contact0.value():
        S = 0
        for tool in cajon1:
            if tool.linea == 1:
                linea1.on()
            if tool.linea == 2:
                linea2.on()
            if tool.linea == 3:
                linea3.on()

    # contact = 0
    # while not contact > 2:

    #     if contact == 0:
    #         if contact0.value():
    #             selector = 0
    #             while selector < 15:
    #                 selector += 1
    #         else:
    #             contact += 1

    #     elif contact1 == 1:
    #         if contact1.value():
    #             selector = 0
    #             while selector < 15:
    #                 selector += 1
    #         else:
    #             contact += 1

    #     elif contact2 == 2:
    #         if contact2.value():
    #             selector = 0
    #             while selector < 15:
    #                 selector += 1
    #         else:
    #             contact += 1