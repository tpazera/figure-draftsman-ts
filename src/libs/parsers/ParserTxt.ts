import { Parser } from "./Parser";
import { Figure } from "../figures/Figure";
import { Circle } from "../figures/Circle";
import { Point } from "../figures/Point";
import { Line } from "../figures/Line";
import { Rectangle } from "../figures/Rectangle";

class ParserTxt implements Parser {

    public figuresList:Figure[] = new Array<Figure>();

    public getData(path:string):Figure[] {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                console.log(myArr[0]);
            } else {
                console.log("XD");
            }
        };
        xmlhttp.open("GET", "./../../resources/figures.txt", true);
        xmlhttp.send();
    
        let center:Point = new Point(5, 5);
        this.figuresList.push(new Circle(center, 10))
        this.figuresList.push(new Line(center, new Point(10, 10)));
        this.figuresList.push(new Rectangle(center, 20, 20));
        this.figuresList.push(new Circle(center, 10))
        this.figuresList.push(new Line(center, new Point(10, 10)));
        this.figuresList.push(new Rectangle(center, 20, 20));
        return this.figuresList;
    }


}

export { ParserTxt };