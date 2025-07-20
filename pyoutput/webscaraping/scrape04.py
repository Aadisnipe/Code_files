import httpx
from selectolax.parser import HTMLParser
import time
from dataclasses import asdict,dataclass,fields
import csv

@dataclass
class Game:
    title: str | None
    size: str | None
    d_url: dict | None

def group_in_threes(lst):
    return [tuple(lst[i:i+3]) for i in range(0, len(lst), 3)]

def get_html(url,**kwargs):

    headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
    }
    if kwargs.get("page"):
        resp = httpx.get(url+str(f"page/{kwargs.get('page')}/"), headers=headers , follow_redirects=True)
    else:
        resp = httpx.get(url, headers=headers , follow_redirects=True)
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
        try:
            yield game.css_first("a").attributes["href"]
        except:
            None

def extract_text(html,sel):
    try:
        return html.css_first(sel).text(strip=True)
    except:
        None    

def dowmload_url(html):
    link = html.css_first("a.btn.btn-primary")
    if link:
        d_linkk=link.attributes.get("href")
        ht=get_html(d_linkk)
        return down_page01(ht)
    return None

def parse_each_game_page(html):
    find_size=html.css("td")
    size_value= find_size[-2].text(strip=True) + "B" if find_size else "Unknown Size"
    new_game=Game(
        title=html.css_first("h1").text(strip=True) if html.css_first("h1") else "No title",
        size=size_value,
        d_url=dowmload_url(html),
        )
    return asdict(new_game)

def down_page01(html):
    values = []
    t = []
    games = html.css("td")
    gamesl = html.css("td a")

    for game in gamesl:
        values.append(game.attributes["href"])

    for game in games:
        t.append(game.text(strip=True))

    keys = group_in_threes(t)
    
    # Fix: Make keys JSON-serializable
    my_dict = {", ".join(k): v for k, v in zip(keys, values)} #looping through the dictionary and replacing keys of the(k) dictionary (,) with "," 
    
    return my_dict

def export_to_csv(games):  #games conatains list of dictiionary
    field_name = [field.name for field in fields(Game)]
    with open("3ds.csv", "w", encoding="utf-8", newline='') as f:
        writer = csv.DictWriter(f, fieldnames=field_name) # one dictionary at a time 
        writer.writeheader()
        for game in games:
            writer.writerow(game)

def main():
    game_info=[]
    start_time = time.time()
    url = "https://romspure.cc/roms/3ds/" # first page = https://romspure.cc/roms/3ds/  https://romspure.cc/roms/3ds/pokemon-x-0706/
    for i in range(1,2):
        print(f'page {i}')
        html=get_html(url,page=i)
        if html is False:
            break
        games=parse_page(html)
        for game in games:
            html=get_html(game)
            game_info.append(parse_each_game_page(html))
            time.sleep(0.01)
        export_to_csv(game_info)
    end_time = time.time()
    time_elapsed=end_time-start_time
    print(f"\n Total time taken: {time_elapsed:.2f} seconds")

main()