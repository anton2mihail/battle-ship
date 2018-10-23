class Board {
  constructor() {
    this._height = 10;
    this._width = 10;
    this._columns = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J'
    ];
    this._rows = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ];
  }

  setBoard() {
    let board = [];
    this
      ._rows
      .forEach((el) => {
        this
          ._rows
          .forEach((iEl) => {
            board.push([el, iEl]);
          })
      });
    return board;
  }

}

const tester = () => {
  let board = new Board();
  console.log(board.setBoard());
};
tester();