import Block from './Block'

class Blockchain {

    public index: number
    public blocks: Array<Block> = []

    constructor(index: number){
        this.index = index
        
    }

    getLastBlock(): Block{
        return this.blocks[this.blocks.length - 1]
    }

    addBlock(data: object){
        let index = this.index
        let previousHash = this.getLastBlock().hash

        const block = new Block(index, previousHash, data)

        this.index++
        this.blocks.push(block)

    }

    chainInit(): void{
        let index = this.index
        let firstHash = ''
        let firstData = {}

        const firstBlock = new Block(index, firstHash, firstData)
        this.blocks.push(firstBlock)
        this.index++

    }

}

export default Blockchain