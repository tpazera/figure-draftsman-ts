package org.ambrozy.figurepainter.parsers;

import org.ambrozy.figurepainter.figures.Figure;
import org.ambrozy.figurepainter.figures.Line;
import org.ambrozy.figurepainter.figures.Point;
import org.ambrozy.figurepainter.figures.Rectangle;

import java.util.Scanner;

public class RectangleParser {
    private final Scanner scanner;

    public RectangleParser(Scanner s2) {
        this.scanner = s2;
    }

    public Figure getData() {
        Rectangle rectangle;
        try {
            Point start = new Point(Double.parseDouble(scanner.next()), Double.parseDouble(scanner.next()));
            Double width = Double.parseDouble(scanner.next());
            Double height = Double.parseDouble(scanner.next());
            rectangle = new Rectangle(start, width, height);
        } catch(Exception e) {
            return null;
        }

        return rectangle;
    }
}
