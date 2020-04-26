import discord
from scraper import *
from bs4 import BeautifulSoup

client = discord.Client()

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author.bot: return

    if message.content.lower() == '$help':
        response = '''```$pastChampions: Get the past NBA Champions\n$standings: Get the current Standings\n$leagueleaders: Get the leaders in a statistical category```'''
        await message.channel.send(response)

    if message.content.lower() == '$standings':
        await message.channel.send('1 -> Eastern Conference\n2 -> Western Conference\n')
        
        response = await client.wait_for('message')
        response = str(response.content)

        if response.isdigit():
            response = int(response)
            if response > 2:
                return
        else:
            return

        await message.channel.send(currentStandings(response))
    
    if message.content.lower() == '$pastchampions':
        await message.channel.send('Enter how many years to present')
        response = await client.wait_for('message')
        response = str(response.content)

        if response.isdigit():
            response = int(response)
            if response > 42:
                return
        else:
            return

        await message.channel.send(pastChampions(response))

    if message.content.lower() == '$leagueleaders':

        selection_dictionary = {
            '1' : '**Points Per Game**\n',
            '2' : '**Rebounds Per Game**\n',
            '3' : '**Assists Per Game**\n',
            '4' : '**Steals Per Game**\n',
            '5' : '**Blocks Per Game**\n',
            '6' : '**Free Throw Percentage**\n'
        }

        await message.channel.send('Select\n1 -> Points\n2 -> Rebounds\n3 -> Assists\n4 -> Steals\n5 -> Blocks')

        response = await client.wait_for('message')
        response = str(response.content)

        if response.isdigit():
            response = int(response)
        else:
            return

        if response < 6 and response > 0:
            playerList = statsPerGame(response)
            players = str({k: playerList[k] for k in list(playerList)[:10]})
            players = players.replace('{','').replace('}', '').replace("'", "").replace(':', ' ').replace(',', '\n')
            players = selection_dictionary[str(response)] + players
            await message.channel.send(players)
        else:
            return
        
client.run('NzAyMDIxNTY0NTM5MDc2NjE5.XqXyEA.Vg0pdSJcpiq7Ch2k3sAPJq1lm0Q')