import { Figure } from "../figures/Figure";
import { Line } from "../figures/Line";
import { Point } from "../figures/Point";
import { Circle } from "../figures/Circle";

class CircleParser {

    public getData(json:any):Circle {
        let circle:Circle 
        try { 
            circle = new Circle(new Point(json.centerX, json.centerY), json.radius, json.fillColor);
        } catch (err) {
            circle = null;
        }
        return circle;
    }


}

export { CircleParser };