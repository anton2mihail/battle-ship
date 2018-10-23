class Board {
  constructor() {
    this.height = 10;
    this.width = 10;
    this.columns = [
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
    this.rows = [
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
      .rows
      .forEach((el) => {
        this
          .rows
          .forEach((iEl) => {
            board.push([el, iEl]);
          })
      });
    return board;
  }

}

// const tester = () => {  let board = new Board();
// console.log(board.setBoard()); };
//
//tester();