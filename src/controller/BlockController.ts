import Block from "@/model/Block";
import Team from "@/model/Team";

class BlockController {
    public static simulate(round: Map<number, Block>, blockIndex: number, roundType: string) {
        const tempRound = new Map(round);

        const tempBlock = tempRound.get(blockIndex);

        let winner: Team | undefined = undefined;

        if (tempBlock?.getTeam1() === undefined) {
            return {
                result: tempRound,
                winner: winner
            }
        }

        if (tempBlock.getTeam2() === undefined) {
            return {
                result: tempRound,
                winner: winner
            }
        }

        if (tempBlock?.getTeam1Wins() !== Block.getTargetWins() && tempBlock?.getTeam2Wins() !== Block.getTargetWins()) {
            //Randomize between 1 & 2
            const randomNumber = Math.floor(Math.random() * Block.getTargetWins()) + 1;
            if (randomNumber === 1) {
                tempBlock?.setTeam1Wins(tempBlock.getTeam1Wins() + 1);
            } else {
                tempBlock?.setTeam2Wins(tempBlock.getTeam2Wins() + 1);
            }

            if (tempBlock) {
                tempRound.set(blockIndex, tempBlock);
            }

        }

        if (tempBlock.getTeam1Wins() === Block.getTargetWins()) {
            winner = tempBlock.getTeam1();
        }

        if (tempBlock.getTeam2Wins() === Block.getTargetWins()) {
            winner = tempBlock.getTeam2();
        }

        return {
            result: tempRound,
            winner: winner
        }
    }

    public static advance(blockIndex: number, round: Map<number, Block>, winner: Team, blockType: string, currentRound: Map<number, Block>) {
        const tempRound = new Map(round);

        if (blockType === "finals") {
            const block = currentRound.get(1);

            if (block?.getTeam1Wins() === Block.getTargetWins()) {
                return {
                    next: null,
                    champion: block.getTeam1()
                }
            } else if (block?.getTeam2Wins() === Block.getTargetWins()) {
                return {
                    next: null,
                    champion: block.getTeam2()
                }
            }
        }
        else if (blockType === "e3" || blockType === "w3") {
            if (blockType === "e3") {
                tempRound.set(1, new Block(winner, tempRound.get(1)?.getTeam2()));
            } else if (blockType === "w3") {
                tempRound.set(1, new Block(tempRound.get(1)?.getTeam1(), winner));
            }

            if (tempRound.get(1)?.getTeam1() !== undefined && tempRound.get(1)?.getTeam2() !== undefined) {
                Block.setTargetWins(3);
            }
        } else {
            if (blockIndex <= 2) {
                if (blockIndex === 1) {
                    tempRound.set(1, new Block(winner, tempRound.get(1)?.getTeam2()));
                } else if (blockIndex === 2) {
                    tempRound.set(1, new Block(tempRound.get(1)?.getTeam1(), winner));
                }
            } else {
                if (blockIndex === 3) {
                    tempRound.set(2, new Block(winner, tempRound.get(2)?.getTeam2()));
                } else if (blockIndex === 4) {
                    tempRound.set(2, new Block(tempRound.get(2)?.getTeam1(), winner));
                }
            }
        }

        // if (blockType === "finals" && tempRound.get(1)?.getTeam1() !== undefined && tempRound.get(1)?.getTeam1() !== undefined) {
        //     Block.setTargetWins(3);
        // }

        return {
            next: tempRound,
            champion: null
        }
    }
}

export default BlockController;