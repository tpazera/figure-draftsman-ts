import { Figure } from './Figure';
import { Point } from './Point';

class Line implements Figure {

    private start:Point;
    private end:Point;

    public constructor(start:Point, end:Point) {
        this.start = start;
        this.end = end;
    }

    public getStart():Point {
        return this.start;
    }

    public getEnd():Point {
        return this.end;
    }

    public getLength():number {
        return Math.pow(Math.pow(this.end.getY() - this.start.getY(), 2) + Math.pow(this.end.getX() - this.start.getX(), 2), 0.5);
    }

}

export { Line };