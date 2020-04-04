const sha256 = require('crypto-js/sha256')

class Block {
    
    public index: number
    public timeStamp: Date = new Date()
    public data: object
    public hash: string = this.generateHash()
    public previousHash: string

    constructor(index: number, data: object){
        this.index = index
        this.data = data

    }

    generateHash(): string{
        return (sha256(this.index + this.previousHash + JSON.stringify(this.data) + this.timeStamp)).toString()
        
    }

}

export default Block