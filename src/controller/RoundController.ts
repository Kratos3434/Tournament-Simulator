import { eastRound1Atom, eastRound2Atom, eastRound3Atom, finalsAtom, westRound1Atom, westRound2Atom, westRound3Atom } from "@/atoms";
import { useAtom } from "jotai";

class RoundController {
    public static getRound(roundType: string) {
        switch (roundType) {
            case "e1":
                return useAtom(eastRound1Atom);
            case "e2":
                return useAtom(eastRound2Atom);
            case "e3":
                return useAtom(eastRound3Atom);
            case "w1":
                return useAtom(westRound1Atom);
            case "w2":
                return useAtom(westRound2Atom);
            case "w3":
                return useAtom(westRound3Atom);
            case "finals":
                return useAtom(finalsAtom);
            default:
                return useAtom(eastRound1Atom);
        }
    }

    public static getNextRound(roundType: string) {
        switch (roundType) {
            case "e1":
                return useAtom(eastRound2Atom);
            case "e2":
                return useAtom(eastRound3Atom);
            case "w1":
                return useAtom(westRound2Atom);
            case "w2":
                return useAtom(westRound3Atom);
            case "w3":
                return useAtom(finalsAtom);
            case "e3":
                return useAtom(finalsAtom);
            default:
                return useAtom(eastRound1Atom);
        }
    }
}

export default RoundController;