import { View } from "./View";
import { AbstractView } from "./AbstractView";
import { Figure } from "../figures/Figure";
import { Rectangle } from "../figures/Rectangle";

class DrawRectangle extends AbstractView {

    protected view:View;
    protected context:any;

    public constructor(context:any, view:View) {
        super();
        this.context = context;
        this.view = view;
    }

    public draw(figure:Figure):void {
        if(figure instanceof Rectangle) {
            let line:Rectangle = figure as Rectangle;
            this.context.beginPath();
            this.context.rect(figure.getPoint().getX(), figure.getPoint().getY(), figure.getWidth(), figure.getHeight());
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

export { DrawRectangle };