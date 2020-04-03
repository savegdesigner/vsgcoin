class Block {
    
    public index: number
    public timeStamp: Date = new Date()
    public data: object
    public hash: string
    public previousHash: string

    constructor(index: number, data: object){
        this.index = index
        this.data = data

    }

    generateHash(): string{
        return 'Hash'
        
    }

}

export default Block