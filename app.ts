type Point2D = {
  readonly x: number;
  y?: number;
}

interface Point {
  readonly x: number;
  y?: number;
  z: number;
}

// const pointA: object = () => {};

type Collection = {
  [key: string]: number ,
}

const pointA: Point = {
  x: 0,
  y: 1,
  z: 2,
}

// function test(a:Pick<Point, 'z'>) {  //Omit && Pick && Partial && Required && Readonly

// }

function test(a: keyof Point) {

}

test('x');

interface Point2D1 {
  x: number;
  y: number;
}

type Point1 = Point2D1 & {
  z: number;
}
