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

# Tools constructor
class Herramientas():
    def __init__(self,sel,estado,linea):
        self.sel = sel
        self.estado = estado
        self.linea = linea

# Tools objects
pinza_fuerza = Herramientas([0,0,0,0],False)
pinza_punta_1 = Herramientas([0,0,0,0],False)
pinza_punta_2 = Herramientas([0,0,0,0],False)
pinza_frenar = Herramientas([0,0,0,0],False)
pinza_loro = Herramientas([0,0,0,0],False)
alicates = Herramientas([0,0,0,0],False)
dest_plano_1 = Herramientas([0,0,0,0],False)
dest_plano_2 = Herramientas([0,0,0,0],False)
dest_phillips_1 = Herramientas([0,0,0,0],False)
dest_phillips_2 = Herramientas([0,0,0,0],False)
cricket = Herramientas([0,0,0,0],False)
# ! Llaves combinadas
# ! Tubos de encastre de 1/4
# ! Tubos de encastre de 1/4
# ! Tubos de encastre de 3/8
# ! Puntas intercambiables
# ! Extensiones llaves cricket
multimetro = Herramientas([0,0,0,0],False)
remachadora = Herramientas([0,0,0,0],False)
minitorno = Herramientas([0,0,0,0],False)
linterna = Herramientas([0,0,0,0],False)
lupa = Herramientas([0,0,0,0],False)

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

#ureq.patch(dbURL,json={"1":"2"}, headers=HTTP_HEADERS)

print("guardar ha cambiado a true")

while True:
    while not getReq("guardar"):
        time.sleep(60) # Waits until the "guardar" signal arrives
    contact = 0
    while not contact > 2:
        if contact1.value():
            # Turn on switches
            pass
        else:
            contact += 1