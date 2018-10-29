import { View } from "./View";
import { Figure } from "../figures/Figure";

class FigureDrawer {

    private view:View;

    public constructor(view:View) {
        this.view = view;
    }

    public drawFigures(list:Array<Figure>):void {
        let view:View = this.view;
        list.forEach(function (shape:Figure) {
            view.draw(shape);
        });
    }
}

export { FigureDrawer };