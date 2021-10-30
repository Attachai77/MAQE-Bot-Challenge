enum Direction {
  North = 'North',
  East = 'East',
  South = 'South',
  West = 'West'
}

export class MaqeBot {
  input: string[]
  x: number 
  y:number 
  direction: Direction

  constructor(input: any) {
    this.input = [...input]
    this.x = 0;
    this.y = 0;
    this.direction = Direction.North;
  }

  run() {
    const dataPrepared = this.prepareData(this.input)
    console.log({dataPrepared});
    
  }

  prepareData(input: string[]) {
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
}
