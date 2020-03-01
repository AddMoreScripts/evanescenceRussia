import os
from bs4 import BeautifulSoup
import requests as req
from urllib.parse import urlparse

testUrl = 'http://evanescence-rus.ru/songs/imaginary'


def generateMDFile(songFullUrl):

    songPathArray = songFullUrl.rpartition('/')[2]
    resp = req.get(songFullUrl)

    soup = BeautifulSoup(resp.text, 'html.parser')

    song = soup.select_one('.post')

    songtitle = song.select_one('.post-title h1').get_text()

    songInfo = song.select_one('ul').select('li')
    songInfoText = []

    for itemLi in songInfo:
        songInfoText.append(itemLi.get_text(strip=True))

    songDescrP = song.select('ul ~ p');
    songDescrMD = "";

    for itemP in songDescrP:
        songDescrMD += itemP.get_text(strip=True) + "\n\n"

    english = song.select_one('td:nth-child(1)')

    russian = song.select_one('td:nth-child(2)')

    if( english != None ):
        engOutput = english.wrap(soup.new_tag('div', **{'class':'song-lyric'}));
        engOutput.td.unwrap();
        engOutput.prettify()
    else:
        engOutput = ""


    if( russian != None ):
        rusOutput = russian.wrap(soup.new_tag('div', **{'class':'song-lyric'}));
        rusOutput.td.unwrap();
        rusOutput.prettify()
    else:
        rusOutput = ""

    resultMarkdown = """---
type: "song"
title: "%s"
path: '%s'
list: %s
---

%s

## <i class="fas fa-dove"></i> Текст и перевод песни

<div class="song-wrap">

%s

%s

</div>
    """ % (songtitle, songPathArray, songInfoText, songDescrMD, engOutput, rusOutput)

    f = open(songPathArray + '.md', 'w', encoding="utf-8")
    f.write(resultMarkdown)
    f.close()





fullresp = req.get('http://evanescence-rus.ru/lyric')

fullList = BeautifulSoup(fullresp.text, 'html.parser')

songURL = fullList.select('.view-content td a')

for item in songURL:
    generateMDFile("http://evanescence-rus.ru" + item['href'])