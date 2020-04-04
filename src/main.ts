import Block from './Block'

const firstBlockData = { "id": 123, "data": "First Block data" }
const FirstBlock: Block = new Block(1, firstBlockData)

console.log(FirstBlock.hash)