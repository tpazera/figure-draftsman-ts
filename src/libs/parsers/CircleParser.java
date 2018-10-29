package org.ambrozy.figurepainter.parsers;

import org.ambrozy.figurepainter.figures.Circle;
import org.ambrozy.figurepainter.figures.Figure;
import org.ambrozy.figurepainter.figures.Point;
import org.ambrozy.figurepainter.figures.Rectangle;

import java.util.Scanner;

public class CircleParser {
    private final Scanner scanner;

    public CircleParser(Scanner s2) {
        this.scanner = s2;
    }

    public Figure getData() {
        Circle circle;
        try {
            Point center = new Point(Double.parseDouble(scanner.next()), Double.parseDouble(scanner.next()));
            Double radius = Double.parseDouble(scanner.next());
            circle = new Circle(center, radius);
        } catch(Exception e) {
            return null;
        }

        return circle;
    }
}
