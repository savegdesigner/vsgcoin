import Block from './Block'
import Blockchain from './Blockchain'

const firstBlockchain = new Blockchain(1)

let data = {data: 'test'}

firstBlockchain.chainInit()
firstBlockchain.addBlock(data)

console.log(firstBlockchain)
