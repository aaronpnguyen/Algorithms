function tournamentWinner(competitions, results) {
    let winner = ""
    let scores = {}
  
    for (let i = 0; i < competitions.length; i++) {
      const [home, away] = competitions[i];
      const winningTeam = results[i] == 1? home: away;
  
      scores[winningTeam] = (scores[winningTeam] ?? 0) + 3;
      if (scores[winningTeam] > (scores[winner] ?? 0)) winner = winningTeam
    }
    
    return winner;
  }