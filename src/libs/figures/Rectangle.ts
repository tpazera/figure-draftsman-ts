import { Figure } from './Figure';
import { Shape2D } from './Shape2D';
import { Point } from './Point';

class Rectangle implements Figure, Shape2D {

    //lewy, górny punkt prostokąta
    private point:Point;
    private height:number;
    private width:number;
    private fillColor:string;

    public constructor(point:Point, height:number, width:number, fillColor:string) {
        this.point = point;
        this.height = height;
        this.width = width;
        this.fillColor = fillColor;
    }

    public getPoint():Point {
        return this.point;
    }

    public getHeight():number {
        return this.height;
    }

    public getWidth():number {
        return this.width;
    }

    public getArea():number {
        return this.width * this.height;
    }

    public getPerimeter():number {
        return this.width*2 + this.height*2;
    }

    public getFillColor():string {
        return this.fillColor;
    }
}

export { Rectangle };
