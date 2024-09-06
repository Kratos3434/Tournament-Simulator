'use client'
import { useAtomValue } from "jotai";
import Champion from "./Champion";
import RoundView from "./RoundView";
import { showChampionAtom } from "@/atoms";

const Home = () => {
    const champion = useAtomValue(showChampionAtom);

    return (
        <div className="tw-w-full tw-flex tw-gap-20">
            {/* <BlockView blockIndex={2} blockType="e1" /> */}
            <div className="tw-flex tw-flex-col tw-gap-10 tw-w-fulll">
                <h1 className="tw-text-[25px] tw-font-extrabold tw-text-blue-500">East</h1>
                <div className="tw-flex tw-gap-10">
                    <RoundView roundType="e1" />
                    <div className="tw-flex tw-items-center">
                        <RoundView roundType="e2" />
                    </div>
                    <div className="tw-flex tw-items-center">
                        <RoundView roundType="e3" />
                    </div>
                </div>
                <h2 className="tw-text-[25px] tw-font-extrabold tw-text-red-600">West</h2>
                <div className="tw-flex tw-gap-10">
                    <RoundView roundType="w1" />
                    <div className="tw-flex tw-items-center">
                        <RoundView roundType="w2" />
                    </div>
                    <div className="tw-flex tw-items-center">
                        <RoundView roundType="w3" />
                    </div>
                </div>
            </div>

            <div className="tw-flex tw-items-center">
                <RoundView roundType="finals" />
            </div>

            {champion.status && <Champion />}
        </div>
    )
}

export default Home;