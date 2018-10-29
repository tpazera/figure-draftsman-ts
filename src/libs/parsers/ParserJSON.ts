import { Parser } from "./Parser";
import { Figure } from "../figures/Figure";
import { Circle } from "../figures/Circle";
import { Point } from "../figures/Point";
import { Line } from "../figures/Line";
import { Rectangle } from "../figures/Rectangle";
import { LineParser } from "./LineParser";
import { CircleParser } from "./CircleParser";
import { RectangleParser } from "./RectangleParser";

class ParserJSON implements Parser {

    public figuresList:Figure[] = new Array<Figure>();

    public getData(path:string):Figure[] {
        let figuresList = this.figuresList;
        let myJson:any;
        let lineParser = new LineParser();
        let rectangleParser = new RectangleParser();
        let circleParser = new CircleParser();
        var request = new XMLHttpRequest();
        request.open("GET", path, false);
        request.send(null)
        myJson = JSON.parse(request.responseText);
        console.log(myJson.figures.length);
        myJson.figures.forEach(function (figure:any) {
            if(figure.type == "line") {
                figuresList.push(lineParser.getData(figure));
            } else if (figure.type == "circle") {
                figuresList.push(circleParser.getData(figure));
            } else if (figure.type == "rectangle") {
                figuresList.push(rectangleParser.getData(figure));
            }
          });
        return figuresList;
    }

}

export { ParserJSON };