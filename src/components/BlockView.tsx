'use client'
import { showChampionAtom } from "@/atoms";
import BlockController from "@/controller/BlockController";
import RoundController from "@/controller/RoundController";
import { useSetAtom } from "jotai";

interface Props {
    blockType: string,
    blockIndex: number
}

const BlockView = ({blockIndex, blockType}: Props) => {
    const [round, setRound] = RoundController.getRound(blockType);
    const [nextRound, setNextRound] = RoundController.getNextRound(blockType);
    const setChampion = useSetAtom(showChampionAtom);

    const block = round.get(blockIndex);

    const simulate = () => {
        const {result, winner} = BlockController.simulate(round, blockIndex, blockType);
        setRound(result);
        if (winner !== undefined) {
            const { next, champion } = BlockController.advance(blockIndex, nextRound, winner, blockType, round);

            if (champion) {
                console.log(`Champion: ${champion}`);
                setChampion({status: true, winner: champion});
            } else if (next) {
                setNextRound(next);
            }
        }
    }

    return (
        <div className="tw-w-[250px]">
            <div className="tw-flex tw-items-center tw-border-[1px] tw-border-black">
                <span className="tw-border-r-[1px] tw-border-black tw-px-1">
                    {block?.getTeam1Wins()}
                </span>
                <span className="tw-flex tw-flex-1 tw-justify-center tw-items-center">
                    {
                        block?.getTeam1() !== undefined ?
                        (
                            <span>
                                {block.getTeam1()?.getCity()} {block.getTeam1()?.getName()}
                            </span>
                        ):
                        (
                            <span>
                                TBD
                            </span>
                        )
                    }
                </span> 
            </div>
            <div className="tw-flex tw-items-center tw-border-[1px] tw-border-black">
                <span className="tw-border-r-[1px] tw-border-black tw-px-1">
                    {block?.getTeam2Wins()}
                </span>
                <span className="tw-flex tw-flex-1 tw-justify-center tw-items-center">
                    {
                        block?.getTeam2() !== undefined ?
                        (
                            <span>
                                {block.getTeam2()?.getCity()} {block.getTeam2()?.getName()}
                            </span>
                        ):
                        (
                            <span>
                                TBD
                            </span>
                        )
                    }
                </span>
            </div>
            <div className="tw-flex tw-justify-center tw-items-center tw-bg-green-500 tw-cursor-pointer hover:tw-brightness-95" 
            onClick={e => simulate()}>
                <span className="tw-font-bold">
                    Simulate
                </span>
            </div>
        </div>
    );
}

export default BlockView;