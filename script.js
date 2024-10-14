const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];


function Player(name, symbol) {
    this.name = name;
    this.symbol = symbol;

    function placeSymbol(x, y) {
        return board[x][y] = symbol;
    }
    
    return {name, placeSymbol}
}


const game = (() => {
    let player = Player('José', 'X');
    let computer = Player('Computer', 'O');

})();

