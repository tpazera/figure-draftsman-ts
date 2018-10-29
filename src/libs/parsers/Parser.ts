import { Figure } from "../figures/Figure";

interface Parser {

    figuresList:Figure[];
    getData(path:string):Figure;

}

export { Parser };
