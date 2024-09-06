import Team from "./Team";

class Block {
    private team1?: Team;
    private team2?: Team;
    private t1Wins: number;
    private t2Wins: number;
    private static targetWins: number = 2;

    constructor(team1?: Team, team2?: Team, t1Wins: number = 0, t2Wins: number = 0) {
        this.team1 = team1;
        this.team2 = team2;
        this.t1Wins = t1Wins;
        this.t2Wins = t2Wins;
    }

    public getTeam1() {
        return this.team1;
    }

    public getTeam2() {
        return this.team2;
    }

    public getTeam1Wins() {
        return this.t1Wins;
    }

    public getTeam2Wins() {
        return this.t2Wins;
    }

    public setTeam1(team1: Team) {
        this.team1 = team1;
    }

    public setTeam2(team2: Team) {
        this.team2 = team2;
    }

    public setTeam1Wins(win: number) {
        this.t1Wins = win;
    }

    public setTeam2Wins(win: number) {
        this.t2Wins = win;
    }

    public static setTargetWins(targetWins: number) {
        Block.targetWins = targetWins;
    }

    public static getTargetWins() {
        return Block.targetWins;
    }
}

export default Block;