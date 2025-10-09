from selenium import webdriver
from selenium.webdriver.edge.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
import time

# Edge WebDriver Setup
service = Service("C:/Users/Aditya Dev/Code_files/Projects/wifi_control/msedgedriver.exe")
driver = webdriver.Edge(service=service)

# Router Credentials and Target MAC
ROUTER_URL = "http://192.168.1.1/"
USERNAME = "admin"
PASSWORD = "admin"
MAC_TO_BLOCK = "D0:54:2D:00:00:00"  # Replace with your target MAC
DESCRIPTION = "Blocked by script"

def block_mac():
    driver.get(ROUTER_URL)
    time.sleep(2)

    # Step 1: Login
    driver.find_element(By.ID, "username").send_keys(USERNAME)
    driver.find_element(By.ID, "password").send_keys(PASSWORD)
    driver.find_element(By.XPATH, "//input[@type='submit']").click()
    time.sleep(3)
    print("[+] Logged in successfully")

    # Step 2: Switch to the left menu frame to find "MAC Filter"
    driver.switch_to.frame("leftFrame")  # Replace with actual name if different
    driver.find_element(By.LINK_TEXT, "MAC Filter").click()
    print("[+] Clicked MAC Filter")

    # Step 3: Switch to main content frame
    driver.switch_to.default_content()
    driver.switch_to.frame("mainFrame")  # Replace with actual name if different
    print("[+] Switched to MAC Filter frame")

    time.sleep(2)

    # Step 4: Fill the form to block MAC
    # You might need to inspect your router to get correct input/select names

    try:
        # Select 'Blocked' mode
        Select(driver.find_element(By.NAME, "macfilter_mode")).select_by_visible_text("Blocked")
        time.sleep(1)

        # Enter MAC Address
        driver.find_element(By.NAME, "mac").clear()
        driver.find_element(By.NAME, "mac").send_keys(MAC_TO_BLOCK)

        # Description
        driver.find_element(By.NAME, "desc").clear()
        driver.find_element(By.NAME, "desc").send_keys(DESCRIPTION)

        # Save the config
        driver.find_element(By.XPATH, "//input[@value='Save']").click()
        print(f"[+] MAC address {MAC_TO_BLOCK} is now BLOCKED.")

    except Exception as e:
        print("[-] Error during form fill or submit:", e)

    time.sleep(3)
    driver.quit()

block_mac()
