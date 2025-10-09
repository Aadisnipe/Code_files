import java.util.*;  
import javax.swing.*;  
import java.awt.*;  
import java.awt.event.*;  

// Main class
public class AllPrograms {
    public static void main(String[] args) {
        System.out.println("===== Program 1 =====");
        program1();
        System.out.println("\n===== Program 2 =====");
        program2();
        System.out.println("\n===== Program 3 =====");
        program3();
        System.out.println("\n===== Program 4 =====");
        program4();
        System.out.println("\n===== Program 5 =====");
        program5();
        System.out.println("\n===== Program 6 =====");
        program6();
        System.out.println("\n===== Program 7 =====");
        program7();
        System.out.println("\n===== Program 8 =====");
        program8();
        System.out.println("\n===== Program 9 =====");
        program9();
        System.out.println("\n===== Program 10 =====");
        program10();

    }

    // 1. Print Hello and Name
    static void program1() {
        System.out.println("Hello");
        System.out.println("Aditya Dev");
    }

    // 2. Arithmetic operations
    static void program2() {
        int a = 20, b = 10;
        System.out.println("Sum: " + (a+b));
        System.out.println("Difference: " + (a-b));
        System.out.println("Product: " + (a*b));
        System.out.println("Quotient: " + (a/b));
        System.out.println("Remainder: " + (a%b));
    }

    // 3. Even check
    static void program3() {
        int num = 7;
        System.out.println((num % 2 == 0) ? 1 : 0);
    }

    // 4. Three integers condition
    static void program4() {
        int a = 5, b = 10, c = 15;
        boolean result = (b > a && c > b);
        System.out.println("Condition result: " + result);
    }

    // 5. Max occurring character
    static void program5() {
        String str = "programming";
        int[] freq = new int[256];
        for (char ch : str.toCharArray()) freq[ch]++;
        int max = 0; char result = ' ';
        for (char ch : str.toCharArray()) {
            if (freq[ch] > max) {
                max = freq[ch];
                result = ch;
            }
        }
        System.out.println("Max occurring character: " + result);
    }

    // 6. First non-repeating character
    static void program6() {
        String str = "swiss";
        for (int i=0;i<str.length();i++) {
            char c = str.charAt(i);
            if (str.indexOf(c) == str.lastIndexOf(c)) {
                System.out.println("First non-repeating: " + c);
                return;
            }
        }
        System.out.println("No non-repeating character found.");
    }

    // 7. Method overloading
    static void program7() {
        class Overload {
            int add(int a, int b) { return a+b; }
            double add(double a, double b) { return a+b; }
        }
        Overload obj = new Overload();
        System.out.println("Int add: " + obj.add(5,10));
        System.out.println("Double add: " + obj.add(5.5,10.5));
    }

    // 8. Multilevel inheritance
    static void program8() {
        class A { void showA() { System.out.println("Class A"); } }
        class B extends A { void showB() { System.out.println("Class B"); } }
        class C extends B { void showC() { System.out.println("Class C"); } }
        C obj = new C();
        obj.showA();
        obj.showB();
        obj.showC();
    }

    // 9. Abstract class Shape
    static void program9() {
        abstract class Shape {
            int a, b;
            abstract void printArea();
        }
        class Rectangle extends Shape {
            Rectangle(int l, int w) { a=l; b=w; }
            void printArea() { System.out.println("Rectangle Area: " + (a*b)); }
        }
        class Triangle extends Shape {
            Triangle(int b, int h) { a=b; this.b=h; }
            void printArea() { System.out.println("Triangle Area: " + (0.5*a*b)); }
        }
        class Circle extends Shape {
            Circle(int r) { a=r; }
            void printArea() { System.out.println("Circle Area: " + (3.14*a*a)); }
        }
        new Rectangle(4,5).printArea();
        new Triangle(4,5).printArea();
        new Circle(3).printArea();
    }

    // 10. GUI Division with Exception Handling
    static void program10() {
        JFrame f = new JFrame("Division");
        JTextField num1 = new JTextField(5);
        JTextField num2 = new JTextField(5);
        JTextField result = new JTextField(10);
        JButton divide = new JButton("Divide");
        JPanel p = new JPanel();
        p.add(new JLabel("Num1:")); p.add(num1);
        p.add(new JLabel("Num2:")); p.add(num2);
        p.add(divide); p.add(result);
        f.add(p);
        f.setSize(300,150);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        f.setVisible(true);

        divide.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                try {
                    int a = Integer.parseInt(num1.getText());
                    int b = Integer.parseInt(num2.getText());
                    int res = a / b;
                    result.setText("" + res);
                } catch (NumberFormatException ex) {
                    JOptionPane.showMessageDialog(f, "Enter integers only!");
                } catch (ArithmeticException ex) {
                    JOptionPane.showMessageDialog(f, "Cannot divide by zero!");
                }
            }
        });
    }
    // 11. Multithreading with random numbers
    static void program11() {
        class SquareThread extends Thread {
            int num;
            SquareThread(int n){ num=n; }
            public void run() { System.out.println("Square: " + (num*num)); }
        }
        class CubeThread extends Thread {
            int num;
            CubeThread(int n){ num=n; }
            public void run() { System.out.println("Cube: " + (num*num*num)); }
        }
        class RandomThread extends Thread {
            public void run() {
                Random rand = new Random();
                while(true) {
                    int num = rand.nextInt(100);
                    System.out.println("Generated: " + num);
                    if(num % 2 == 0) {
                        new SquareThread(num).start();
                    } else {
                        new CubeThread(num).start();
                    }
                    try { Thread.sleep(1000); } catch(Exception e){}
                }
            }
        }
        new RandomThread().start();
    }

}
