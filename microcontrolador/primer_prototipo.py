# Smart Toolbox Esp32 first main program
#
# Github: https://github.com/impatrq/722B_smart_toolbox
#
# Author: https://github.com/FedericoTorres233

from machine import Pin
import time
##Contador Binario de 4 bits
count=0

#button = machine.Pin(0, machine.Pin.IN)
bit1 = Pin(17, Pin.OUT)
bit2 = Pin(16, Pin.OUT)
bit3 = Pin(4, Pin.OUT)
bit4 = Pin(2, Pin.OUT)
sig = Pin(15,Pin.IN)

missing_tools = []

while True:

  time.sleep(1)

  if (True):
    print(sig.value())
    count += 1

    if (count == 1):
      bit1.off()
      bit2.off()
      bit3.off()
      bit4.off()
      if(sig.value()):
          missing_tools.append("Martillo")
      else:
          if "Martillo" in missing_tools:
              missing_tools.remove("Martillo")

    elif(count == 2):
      bit1.on()
      bit2.off()
      bit3.off()
      bit3.off()
      if(sig.value()):
          missing_tools.append("Pinza de fuerza")
      else:
          if "Pinza de fuerza" in missing_tools:
              missing_tools.remove("Pinza de fuerza")

    elif(count == 3):
      bit1.off()
      bit2.on()
      bit3.off()
      bit4.off()
      if(sig.value()):
          missing_tools.append("Cutter")
      else:
          if "Cutter" in missing_tools:
              missing_tools.remove("Cutter")

    elif(count == 4):
      bit1.on()
      bit2.on()
      bit3.off()
      bit4.off()
      if(sig.value()):
          missing_tools.append("Llaves allen")
      else:
          if "Llaves allen" in missing_tools:
              missing_tools.remove("Llaves allen")

    elif(count == 5):
      bit1.off()
      bit2.off()
      bit3.on()
      bit4.off()
      if(sig.value()):
          missing_tools.append("Pelacables")
      else:
          if "Pelacables" in missing_tools:
              missing_tools.remove("Pelacables")

    elif(count == 6):
      bit1.on()
      bit2.off()
      bit3.on()
      bit4.off()
      if(sig.value()):
          missing_tools.append("Pinza de punta 1")
      else:
          if "Pinza de punta 1" in missing_tools:
              missing_tools.remove("Pinza de punta 1")

    elif(count == 7):
      bit1.off()
      bit2.on()
      bit3.on()
      bit4.off()
      if(sig.value()):
          missing_tools.append("Alicates")
      else:
          if "Alicates" in missing_tools:
              missing_tools.remove("Alicates")

    elif(count == 8):
      bit1.on()
      bit2.on()
      bit3.on()
      bit4.off()
      if(sig.value()):
          missing_tools.append("Pinza de punta 2")
      else:
          if "Pinza de punta 2" in missing_tools:
              missing_tools.remove("Pinza de punta 2")

    elif(count == 9):
      bit1.off()
      bit2.off()
      bit3.off()
      bit4.on()
      if(sig.value()):
          missing_tools.append("Pico de loro")
      else:
          if "Pico de loro" in missing_tools:
              missing_tools.remove("Pico de loro")

    elif(count == 10):
      bit1.on()
      bit2.off()
      bit3.off()
      bit4.on()
      if(sig.value()):
          missing_tools.append("Llave inglesa")
      else:
          if "Llave inglesa" in missing_tools:
              missing_tools.remove("Llave inglesa")

    elif(count == 11):
      bit1.off()
      bit2.on()
      bit3.off()
      bit4.on()
      if(sig.value()):
          missing_tools.append("Pinza de frenar")
      else:
          if "Pinza de frenar" in missing_tools:
              missing_tools.remove("Pinza de frenar")

    elif(count == 12):
      bit1.on()
      bit2.on()
      bit3.off()
      bit4.on()
      if(sig.value()):
          missing_tools.append("Phillips 1")
      else:
          if "Phillips 1" in missing_tools:
              missing_tools.remove("Phillips 1")

    elif(count == 13):
      bit1.off()
      bit2.off()
      bit3.on()
      bit4.on()
      if(sig.value()):
          missing_tools.append("Plano 1")
      else:
          if "Plano 1" in missing_tools:
              missing_tools.remove("Plano 1")

    elif(count == 14):
      bit1.on()
      bit2.off()
      bit3.on()
      bit4.on()
      if(sig.value()):
          missing_tools.append("Phillips 2")
      else:
          if "Phillips 2" in missing_tools:
              missing_tools.remove("Phillips 2")

    elif(count == 15):
      bit1.off()
      bit2.on()
      bit3.on()
      bit4.on()
      if(sig.value()):
          missing_tools.append("Plano 2")
      else:
          if "Plano 2" in missing_tools:
              missing_tools.remove("Plano 2")

    elif(count == 16):
      bit1.on()
      bit2.on()
      bit3.on()
      bit4.on()
      if(sig.value()):
          missing_tools.append("Cinta")
      else:
          if "Cinta" in missing_tools:
              missing_tools.remove("Cinta")
      count = 0
    print(missing_tools)
    print(str(bit4.value()) + str(bit3.value()) + str(bit2.value()) + str(bit1.value()))

