from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()
driver.maximize_window()
driver.get("http://www.google.com/ncr")
assert "Google" in driver.title
time.sleep(2)

searchBoxElement = driver.find_element_by_name("q")
searchBoxElement.clear()
searchBoxElement.send_keys("selenium")
searchBoxElement.send_keys(Keys.RETURN)
time.sleep(2)

# <title>selenium - Google Search</title>
assert "selenium - Google Search" in driver.title

time.sleep(5)
driver.close()
