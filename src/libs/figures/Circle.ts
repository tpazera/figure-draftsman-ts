import { Figure } from './Figure';
import { Shape2D } from './Shape2D';
import { Point } from './Point';

class Circle implements Figure, Shape2D {

    private center:Point;
    private radius:number;
    private fillColor:string;

    public constructor(center:Point, radius:number, fillColor:string) {
        this.center = center;
        this.radius = radius;
        this.fillColor = fillColor;
    }

    public getArea():number {
        return Math.PI*this.radius*this.radius;
    }

    public getPerimeter():number {
        return 2*Math.PI*this.radius;
    }

    public getCenter():Point {
        return this.center;
    }

    public getRadius():number {
        return this.radius;
    }

    public getFillColor():string {
        return this.fillColor;
    }
}

export { Circle };