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


# Tools constructor
class Herramientas():
    def __init__(self,pin,estado):
        self.pin = pin
        self.estado = estado

# Tools objects
pinza_fuerza = Herramientas(0,False)
pinza_punta_1 = Herramientas(1,False)
pinza_punta_2 = Herramientas(2,False)
pinza_frenar = Herramientas(3,False)
pinza_loro = Herramientas(4,False)
alicates = Herramientas(5,False)
dest_plano_1 = Herramientas(6,False)
dest_plano_2 = Herramientas(7,False)
dest_phillips_1 = Herramientas(8,False)
dest_phillips_2 = Herramientas(9,False)
cricket = Herramientas(10,False)
# ! Llaves combinadas
# ! Tubos de encastre de 1/4
# ! Tubos de encastre de 1/4
# ! Tubos de encastre de 3/8
# ! Puntas intercambiables
# ! Extensiones llaves cricket
multimetro = Herramientas(11,False)
remachadora = Herramientas(12,False)
minitorno = Herramientas(13,False)
linterna = Herramientas(14,False)
lupa = Herramientas(15,False)

# * cajon1 = [pinza_fuerza,pinza_punta_1,pinza_punta_2,pinza_frenar,pinza_loro,alicates]

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

while not getReq("guardar"):
    time.sleep(5) # Waits until the "guardar" signal arrives

#ureq.patch(dbURL,json={"1":"2"}, headers=HTTP_HEADERS)

print("guardar ha cambiado a true")