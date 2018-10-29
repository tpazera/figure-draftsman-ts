import { View } from "./View";
import { AbstractView } from "./AbstractView";
import { Figure } from "../figures/Figure";
import { Line } from "../figures/Line";

class DrawLine extends AbstractView {

    protected view:View;
    protected context:any;

    public constructor(context:any, view:View) {
        super();
        this.context = context;
        this.view = view;
    }

    public draw(figure:Figure):void {
        if(figure instanceof Line) {
            let line:Line = figure as Line;
            //this.context.setStroke(Color.RED);
            //this.context.setLineWidth(3);
            //this.context.strokeLine(line.getStart().getX(), line.getStart().getY(), line.getEnd().getX(), line.getEnd().getY());

        } else {
            this.view.draw(figure);
        }
    }
}

export { DrawLine };