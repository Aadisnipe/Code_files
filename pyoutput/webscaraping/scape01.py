import httpx
from selectolax.parser import HTMLParser
import time

url = "https://romspure.cc/download/super-smash-bros-for-nintendo-3ds-2-34830/1"

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
}

resp = httpx.get(url, headers=headers)
html = HTMLParser(resp.text)
# time.sleep(10)
link=html.css_first("a btn.btn-primary.btn-block.mx-auto.mb-2")
print(link)
