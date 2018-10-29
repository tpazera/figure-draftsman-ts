import { ParserTxt } from './parsers/ParserTxt';
import { Figure } from './figures/Figure';
import { FigureDrawer } from './drawings/FigureDrawer';
import { DrawLine } from './drawings/DrawLine';
import { DrawCircle } from './drawings/DrawCircle';
import { DrawRectangle } from './drawings/DrawRectangle';

let start = "Loading ts..."
console.log(start);

let home = <HTMLCanvasElement> document.getElementById("mainCanvas");
let context = home.getContext("2d");

let parserTxt:ParserTxt = new ParserTxt();
let figuresArray:Figure[] = parserTxt.getData("test");
let figureDrawer:FigureDrawer = new FigureDrawer(new DrawLine(context, new DrawCircle(context, new DrawRectangle(context, null))))
console.log(figuresArray.length);
