import Block from "@/model/Block";
import Team from "@/model/Team";
import { atom } from "jotai";

//East Blocks
export const eastRound1Atom = atom<Map<number, Block>>(new Map<number, Block>([
    [1, new Block(new Team("Miami", "Fire", "MIA"), new Team("Indiana", "Racers", "IND"))],
    [2, new Block(new Team("Boston", "Clover Leaves", "BOS"), new Team("New York", "Triangles", "NY"))],
    [3, new Block(new Team("Detroit", "Punchers", "DET"), new Team("Cleveland", "Knights", "CLE"))],
    [4, new Block(new Team("Chicago", "Horns", "CHI"), new Team("Utah", "Angels", "UTA"))]
]));
export const eastRound2Atom = atom<Map<number, Block>>(new Map<number, Block>([
    [1, new Block()],
    [2, new Block()]
]));
export const eastRound3Atom = atom<Map<number, Block>>(new Map<number, Block>([
    [1, new Block()]
]));

//West Blocks
export const westRound1Atom = atom<Map<number, Block>>(new Map<number, Block>([
    [1, new Block(new Team("San Antonio", "Rocks", "SA"), new Team("Sacramento", "Crowns", "SAC"))],
    [2, new Block(new Team("Houston", "Reds", "HOU"), new Team("Dallas", "Unicorns", "DAL"))],
    [3, new Block(new Team("Los Angeles", "Spartans", "LAS"), new Team("Los Angeles", "Zone", "LAZ"))],
    [4, new Block(new Team("Oklahoma City", "Clouds", "OKC"), new Team("New Orleans", "Wings", "NO"))],
]));
export const westRound2Atom = atom<Map<number, Block>>(new Map<number, Block>([
    [1, new Block()],
    [2, new Block()]
]));
export const westRound3Atom = atom<Map<number, Block>>(new Map<number, Block>([
    [1, new Block()]
]));

//Finals Block
export const finalsAtom = atom<Map<number, Block>>(new Map<number, Block>([
    [1, new Block()]
]));

//Boolean to show the champion
export const showChampionAtom = atom<{status: boolean, winner: Team | null}>({status: false, winner: null});
