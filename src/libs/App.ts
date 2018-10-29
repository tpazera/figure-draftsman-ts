import { ParserJSON } from './parsers/ParserJSON';
import { Figure } from './figures/Figure';
import { FigureDrawer } from './drawings/FigureDrawer';
import { DrawLine } from './drawings/DrawLine';
import { DrawCircle } from './drawings/DrawCircle';
import { DrawRectangle } from './drawings/DrawRectangle';

let start = "Loading ts..."
console.log(start);

function startDrawing():void {
    let home = <HTMLCanvasElement> document.getElementById("mainCanvas");
    let context = home.getContext("2d");
    
    let parserJSON:ParserJSON = new ParserJSON();
    let figuresArray:Figure[] = parserJSON.getData("./resources/figures.txt");
    console.log(figuresArray);
    let figureDrawer:FigureDrawer = new FigureDrawer(new DrawLine(context, new DrawCircle(context, new DrawRectangle(context, null))))
    
    figureDrawer.drawFigures(figuresArray);
}

export { startDrawing };