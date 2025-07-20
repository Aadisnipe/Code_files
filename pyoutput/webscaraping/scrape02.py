import httpx
from selectolax.parser import HTMLParser
import time

def get_html(baseurl,page):
    headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
    }
    resp = httpx.get(baseurl+str(f"page/{page}/"), headers=headers , follow_redirects=True)
    try:
        resp.raise_for_status()
    except httpx.HTTPStatusError as exc:
        print(f"Error response {exc.response.status_code} while requesting {exc.request.url!r}. page limit exceeded")
        return False

    html = HTMLParser(resp.text)
    return html

def parse_page(html):
    games = html.css("div.col-6.col-md-4.col-lg-3.mb-4.col-archive-item")
    for game in games:
        title_node = game.css_first("h3")
        title = title_node.text(strip=True) if title_node else "No Title"   #  ternary operator of python value for true condition if (true condition) else value for else
        # Look for all spans inside the game block, then pick the one likely to be the size
        spans = game.css("div.tech-info span")   # this gives a list of spans
        size = spans[-1].text(strip=True) + "B" if spans else "Unknown Size" 
        game_info={"Name":title,"Size":size}
        yield game_info



def main():
    start_time = time.time()
    url = "https://romspure.cc/roms/3ds/" # first page = https://romspure.cc/roms/3ds/
    for i in range(1,3):
        print(f'page {i}')
        html=get_html(url,i)
        if html is False:
            break
        data=parse_page(html)
        for game_info in data:
            print(game_info)
        time.sleep(1)
    end_time = time.time()
    time_elapsed=end_time-start_time
    print(f"\n Total time taken: {time_elapsed:.2f} seconds")
main()