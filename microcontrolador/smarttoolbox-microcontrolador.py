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

# DB Url
dbURL = ""

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