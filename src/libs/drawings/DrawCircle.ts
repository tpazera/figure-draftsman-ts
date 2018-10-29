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
            //this.context.setFill(Color.BLUE);
            //this.context.fillOval(circle.getCenter().getX(), circle.getCenter().getY(), circle.getRadius()*2, circle.getRadius()*2);

        } else {
            this.view.draw(figure);
        }
    }
}

export { DrawCircle };