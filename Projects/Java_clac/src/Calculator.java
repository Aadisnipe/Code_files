import javax.swing.*;
import javax.swing.border.LineBorder;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Arrays;
import java.util.Objects;

public class Calculator {
    ImageIcon icon = new ImageIcon(getClass().getResource("/pic.png"));
    int heightf = 500;
    int widthf =  350 ;
    Color customLightGray = new Color(212,212,210);
    Color customDarkGray = new Color(80,80,80);
    Color customBlack = new Color(28,28,28);
    Color customOrange = new Color(255,149,0);
    JFrame frame = new JFrame("Calculator");
    JLabel label1 = new JLabel();
    JPanel panel1 = new JPanel();
    JPanel panel2 = new JPanel();
    String[] buttonValues = {
            "AC", "+/-", "%", "÷",
            "7", "8", "9", "×",
            "4", "5", "6", "-",
            "1", "2", "3", "+",
            "0", ".", "√", "="
    };
    String[] rightSymbols = {"÷", "×", "-", "+", "="};
    String[] topSymbols = {"AC", "+/-", "%"};
    String[] topSymbolsed = {"AC", "+/-", "%","√"};
    String A = "0";
    String operator = null;
    String B = null;
    Calculator(){
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(widthf,heightf);
        frame.setResizable(false);
        frame.setLocationRelativeTo(null);
        frame.setLayout(new BorderLayout());
        //panel1 : Display
        label1.setBackground(customBlack);
        label1.setForeground(Color.white);
        label1.setFont(new Font("Arial",Font.PLAIN ,50));
        label1.setText("0");
        label1.setOpaque(true);
        label1.setHorizontalAlignment(JLabel.RIGHT);
        panel1.setLayout(new BorderLayout());
        panel1.add(label1);
        frame.add(panel1,BorderLayout.NORTH);
        //panel2 : buttonpad
        panel2.setLayout(new GridLayout(5,4));
        panel2.setBackground(customBlack);
        //adding buttons
        for (int i = 0; i < buttonValues.length; i++) {
            JButton button = new JButton(buttonValues[i]);
            button.setFont(new Font("Arial",Font.PLAIN,30));
            button.setFocusable(false);
            button.setBorder(new LineBorder(customBlack));
            panel2.add(button);
            if ( Arrays.asList(topSymbols).contains(buttonValues[i])){
                button.setBackground(customLightGray);
                button.setForeground(customBlack);
            } else if (Arrays.asList(rightSymbols).contains(buttonValues[i])) {
                button.setBackground(customOrange);
                button.setForeground(Color.white);
            }
            else {
                button.setBackground(customDarkGray);
                button.setForeground(Color.white);
            }
            button.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    JButton btn = (JButton) e.getSource();
                    String btnvalue = btn.getText();
                    if ( Arrays.asList(topSymbolsed).contains(btnvalue)){
                        if(btnvalue=="AC"){
                            clearAll();
                            label1.setText("0");
                        }
                        else if (btnvalue=="+/-") {
                            double num = Double.parseDouble(label1.getText());
                            num *= -1;
                            label1.setText(removeDecimal(num));
                        } else if (btnvalue.equals("√")) {
                            double num = Double.parseDouble(label1.getText());
                            num = Math.sqrt(num);
                            label1.setText(removeDecimal(num));
                        } else {
                            double num = Double.parseDouble(label1.getText());
                            num /= 100;
                            label1.setText(removeDecimal(num));
                        }

                    }
                    else if (Arrays.asList(rightSymbols).contains(btnvalue)) {
                        if (btnvalue == "="){
                            double num1 = Double.parseDouble(A);
                            double num2 = Double.parseDouble(label1.getText());
                            if(operator=="+"){
                                label1.setText(removeDecimal(num1 + num2));
                                clearAll();
                            } else if (operator=="-") {
                                label1.setText(removeDecimal(num1 - num2));
                                clearAll();
                            }
                            else if (operator=="÷") {
                                if (num2 == 0) {
                                    JOptionPane.showMessageDialog(frame, "Cannot divide by zero!", "Error", JOptionPane.ERROR_MESSAGE);
                                    clearAll();
                                } else {
                                    label1.setText(removeDecimal(num1 / num2));
                                    clearAll();
                                }
                            }
                            else if (operator =="×") {
                                label1.setText(removeDecimal(num1 * num2));
                                clearAll();
                            }

                        } else if ("÷+-×".contains(btnvalue)) {
                            if (operator==null){
                                A=label1.getText();
                                label1.setText("0");
                                B="0";
                            }
                            operator=btnvalue;
                        }
                    }
                    else {
                        if (btnvalue =="."){
                            if (!label1.getText().contains(btnvalue)){
                                label1.setText(label1.getText()+btnvalue);
                            }
                        } else if ("1234567890".contains(btnvalue)) {
                            if (Objects.equals(label1.getText(), "0")) {
                                label1.setText(btnvalue);
                            } else {
                                label1.setText(label1.getText()+btnvalue);
                            }
                        }
                    }
                }
            });
        }
        frame.setIconImage(icon.getImage());
        frame.add(panel2 , BorderLayout.CENTER);
        frame.setVisible(true);
    }
    void clearAll(){
        A = "0";
        operator = null;
        B = null;
    }
    String removeDecimal(double n){
        if (n%1==0){
            return Integer.toString((int) n);
        }
        return Double.toString(n);
    }
}
