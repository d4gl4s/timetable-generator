from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.core.utils import ChromeType
from datetime import datetime
from selenium.webdriver.chrome.service import Service
from selenium import webdriver
from time import sleep
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
import os
import sys

chromiumdriver = ChromeDriverManager(chrome_type=ChromeType.CHROMIUM).install()
driver = webdriver.Chrome(service=Service(chromiumdriver))
driver.get('https://ois2.ut.ee/#/courses')

button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "div[id='mat-select-value-1']"))).click()
sleep(1)
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "mat-option[title='2023/2024']"))).click()
sleep(1)
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button[class='mat-focus-indicator full-width mb-2 mat-stroked-button mat-button-base mat-primary ng-star-inserted']"))).click()
sleep(1)

#button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "#mat-select-value-3"))).click()
#button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "mat-option[title='arvutiteaduse instituut (LTAT)']"))).click()
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "mat-select#mat-select-10"))).click()
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "mat-option[title='sügis']"))).click()
sleep(1)
button = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button[class='mat-focus-indicator mat-raised-button mat-button-base mat-primary'"))).click()
courses = WebDriverWait(driver, 3).until(lambda d: d.find_elements(By.CSS_SELECTOR,"div[class='col-12 col-xl-6 mt-3 ng-star-inserted']"))
eelmine = 0 
sleep(1)
links = set()
for i in range(100):
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
        with open(os.path.join(sys.path[0], "linksAll.txt"), "w") as w:
            for link in links:
                try:
                    apart = link.split("/")
                    w.write(apart[-1]+"\n")
                except:
                    pass
        break