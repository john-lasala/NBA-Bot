import requests
import datetime
import pandas as pd
import texttable as ttable
from bs4 import BeautifulSoup
from operator import itemgetter
from collections import OrderedDict


def currentStandings(response):
    URL = 'https://www.basketball-reference.com/leagues/NBA_2020_standings.html'
    headers = {'User-Agent': 'Mozilla/5.0'}
    result = requests.get(URL, headers = headers)

    try:
        result.raise_for_status()
    except requests.exceptions.RequestException as e:
        print (e)
        return

    # Convert HTML data to list of tables
    soup = BeautifulSoup(result.content, 'html.parser')
    table = pd.read_html(result.text)
    east = table[0].to_string(index=False)
    east = east.split('\n')

    for i in range(len(east)):
        east[i] = east[i].lstrip()
        newStr = east[i].split(' ')

        if i == 0:
            east[i] = newStr[:9]
            east[i].insert(0, '**')
            east[i].append('**')
        else:
            east[i] = newStr[:7]

        east[i] = (' ').join(east[i])

    east = '\n'.join(east)

    west = table[1].to_string(index=False)
    west = west.split('\n')

    for i in range(len(west)):
        west[i] = west[i].lstrip()
        newStr = west[i].split(' ')

        if i == 0:
            west[i] = newStr[:9]
            west[i].insert(0, '**')
            west[i].append('**')
        else:
            west[i] = newStr[:7]

        west[i] = (' ').join(west[i])


    west = '\n'.join(west)

    if response == 1:
        return east
    elif response == 2:
        return west
    else:
        return

def pastChampions(response):
    URL = 'https://www.basketball-reference.com/playoffs/'
    headers = {'User-Agent': 'Mozilla/5.0'}
    result = requests.get(URL, headers = headers)

    # Error handling for invalid URL
    try:
        result.raise_for_status()
    except requests.exceptions.RequestException as e:
        print (e)
        return

    soup = BeautifulSoup(result.content, 'html.parser')
    champs = []
    years = []
    teams = []
    time = datetime.datetime.now()
    limit = time.year - 1976 + 1
    attempts = 0
    
    # Getting data from teams since the NBA-ABA Merger that took place in 1976
    for team in soup.find_all('td', {'data-stat': 'champion'}):
        attempts += 1
        if attempts == limit:
            break
        teams.append(team.text)

    attempts = 0

    for year in soup.find_all('th', {'data-stat': 'year_id'}):
        attempts += 1
        if attempts == limit+1:
            break
        years.append(year.text)

    for i in range(1, len(years)):
        years[i-1] = years[i]

    for i in range(response):
        champs.append(teams[i])

    returnString = ''

    for i in range(response):
        returnString = returnString + str(champs[i]) + ' ' + str(years[i]) + '\n'

    return returnString

def statsPerGame(selection):
    headers = {'User-Agent': 'Mozilla/5.0'}
    result = requests.get('https://www.basketball-reference.com/leagues/NBA_2020_per_game.html', headers = headers)
    # Error handling for invalid URLs
    try:
        result.raise_for_status()
    except requests.exceptions.RequestException as e:
        print (e)
        return

    # Get HTML from webpage
    soup = BeautifulSoup(result.content, 'html.parser')
    stat_list = []
    player_list = []

    # Download the user-requested data based on their input
    if selection == 1:
        for Points in soup.find_all('td', {'data-stat' : 'pts_per_g'}):
            stat_list.append(Points.text)
    if selection == 2:
        for Rebounds in soup.find_all('td', {'data-stat' : 'trb_per_g'}):
            stat_list.append(Rebounds.text)
    if selection == 3:
        for Assists in soup.find_all('td', {'data-stat' : 'ast_per_g'}):
            stat_list.append(Assists.text)
    if selection == 4:
        for Steals in soup.find_all('td', {'data-stat' : 'stl_per_g'}):
            stat_list.append(Steals.text)
    if selection == 5:
        for Blocks in soup.find_all('td', {'data-stat' : 'blk_per_g'}):
            stat_list.append(Blocks.text)
    if selection == 6:
        for player in soup.find_all('td', {'data-stat' : 'player'}):
            player_list.append(player.text)

        for freeThrow in soup.find_all('td', {'data-stat' : 'ft_pct'}):
            stat_list.append(freeThrow.text)

        for i in range(0, len(stat_list)):
            if stat_list[i]:
                stat_list[i] = float(stat_list[i]) * 100.0
            else:
                stat_list[i] = 0.0

        # Making a sorted and ordered dictonary for free throw percentages
        dictionary = {player_list[i]: stat_list[i] for i in range(len(player_list))}
        sortedList = OrderedDict(sorted(dictionary.items(), key=itemgetter(1), reverse=True))

        return sortedList

    for player in soup.find_all('td', {'data-stat' : 'player'}):
        player_list.append(player.text)

    for i in range(0, len(stat_list)):
        if stat_list[i]:
            stat_list[i] = float(stat_list[i])
        else:
            stat_list[i] = 0
    
    # Making a sorted and ordered dictionary for any other data reuqested
    dictionary = {player_list[i]: stat_list[i] for i in range(len(player_list))}
    sortedList = OrderedDict(sorted(dictionary.items(), key=itemgetter(1), reverse=True))

    return sortedList