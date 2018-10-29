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
            // this.context.setFill(Color.GREEN);
            // this.context.fillRect(rectangle.getPoint().getX(), rectangle.getPoint().getY(), rectangle.getWidth(), rectangle.getHeight());

        } else {
            this.view.draw(figure);
        }
    }
}

export { DrawRectangle };