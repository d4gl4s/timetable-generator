from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.core.utils import ChromeType
from datetime import datetime
from selenium.webdriver.chrome.service import Service
from selenium import webdriver
from time import sleep
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
import random
from urllib.request import urlopen
import json
import os
import sys
import copy

set1 = {1,3,7}
set2 = {7,1,3}
if set2 == set1:
    print('yes')

""" def lisaTund(tabel, keskmine, ajavahemikud, tund):
    for vahemik in ajavahemikud:
        if keskmine > vahemik[0] and keskmine < vahemik[1] and tabel[ajavahemikud[vahemik]][int(tund[2])-1]==0:
            tabel[ajavahemikud[vahemik]][int(tund[2])-1] = tund
            return True
    return False

def lisaPikkTund(aeg1, aeg2, tabel, ajavahemikud, tund):
    kordusi = (aeg2-aeg1)/2
    algusaeg = aeg1
    kõikLisatud = True
    for kordus in range(int(kordusi)):
        keskmine = (algusaeg+algusaeg+2)/2
        algusaeg += 2
        lisatud = lisaTund(tabel, keskmine, ajavahemikud, tund)
        if not lisatud:
            kõikLisatud = False
    return kõikLisatud

tabel = []
for i in range(6):
    tabel.append([0,0,0,0,0])

ajavahemikud = {(8,10):0, (10,12):1,(12,14):2,(14,16):3,(16,18):4,(18,20):5}

soovitud = ["MTAT.03.105",
"LTAT.03.005",
"MTAT.03.294",
"LTAT.06.026"]

sor = list(sorted([ained[soov] for soov in soovitud], key = len))
for s in sor:
    indx = 3
    for indeks in range(3, len(s)):
        tund = s[indx]
        tund.insert(0,s[0])
        if len(tund)==5 or tund[1]=='lecture':
            print(tund)
            aeg1 = int(tund[3].split(":")[0])
            aeg2 = int(tund[4].split(":")[0])
            lisatud = False
            if aeg2-aeg1 >2:
                lisatud = lisaPikkTund(aeg1, aeg2, tabel, ajavahemikud, tund)
            else:
                keskmine = (aeg1+aeg2)/2
                lisatud = lisaTund(tabel, keskmine, ajavahemikud, tund)
            if lisatud:
                del(s[indx])
                indx -=1
        indx+=1
print(tabel)

def rek(ained, indeks, tabel, ajavahemikud):
    print(ained[indeks])
    if indeks == len(ained):
        for t in tabel:
            print(t)
        print("\n")
    elif len(ained[indeks])>3:
        for tIndeks in range(3, len(ained[indeks])):
            tund = ained[indeks][tIndeks]
            print(tund)
            aeg1 = int(tund[3].split(":")[0])
            aeg2 = int(tund[4].split(":")[0])
            lisatud = False
            uusTabel = copy.deepcopy(tabel)
            if aeg2-aeg1 >2:
                lisatud = lisaPikkTund(aeg1, aeg2, uusTabel, ajavahemikud, tund)
            else:
                keskmine = (aeg1+aeg2)/2
                lisatud = lisaTund(tabel, keskmine, uusTabel, tund)
            if lisatud:
                rek(ained, indeks+1, uusTabel, ajavahemikud)
    else:
        rek(ained, indeks+1, tabel, ajavahemikud)

 """

#rek(sor, 0,tabel,ajavahemikud)