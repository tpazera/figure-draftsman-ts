import { View } from "./View";
import { Figure } from "../figures/Figure";

abstract class AbstractView implements View {
    protected view:View;
    protected context:any;

    draw(figure:Figure):void{};

}

export { AbstractView };