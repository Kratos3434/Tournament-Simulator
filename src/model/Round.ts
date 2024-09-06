import Block from "./Block";

class Round {
    private blocks: Block[];

    constructor(blocks: Block[] = []) {
        this.blocks = blocks;
    }

    public getBlock(index: number) {
        return this.blocks[index];
    }

    public addBlock(block: Block) {
        this.blocks.push(block);
    }

    public size() {
        return this.blocks.length;
    }
}

export default Round;