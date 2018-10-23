class Ship {
  constructor(name, length, pos, orientation) {
    this._name = name;
    this._length = length;
    this._position = pos;
    this._orientation = orientation;
  }

  get Position() {
    return this._position;
  }
  set Position(newPos) {
    this._position = newPos;
  }
  get Orientation() {
    return this.orientation;
  }
  set Orientation(newOr) {
    this.orientation = newOr;
  }
  checkVertical(pos) {}

  moveUp() {
    if (this.orientation === 'vertical') {
      let newPos = this
        .position
        .map(el => {
          if (el[1] === 0) {
            return;
          }

          return el[1] - 1;

        });
      if (newPos) {
        this.setPosition(newPos);
      }
    } else {}
    return this.getPosition();
  }
}

const shipTester = () => {
  let ship = new Ship('R', '3', [
    [
      0, 0
    ],
    [
      0, 1
    ],
    [0, 2]
  ], 'vertical');
  console.log(ship.moveUp());
};
shipTester();