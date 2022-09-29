# Smart Toolbox Esp32 first main program
#
# Github: https://github.com/impatrq/722B_smart_toolbox
#
# Author: https://github.com/FedericoTorres233

from machine import Pin
import time

##Contador Binario de 4 bits
count = 0

s0 = Pin(17, Pin.OUT)
s1 = Pin(16, Pin.OUT)
s2 = Pin(4, Pin.OUT)
s3 = Pin(2, Pin.OUT)
sig = Pin(15, Pin.IN)

missing_tools = []

# Tools constructor
class Herramientas:
    def __init__(self, num, sel, nombre):
        self.num = num
        self.sel = sel
        self.nombre = nombre


# Tools objects
martillo = Herramientas(0, [0, 0, 0, 0], "Martillo")
fuerza = Herramientas(1, [0, 0, 0, 1], "Pinza de fuerza")
cutter = Herramientas(2, [0, 0, 1, 0], "Cutter")
allen = Herramientas(3, [0, 0, 1, 1], "Llaves allen")
pelacables = Herramientas(4, [0, 1, 0, 0], "Pelacables")
punta1 = Herramientas(5, [0, 1, 0, 1], "Pinza de punta 1")
alicates = Herramientas(6, [0, 1, 1, 0], "Alicates")
punta2 = Herramientas(7, [0, 1, 1, 1], "Pinza de punta 2")
loro = Herramientas(8, [1, 0, 0, 0], "Pico de loro")
inglesa = Herramientas(9, [1, 0, 0, 1], "Llave inglesa")
frenar = Herramientas(10, [1, 0, 1, 0], "Pinza de frenar")
phillips1 = Herramientas(11, [1, 0, 1, 1], "Phillips 1")
plano1 = Herramientas(12, [1, 1, 0, 0], "Plano 1")
phillips2 = Herramientas(13, [1, 1, 0, 1], "Phillips 2")
plano2 = Herramientas(14, [1, 1, 1, 0], "Plano 2")
metrica = Herramientas(15, [1, 1, 1, 1], "Cinta metrica")


def checkDuplicates(tool):
    return tool in missing_tools


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

while True:

    time.sleep(0.5)

    count = 1

    for tool in tools:
        if tool.sel[3] == 1:
            s0.on()
        if tool.sel[2] == 1:
            s1.on()
        if tool.sel[1] == 1:
            s2.on()
        if tool.sel[0] == 1:
            s3.on()
        time.sleep_ms(50)
        print(str(s3.value()) + str(s2.value()) + str(s1.value()) + str(s0.value()))
        if sig.value():
            if not checkDuplicates(tool.nombre):
                missing_tools.append(tool.nombre)
        else:
            if checkDuplicates(tool.nombre):
                missing_tools.remove(tool.nombre)
        s0.off()
        s1.off()
        s2.off()
        s3.off()
    time.sleep(1)

    print(missing_tools)

