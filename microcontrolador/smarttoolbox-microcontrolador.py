# Smart Toolbox Esp32 main program
#
# Github: https://github.com/impatrq/722B_smart_toolbox

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

conectarWifi()

ureq.patch(dbURL,json={"herramienta1":"true"}, headers=HTTP_HEADERS)
