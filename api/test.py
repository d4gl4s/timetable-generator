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

def lisaTund(tabel, keskmine, ajavahemikud, tund):
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
        print(keskmine)
        algusaeg += 2
        lisatud = lisaTund(tabel, keskmine, ajavahemikud, tund)
        if not lisatud:
            kõikLisatud = False
    return kõikLisatud
#-------------------------setup------------------------------

#------------------------------------------------------------
firstPart = "https://ois2.ut.ee/api/timetable/courses/"


with open(os.path.join(sys.path[0], "links.txt"), "r") as f:
    read = f.read().splitlines()

ained = {}
for rida in read:
    url = firstPart+rida
    #print(url)
    response = urlopen(url)
    data_json = json.loads(response.read())
    if not 'info' in data_json:
        continue
    if not 'events' in data_json:
        continue

    groups = {}
    if 'groups' in data_json:
        for group in data_json['groups']:
            groups[group] = data_json['groups'][group]
    ainekood = data_json['info']['course_code']
    aine = [ainekood, data_json['info']['title']['et'], data_json['info']['credits']]
    for event in data_json['events']:
        tund = []
        note = ""
        if ("-" in event['time']['academic_weeks'] or event['time']['academic_weeks'].count(",")>3) and event['event_type']['code'] == "lecture" and (event['study_work_type']["code"]=="practice" or event['study_work_type']["code"]=="lecture" or event['study_work_type']["code"]=="seminar"):
            tund.extend((event['study_work_type']["code"], event['time']['weekday']["code"], event['time']['begin_time'], event['time']['end_time']))
            for n in event['notes']:
                note = event['notes'][n]
            if 'group_uuids' in event:
                for n in event['group_uuids']:
                    tund.append(groups[n])
        if len(tund) > 0 and len(note) < 30:
            aine.append(tund)

    if len(aine) > 3:
        ained[ainekood] = aine


with open(os.path.join(sys.path[0], "data.json"), "w", encoding='utf-8') as outfile:
    json.dump(ained, outfile)


""" tabel = []
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

print(sor)

def rek(ained, indeks, tabel, ajavahemikud):
    if indeks == len(ained):
        for t in tabel:
            print(t)
        print("\n")
    elif len(ained[indeks]>3):
        for tund in ained[indeks]:
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




rek(sor, 0,tabel,ajavahemikud)







 """
"""
chromiumdriver = ChromeDriverManager(chrome_type=ChromeType.CHROMIUM).install()
driver = webdriver.Chrome(service=Service(chromiumdriver))
driver.get('https://ois2.ut.ee/#/courses')

button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "div[id='mat-select-value-1']"))).click()
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "mat-option[title='2023/2024']"))).click()
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button[class='mat-focus-indicator full-width mb-2 mat-stroked-button mat-button-base mat-primary ng-star-inserted']"))).click()
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "#mat-select-value-3"))).click()
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "mat-option[title='arvutiteaduse instituut (LTAT)']"))).click()
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "mat-select#mat-select-10"))).click()
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "mat-option[title='sügis']"))).click()
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "mat-select#mat-select-14"))).click()
astmed = WebDriverWait(driver, 3).until(lambda d: d.find_elements(By.CSS_SELECTOR,".mat-option-text"))
for i in astmed:
    if i.text == " bakalaureuseõpe ":
        i.click()
sleep(2)
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "div[class='cdk-overlay-container ois2-overlay-container']"))).click()
sleep(2)
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button[class='mat-focus-indicator mat-raised-button mat-button-base mat-primary'"))).click()
ained = WebDriverWait(driver, 3).until(lambda d: d.find_elements(By.CSS_SELECTOR,"div[class='col-12 col-xl-6 mt-3 ng-star-inserted']"))
eelmine = 0
for i in range(10):
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    sleep(0.2)

ained = driver.find_elements(By.CSS_SELECTOR, "div[class='col-12 col-xl-6 mt-3 ng-star-inserted']")
lingid = []
for aine in ained:
    a = aine.find_element(By.CSS_SELECTOR, "a")
    lingid.append(a.get_attribute('href'))

for link in lingid:
    lahku = link.split("/")
    print(lahku[-1])
------------------------------------------------------------------------------
registerbtns = driver.find_elements(By.CSS_SELECTOR, ".mat-slide-toggle-bar")
registerbtns[0].click()
moodulid = driver.find_elements(By.CSS_SELECTOR, "mat-expansion-panel")
for i in moodulid:
    try:
        print(i)
        i.click()
    except:
        print("error")

sleep(30)

button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "input#mat-slide-toggle-7-input"))).click()
sleep(random.uniform(1, 2))
username_input = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "class.mat-expansion-panel ng-tns-c102-184 ng-star-inserted"))).click()
username_input.clear()
sleep(random.uniform(1, 2))
username_input.send_keys(username)
sleep(random.uniform(1, 2))
password_input = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "input#password")))
password_input.clear()
sleep(random.uniform(1, 2))
password_input.send_keys(password)
sleep(random.uniform(1, 2))
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button[type='submit']"))).click()
sleep(random.uniform(3, 4))
driver.get('https://ois2.ut.ee/#/registrations') """

# rbtns = WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, "mat-chip")))
# for btn in rbtns:
#     try:
#         print(btn.text)
#     except:
#         print('no text')
#     if btn.text.find('23 kevad') != -1:
#         btn.click()
#         break

""" WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "#mat-checkbox-1"))).click()
a2 = random.uniform(0.5, 1)
sleep(a2)
registerbtns = driver.find_elements(By.CSS_SELECTOR, "button")
for r in registerbtns:
    print(r.text)
    if r.text.find('Registreeru õppeainetele') != -1:
        r.click
        print('clicked button!!!!!!!!!!!')
        break
print(datetime.now())
print(a2)
sleep(100) """