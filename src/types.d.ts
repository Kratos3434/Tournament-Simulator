export interface ITeam {
    city: string,
    name: string,
    initial: string,
    logo: string
}

export interface IBlock {
    team1: ITeam,
    team2: ITeam,
    team1Wins: number,
    team2Wins: number,
    targetWins: number
}

export interface IRound {
    blocks: IBlock[]
}
