import { Figure } from './Figure';
import { Point } from './Point';

class Line implements Figure {

    private start:Point;
    private end:Point;
    private lineWidth:number;
    private lineColor:string;

    public constructor(start:Point, end:Point, lineWidth:number, lineColor:string) {
        this.start = start;
        this.end = end;
        this.lineWidth = lineWidth;
        this.lineColor = lineColor;
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

    public getLineWidth():number {
        return this.lineWidth;
    }

    public getLineColor():string {
        return this.lineColor;
    }

}

export { Line };