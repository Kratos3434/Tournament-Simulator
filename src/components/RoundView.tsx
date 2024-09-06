'use client'

import RoundController from "@/controller/RoundController";
import React from "react";
import BlockView from "./BlockView";

interface Props {
    roundType: string
}

const RoundView = ({roundType}: Props) => {
    const [round, setRound] = RoundController.getRound(roundType);

    return (
        <div className="tw-flex tw-flex-col tw-gap-5">
            {
                Array.from(round.entries()).map(([key, value]) => {
                    return (
                        <React.Fragment key={key}>
                            <BlockView blockIndex={key} blockType={roundType} />
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default RoundView;