import { Figure } from "../figures/Figure";
import { Line } from "../figures/Line";
import { Point } from "../figures/Point";

class LineParser {

    public getData(json:any):Line {
        let line:Line;
        try {
            line = new Line(new Point(json.startX, json.startY), new Point(json.endX, json.endY), json.lineWidth, json.lineColor)
        } catch(err) {
            line = null;
        }
        return line;
    }


}

export { LineParser };