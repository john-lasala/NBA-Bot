import React from 'react';
import './App.css';

const App = props => {

  var buttonStyles = {
    color: 'hsl(14, 100%, 53%)',
    fontSize: '18px'
  }
  return (
<body>
    <div class="box">
        <h1>
            About
        </h1>
        <p>
            NBA-Bot is a Discord bot created in Python that scrapes data from basketball-reference.
            It shows up to date standings, statistics, and the past NBA champions.
            This Bot has been created by a NBA fan, and is for all of us NBA fans out there. 
            This project is still currently ongoing, as I add more whenever I have some free time.
            It currently supports 3 commands: PastChampions, CurrentStandings, and LeagueLeaders (explained below).
            If you have any suggestions, feel free to message me on any of the social media platforms shown below!
        </p>
        <section>
            <a href="https://discordapp.com/oauth2/authorize?client_id=702021564539076619&amp;scope=bot&amp;permissions=8">
            <button class="button is-link is-outlined" target="_blank">Add to Discord</button></a>
            <a href="https://github.com/john-lasala/NBA-Bot">
            <button class="button is-link is-outlined" target="_blank">GitHub</button>
            </a>
        </section>
        <h1 class="commands">
            NBA-Bot's Commands
        </h1>
        <table>
            <thead>
                <tr class="firstRow">
                    <th>Command</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>$pastChampions</th>
                    <td>Gives a list of the past ten champions with their respective year</td>
                </tr>
                <tr>
                    <th>$currentStandings</th>
                    <td>Shows the current year's standings, user chooses conference
                        <ul>
                            <strong>Here are the options:</strong>
                            <li><i class="fas fa-basketball-ball" style={buttonStyles}></i> Eastern Conference</li>
                            <li><i class="fas fa-basketball-ball" style={buttonStyles}></i>Western Conference</li>
                        </ul>
                </td>
                </tr>
                <tr>
                    <th>$leagueleaders</th>
                    <td>Shows the league leaders for a statistical category, user then chooses which one will be displayed
                        <br/>
                        <strong>Here are the options:</strong>
                        <ul>
                            <li><i class="fas fa-basketball-ball" style={buttonStyles}></i> Points</li>
                            <li><i class="fas fa-basketball-ball" style={buttonStyles}></i> Rebounds</li>
                            <li><i class="fas fa-basketball-ball" style={buttonStyles}></i> Assists</li>
                            <li><i class="fas fa-basketball-ball" style={buttonStyles}></i> Steals</li>
                            <li><i class="fas fa-basketball-ball" style={buttonStyles}></i> Blocks</li>
                            <li><i class="fas fa-basketball-ball" style={buttonStyles}></i> Free Throw Percentage</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="bottom">
            Connect with me: 
            <span>  
                <a href="https://twitter.com/JohnLaLaLasala" target="_blank"><i class="fab fa-twitter icons"></i></a>
            </span>
            <span>
                <a href="https://www.linkedin.com/in/johnblasala/" target="_blank"><i class="fab fa-linkedin-in icons"></i></a>
            </span>
            <span>
                <a href="https://github.com/john-lasala" target="_blank"><i class="fab fa-github icons"></i></a>
            </span>
        </div>
    </div>
</body>
  );
}

export default App;
