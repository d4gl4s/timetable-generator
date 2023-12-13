from datetime import datetime
from selenium.webdriver.chrome.service import Service
from selenium import webdriver
from time import sleep
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
import os
import sys

os.environ['PATH'] = f'{os.environ["PATH"]};C:\\Webdrivers\\'
driver = webdriver.Firefox()

driver.get('https://ois2.ut.ee/#/courses')

button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button[class='full-width mb-2 mdc-button mdc-button--outlined mat-mdc-outlined-button mat-primary mat-mdc-button-base ng-star-inserted']"))).click()
button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "mat-select[id='mat-select-8']"))).click()
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "mat-option[title='2023/2024']"))).click()
sleep(1)
button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "div[id='mat-select-value-11']"))).click()
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "mat-option[title='kevad']"))).click()
sleep(1)
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button[class='mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base']"))).click()
sleep(1)

#button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "#mat-select-value-3"))).click()
#button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "mat-option[title='arvutiteaduse instituut (LTAT)']"))).click()
"""
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "mat-select#mat-select-10"))).click()
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "mat-option[title='sügis']"))).click()
sleep(1)
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button[class='mat-focus-indicator mat-raised-button mat-button-base mat-primary'"))).click()
"""
courses = WebDriverWait(driver, 3).until(lambda d: d.find_elements(By.CSS_SELECTOR,"div[class='col-12 col-xl-6 mt-3 ng-star-inserted']"))
eelmine = 0 
sleep(1)
links = set()
for i in range(1000):
    try:
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        courses = driver.find_elements(By.CSS_SELECTOR, "div[class='col-12 col-xl-6 mt-3 ng-star-inserted']")
        for course in courses:
            try:
                a = course.find_element(By.CSS_SELECTOR, "a")
                links.add(a.get_attribute('href'))
            except:
                pass
    except:
        with open(os.path.join(sys.path[0], "linksB.txt"), "w") as w:
            print("written1")
            for link in links:
                try:
                    apart = link.split("/")
                    w.write(apart[-1]+"\n")
                except:
                    pass
        break
with open(os.path.join(sys.path[0], "linksA.txt"), "w") as w:
    print("written2")
    for link in links:
        try:
            apart = link.split("/")
            w.write(apart[-1]+"\n")
        except:
            pass