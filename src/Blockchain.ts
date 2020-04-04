import Block from './Block'

class Blockchain {

    public index: number
    public blocks: Array<Block>

    constructor(index: number){
        this.index = index
        
    }

}

export default Blockchain