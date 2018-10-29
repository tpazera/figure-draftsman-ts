import { Figure } from "../figures/Figure";
import { Rectangle } from "../figures/Rectangle";
import { Point } from "../figures/Point";

class RectangleParser {

    public getData(json:any):Rectangle {
        let rectangle:Rectangle;
        try {
            rectangle = new Rectangle(new Point(json.startX, json.startY), json.height, json.width, json.fillColor);
        } catch (err) {
            rectangle = null;
        }
        return rectangle;
    }


}

export { RectangleParser };