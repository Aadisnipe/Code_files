import xml.etree.ElementTree as ET
 
# filepath: /home/deb/Desktop/animelist_1744817394_-_18370671.xml
# Load and parse the XML file
tree = ET.parse('/home/deb/Desktop/animelist_1744817394_-_18370671.xml')
root = tree.getroot()

# Extract and format the anime data
anime_list = []
for anime in root.findall('anime'):
    title = anime.find('series_title').text
    anime_type = anime.find('series_type').text
    episodes = anime.find('series_episodes').text
    status = anime.find('my_status').text
    score = anime.find('my_score').text

    # Append formatted data to the list
    anime_list.append(f"{title} - {anime_type} ({episodes} episodes) - {status} (Score: {score})")

# Print the clean list
for anime in anime_list:
    print(anime)