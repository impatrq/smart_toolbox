# Smart Toolbox Esp32 first main program
#
# Github: https://github.com/impatrq/722B_smart_toolbox
#
# Author: https://github.com/FedericoTorres233

from machine import Pin
import time
import network

# Import environmental variables
import env

# Workspace
area_trabajo = "sector1"

# DB Url Id
dbId = ""

# DB Url
dbURL = f"https://smart-toolbox-{dbId}-default-rtdb.firebaseio.com"

# Toolbox Number
toolbox = "12537865"

# I/O Ports
s0 = Pin(17, Pin.OUT)
s1 = Pin(16, Pin.OUT)
s2 = Pin(4, Pin.OUT)
s3 = Pin(2, Pin.OUT)
sig = Pin(15, Pin.IN)
alarm = Pin(13, Pin.OUT)

alarm.off()
missing_tools = []

# Tools constructor


class Tools():
    def __init__(self, num, sel, nombre):
        self.num = num
        self.sel = sel
        self.nombre = nombre


# Tool objects
martillo = Tools(0, [0, 0, 0, 0], "Martillo")
fuerza = Tools(1, [0, 0, 0, 1], "Pinza de fuerza")
cutter = Tools(2, [0, 0, 1, 0], "Cutter")
allen = Tools(3, [0, 0, 1, 1], "Llaves allen")
pelacables = Tools(4, [0, 1, 0, 0], "Pelacables")
punta1 = Tools(5, [0, 1, 0, 1], "Pinza de punta 1")
alicates = Tools(6, [0, 1, 1, 0], "Alicates")
punta2 = Tools(7, [0, 1, 1, 1], "Pinza de punta 2")
loro = Tools(8, [1, 0, 0, 0], "Pico de loro")
inglesa = Tools(9, [1, 0, 0, 1], "Llave inglesa")
frenar = Tools(10, [1, 0, 1, 0], "Pinza de frenar")
phillips1 = Tools(11, [1, 0, 1, 1], "Phillips 1")
plano1 = Tools(12, [1, 1, 0, 0], "Plano 1")
phillips2 = Tools(13, [1, 1, 0, 1], "Phillips 2")
plano2 = Tools(14, [1, 1, 1, 0], "Plano 2")
metrica = Tools(15, [1, 1, 1, 1], "Cinta metrica")


# Finds if a tool is in the missing_tools list
def checkDuplicates(tool):
    return tool in missing_tools

# Connect to the wifi network
def connectWifi():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        print('connecting to network...')
        wlan.connect(env.WIFI_SSID, env.WIFI_SSID)
        while not wlan.isconnected():
            time.sleep_ms(100)
    print('network config:', wlan.ifconfig())


# This makes the tools iterable
tools = [
    martillo,
    fuerza,
    cutter,
    allen,
    pelacables,
    punta1,
    alicates,
    punta2,
    loro,
    inglesa,
    frenar,
    phillips1,
    plano1,
    phillips2,
    plano2,
    metrica,
]

# Connect to the Wifi network
connectWifi()

# Main event loop
while True:

    while not wlan.isconnected():
        # Not connected to internet
        sleep_ms(1000)

    for tool in tools:
        if tool.sel[3] == 1:
            s0.on()
        if tool.sel[2] == 1:
            s1.on()
        if tool.sel[1] == 1:
            s2.on()
        if tool.sel[0] == 1:
            s3.on()

        # ! This delay ensures a effective multiplexer switching
        time.sleep_ms(50)

        print(str(s3.value()) + str(s2.value()) +
              str(s1.value()) + str(s0.value()))

        if sig.value():
            # * The tool is not in its place
            if not checkDuplicates(tool.nombre):
                missing_tools.append(tool.nombre)
                alarm.on()
        else:
            # * The tool is in its place
            if checkDuplicates(tool.nombre):
                alarm.off()
                missing_tools.remove(tool.nombre)
        s0.off()
        s1.off()
        s2.off()
        s3.off()

    time.sleep(1)

    print(missing_tools)
