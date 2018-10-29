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
            this.context.beginPath();
            this.context.moveTo(figure.getStart().getX(), figure.getStart().getY());
            this.context.lineTo(figure.getEnd().getX(), figure.getEnd().getY());
            this.context.lineWidth = figure.getLineWidth();
            this.context.strokeStyle = figure.getLineColor();
            this.context.stroke();
        } else {
            this.view.draw(figure);
        }
    }
}

export { DrawLine };