import { Direction, IPosition } from "./interface";

export class MaqeBot {
  input: string[];
  x: number;
  y: number;
  direction: Direction;

  constructor(input: any) {
    this.input = [...input];
    this.x = 0;
    this.y = 0;
    this.direction = Direction.North;
  }

  run() {
    const preparedData = this.prepareData(this.input);
    const position = this.findPosition(preparedData);
    const result = this.getDisplayResult(position);
    return result;
  }

  prepareData(input: string[]): string | number[] {
    const result = input.reduce((prev: any[], current: any) => {
      if (isNaN(current)) {
        prev = [...prev, current];
      } else {
        const lastIndex = prev.length - 1;
        const lastItem = prev[lastIndex];
        if (isNaN(lastItem)) {
          const newValueNumber = Number(current);
          prev = [...prev, newValueNumber];
        } else {
          const newValue = lastItem + current;
          const newValueNumber = Number(newValue);
          prev[lastIndex] = newValueNumber;
        }
      }

      return prev;
    }, []);

    return result;
  }

  findPosition(input: string | number[]): IPosition {
    for (const item of input) {
      if (Number.isInteger(item)) {
        this.move(item);
      } else {
        this.changeDirection(item);
      }
    }

    return {
      X: this.x,
      Y: this.y,
      Direction: this.direction,
    };
  }

  move(distance: any) {
    switch (this.direction) {
      case Direction.North:
        this.y += distance;
        break;
      case Direction.East:
        this.x += distance;
        break;
      case Direction.West:
        this.x -= distance;
        break;
      case Direction.South:
        this.y -= distance;
        break;
      default:
        break;
    }
  }

  changeDirection(direction: any) {
    if (direction === "R") {
      this.turnRight();
    } else if (direction === "L") {
      this.turnLeft();
    }
  }

  turnRight() {
    switch (this.direction) {
      case Direction.North:
        this.direction = Direction.East;
        break;
      case Direction.East:
        this.direction = Direction.South;
        break;
      case Direction.West:
        this.direction = Direction.North;
        break;
      case Direction.South:
        this.direction = Direction.West;
        break;
      default:
        break;
    }
  }

  turnLeft() {
    switch (this.direction) {
      case Direction.North:
        this.direction = Direction.West;
        break;
      case Direction.East:
        this.direction = Direction.North;
        break;
      case Direction.West:
        this.direction = Direction.South;
        break;
      case Direction.South:
        this.direction = Direction.East;
        break;
      default:
        break;
    }
  }

  getDisplayResult(position: IPosition): string {
    const result = `X: ${position.X}  Y: ${position.Y}  Direction: ${position.Direction}`;
    return result;
  }
}
