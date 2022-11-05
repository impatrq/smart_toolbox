# Smart Toolbox Esp32 first main program
#
# Github: https://github.com/impatrq/722B_smart_toolbox
#
# Author: https://github.com/FedericoTorres233

from machine import Pin
import time
import network
import urequests as ureq

# Environmental variables
WIFI_SSID = ""
WIFI_PASSWD = ""
DB_ID = ""

# Workspace
area_trabajo = "sector1"

# DB Url
dbURL = f"https://smart-toolbox-{DB_ID}-default-rtdb.firebaseio.com"

# Toolbox Number
toolbox = "14537934"

# Headers
HTTP_HEADERS = {"Content-Type": "application/json"}

# I/O Ports
s0 = Pin(17, Pin.OUT)
s1 = Pin(16, Pin.OUT)
s2 = Pin(4, Pin.OUT)
s3 = Pin(2, Pin.OUT)
alarm = Pin(13, Pin.OUT)
sig = Pin(15, Pin.IN)
c1 = Pin(19,Pin.IN)
c2 = Pin(18,Pin.IN)
c3 = Pin(21,Pin.IN)

alarm.off()
missing_tools = []

# Tools constructor
class Tools:
    def __init__(self, num, sel, nombre):
        self.num = num
        self.sel = sel
        self.nombre = nombre


# Tool objects
martillo = Tools(0, [0, 0, 0, 0], "Martillo")
fuerza = Tools(1, [0, 0, 0, 1], "Pinza de fuerza")
cutter = Tools(2, [0, 0, 1, 0], "Cutter")
torx = Tools(3, [0, 0, 1, 1], "Llaves torx")
pelacables = Tools(4, [0, 1, 0, 0], "Pelacables")
punta1 = Tools(5, [0, 1, 0, 1], "Pinza de punta 1")
alicates = Tools(6, [0, 1, 1, 0], "Alicates")
punta2 = Tools(7, [0, 1, 1, 1], "Pinza de punta 2")
loro = Tools(8, [1, 0, 0, 0], "Pico de loro")
francesa = Tools(9, [1, 0, 0, 1], "Llave francesa")
frenar = Tools(10, [1, 0, 1, 0], "Pinza de frenar")
phillips1 = Tools(11, [1, 0, 1, 1], "Destornillador Phillips 1")
plano1 = Tools(12, [1, 1, 0, 0], "Destornillador Plano 1")
phillips2 = Tools(13, [1, 1, 0, 1], "Destornillador Phillips 2")
plano2 = Tools(14, [1, 1, 1, 0], "Destornillador Plano 2")
metrica = Tools(15, [1, 1, 1, 1], "Cinta metrica")


# Finds if a tool is in the missing_tools list
def checkDuplicates(tool):
    return tool in missing_tools

def checkContacts():
    if not c1.value() and not c2.value() and not c3.value():
        return True
    else:
        return False

# Connect to the wifi network
def connectWifi():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        wlan.connect(WIFI_SSID, WIFI_PASSWD)
        while not wlan.isconnected():
            time.sleep_ms(1000)


# REST API get method
def getReq(param):
    return ureq.get(f"{dbURL}/{area_trabajo}/{param}.json", headers=HTTP_HEADERS).json()


# REST API patch method
def patchReq(param, js):
    return ureq.patch(f"{dbURL}/{area_trabajo}/{param}.json", json=js, headers=HTTP_HEADERS).json()


# This makes the tools iterable
tools = [
    martillo,
    fuerza,
    cutter,
    torx,
    pelacables,
    punta1,
    alicates,
    punta2,
    loro,
    francesa,
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

    while not getReq("guardar"):
        patchReq(f"cajas/{toolbox}", {"missing_tools": "", "state": False})
        time.sleep(10)  # Waits until the store signal arrives

    for tool in tools:
        if tool.sel[3] == 1:
            s0.on()
        if tool.sel[2] == 1:
            s1.on()
        if tool.sel[1] == 1:
            s2.on()
        if tool.sel[0] == 1:
            s3.on()

        # ! This delay ensures an effective multiplexer switching

        if not sig.value():
            # * The tool is not in its place
            if not checkDuplicates(tool.nombre):
                missing_tools.append(tool.nombre)
        else:
            # * The tool is in its place
            if checkDuplicates(tool.nombre):
                missing_tools.remove(tool.nombre)

        s0.off()
        s1.off()
        s2.off()
        s3.off()

    if missing_tools != [] and checkContacts():
        alarm.on()
    else:
        alarm.off()

    patchReq(f"cajas/{toolbox}", {"missing_tools": " | ".join(missing_tools), "state": True})
