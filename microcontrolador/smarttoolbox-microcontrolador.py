# Smart Toolbox Esp32 main program
#
# Github: https://github.com/impatrq/722B_smart_toolbox
#
# Author: https://github.com/FedericoTorres233

import urequests as ureq
from machine import Pin
import network
from time import sleep_ms, sleep

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

# Toolbox Number
toolbox = "12537865"

# Missing tools
missing_tools = []

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
    def __init__(self,num,sel,nombre,linea):
        self.num = num
        self.sel = sel
        self.nombre = nombre
        self.linea = linea

# Tools objects
pinza_fuerza = Herramientas(0,[0,0,0,0],"Pinza de fuerza",1)
pinza_punta_1 = Herramientas(1,[0,0,0,0],"Pinza de punta 1",1)
pinza_punta_2 = Herramientas(2,[0,0,0,0],"Pinza de punta 2",1)
pinza_frenar = Herramientas(3,[0,0,0,0],"Pinza de frenar",1)
pinza_loro = Herramientas(4,[0,0,0,0],"Pinza pico de loro",1)
alicates = Herramientas(5,[0,0,0,0],"Alicates",1)
dest_plano_1 = Herramientas(6,[0,0,0,0],"Destornillador plano 2",1)
dest_plano_2 = Herramientas(7,[0,0,0,0],"Destornillador plano 2",1)
dest_phillips_1 = Herramientas(8,[0,0,0,0],"Destornillador Phillips 1",1)
dest_phillips_2 = Herramientas(9,[0,0,0,0],"Destornillador Phillips 2",1)
cricket = Herramientas(10,[0,0,0,0],"Cricket",1)
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
            sleep_ms(100)
    print('network config:', wlan.ifconfig())


def getReq(param):
    return ureq.get(f"{dbURL}/{area_trabajo}/{param}.json", headers=HTTP_HEADERS).json()

def patchReq(param, js):
    return ureq.patch(f"{dbURL}/{area_trabajo}/{param}.json", json=js ,headers=HTTP_HEADERS).json()

conectarWifi() # Connects to the Wifi network

#ureq.patch(dbURL,json={"1":"2"}, headers=HTTP_HEADERS)

print("guardar ha cambiado a true")

while True:
    while not getReq("guardar"):
        sleep(10) # Waits until the "guardar" signal arrives

    if contact0.value() == 1:
        for tool in cajon1:
            if tool.linea == 1:
                linea1.on()
            elif tool.linea == 2:
                linea2.on()
            elif tool.linea == 3:
                linea3.on()

            sleep_ms(50)

            if tool.sel[0] == 1:
                s0.on()
            if tool.sel[1] == 1:
                s1.on()
            if tool.sel[2] == 1:
                s2.on()
            if tool.sel[3] == 1:
                s3.on()

            sleep_ms(50)

            if signal == 1:
                missing_tools.append(tool.nombre)
                patchReq(f"cajas/{toolbox}",{"missing_tools": " | ".join(missing_tools), "state": True})
            elif signal == 0:
                missing_tools.remove(tool.nombre)
                patchReq(f"cajas/{toolbox}",{"missing_tools": " | ".join(missing_tools), "state": False})

            s0.off()
            s1.off()
            s2.off()
            s3.off()

            sleep_ms(500)


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