package org.ambrozy.figurepainter.parsers;

import org.ambrozy.figurepainter.figures.Figure;
import org.ambrozy.figurepainter.figures.Line;
import org.ambrozy.figurepainter.figures.Point;

import java.util.Scanner;

public class LineParser {

    private final Scanner scanner;

    public LineParser(Scanner s2) {
        this.scanner = s2;
    }

    public Figure getData() {
        Line line;
        try {
            Point start = new Point(Double.parseDouble(scanner.next()), Double.parseDouble(scanner.next()));
            Point end = new Point(Double.parseDouble(scanner.next()), Double.parseDouble(scanner.next()));
            System.out.println(start.getX() + " " + start.getY() + " " + end.getX() + " " + end.getY());
            line = new Line(start, end);
        } catch(Exception e) {
            return null;
        }

        return line;
    }


}
