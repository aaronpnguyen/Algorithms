teams = []
while len(teams) < 14:
    teamName = input("Team UCF is playing: ")
    points = input("Points scored against UCF: ")
    game = {teamName: points}
    teams.append(game)
    print(f"{teamName} - {points}")