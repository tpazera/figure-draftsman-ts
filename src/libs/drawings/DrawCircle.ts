import { View } from "./View";
import { AbstractView } from "./AbstractView";
import { Figure } from "../figures/Figure";
import { Circle } from "../figures/Circle";

class DrawCircle extends AbstractView {

    protected view:View;
    protected context:any;

    public constructor(context:any, view:View) {
        super();
        this.context = context;
        this.view = view;
    }

    public draw(figure:Figure):void {
        if(figure instanceof Circle) {
            let circle:Circle = figure as Circle;
            this.context.beginPath();
            this.context.arc(figure.getCenter().getX(), figure.getCenter().getY(), figure.getRadius(), 0, 2*Math.PI);
            this.context.fillStyle = figure.getFillColor();
            this.context.fill();
            this.context.lineWidth = 1;
            this.context.strokeStyle = figure.getFillColor();
            this.context.stroke();

        } else {
            this.view.draw(figure);
        }
    }
}

export { DrawCircle };