from selenium import webdriver
from selenium.webdriver.edge.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC
import time

# Configurations
ROUTER_URL = "http://192.168.1.1/"
MAC_FILTER_URL = "http://192.168.1.1/macfilter.cgi"
USERNAME = "admin"
PASSWORD = "admin"
MAC_TO_BLOCK = "D0:54:2D:00:00:00"  # Replace with your target MAC
DESCRIPTION = "Blocked by script"

# Setup WebDriver
service = Service("C:/Users/Aditya Dev/Code_files/Projects/wifi_control/msedgedriver.exe")
driver = webdriver.Edge(service=service)
wait = WebDriverWait(driver, 10)

def block_mac():
    # Open router login page
    driver.get(ROUTER_URL)

    # Login
    wait.until(EC.presence_of_element_located((By.ID, "username"))).send_keys(USERNAME)
    driver.find_element(By.ID, "password").send_keys(PASSWORD)
    driver.find_element(By.XPATH, "//input[@type='submit']").click()
    print("[+] Logged in successfully")

    # Wait for login to complete and session to set
    time.sleep(3)

    # Navigate directly to MAC Filter page
    driver.get(MAC_FILTER_URL)
    print("[+] Navigated directly to MAC Filter page")

    # Interact with MAC Filter form
    Select(wait.until(EC.presence_of_element_located((By.NAME, "macfilter_mode")))).select_by_visible_text("Blocked")

    mac_input = driver.find_element(By.NAME, "mac")
    mac_input.clear()
    mac_input.send_keys(MAC_TO_BLOCK)

    desc_input = driver.find_element(By.NAME, "desc")
    desc_input.clear()
    desc_input.send_keys(DESCRIPTION)

    driver.find_element(By.XPATH, "//input[@value='Save']").click()
    print(f"[+] MAC {MAC_TO_BLOCK} blocked successfully.")

    time.sleep(3)
    driver.quit()

if __name__ == "__main__":
    try:
        block_mac()
    except Exception as e:
        print("[-] Error:", e)
        driver.quit()
