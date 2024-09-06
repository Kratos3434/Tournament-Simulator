'use client'

import { showChampionAtom } from "@/atoms";
import { useAtom } from "jotai";

const Champion = () => {
    const [champion, setChampion] = useAtom(showChampionAtom);

    return (
        <div className="tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center" 
        onClick={e => setChampion({status: false, winner: null})}>
            <div className="tw-px-[16px] tw-py-[8px] tw-bg-gray-400 tw-w-[500px] tw-h-[500px] tw-rounded-xl tw-shadow-md" 
            onClick={e => e.stopPropagation()}>
                <div className="tw-flex tw-justify-end">
                    <span className="tw-font-bold tw-text-[20px] tw-cursor-pointer" 
                    onClick={e => setChampion({status: false, winner: null})}>
                        X
                    </span>
                </div>
                <p className="tw-font-bold tw-text-[50px] tw-text-center">
                    Champion:
                </p>

                <div className="tw-flex tw-flex-col tw-items-center tw-text-[30px] tw-mt-10 tw-font-bold">
                    <p>
                        {champion.winner?.getCity()}
                    </p>
                    <p>
                        {champion.winner?.getName()}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Champion;