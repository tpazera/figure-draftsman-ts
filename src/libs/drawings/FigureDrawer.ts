import { View } from "./View";
import { Figure } from "../figures/Figure";

class FigureDrawer {

    private view:View;

    public constructor(view:View) {
        this.view = view;
    }

    public drawFigures(list:Array<Figure>):void {
        list.forEach(function (shape:Figure) {
            this.view.draw(shape);
        });
    }
}

export { FigureDrawer };