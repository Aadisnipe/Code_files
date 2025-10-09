import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class GameMenu {

    public static void main(String[] args) {
        // Create main frame (Menu)
        JFrame frame = new JFrame("Game Menu");
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLocationRelativeTo(null); 
        frame.setLayout(new GridLayout(2, 1, 10, 10));

        // Create Start button
        JButton startButton = new JButton("Start Game");
        startButton.setFont(new Font("Arial", Font.BOLD, 20));

        // Create Exit button
        JButton exitButton = new JButton("Exit");
        exitButton.setFont(new Font("Arial", Font.BOLD, 20));

        // Action for Start button
        startButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                // Close menu window
                frame.dispose();

                // Open new Game Window
                JFrame gameFrame = new JFrame("Game Window");
                gameFrame.setSize(500, 400);
                gameFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // closes whole program if this is closed
                gameFrame.setLocationRelativeTo(null);

                JLabel label = new JLabel("Game Window Open", SwingConstants.CENTER);
                label.setFont(new Font("Arial", Font.BOLD, 25));

                gameFrame.add(label);
                gameFrame.setVisible(true);
            }
        });

        // Action for Exit button
        exitButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                System.exit(0); 
            }
        });

        // Add buttons to menu frame
        frame.add(startButton);
        frame.add(exitButton);

        // Show menu
        frame.setVisible(true);
    }
}
