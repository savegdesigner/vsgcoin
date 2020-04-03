var Block = /** @class */ (function () {
    function Block(index, data) {
        this.timeStamp = new Date();
        this.index = index;
        this.data = data;
    }
    Block.prototype.generateHash = function () {
        return 'Hash';
    };
    return Block;
}());
export default Block;
