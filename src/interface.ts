export enum Direction {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}

export interface IPosition {
  X: number;
  Y: number;
  Direction: Direction;
}