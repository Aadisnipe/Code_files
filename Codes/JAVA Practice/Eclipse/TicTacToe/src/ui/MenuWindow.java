package ui;

import utils.Constants;
import javax.swing.*;
import java.awt.*;

public class MenuWindow extends JFrame {
    public MenuWindow() {
        setTitle("Tic-Tac-Toe Game");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setResizable(false);
        
        JPanel panel = new JPanel();
        panel.setLayout(new GridBagLayout());
        panel.setBackground(Constants.BG_COLOR);
        GridBagConstraints gbc = new GridBagConstraints();
        gbc.insets = new Insets(10, 10, 10, 10);
        
        JLabel titleLabel = new JLabel("TIC-TAC-TOE");
        titleLabel.setFont(new Font("Arial", Font.BOLD, 36));
        titleLabel.setForeground(Constants.PRIMARY_COLOR);
        gbc.gridx = 0;
        gbc.gridy = 0;
        gbc.gridwidth = 2;
        panel.add(titleLabel, gbc);
        
        JButton startButton = new JButton("Start Game");
        startButton.setFont(new Font("Arial", Font.BOLD, 18));
        startButton.setPreferredSize(new Dimension(200, 50));
        startButton.setBackground(Constants.PRIMARY_COLOR);
        startButton.setForeground(Color.WHITE);
        startButton.setFocusPainted(false);
        startButton.addActionListener(e -> {
            new SelectionWindow();
            dispose();
        });
        gbc.gridy = 1;
        gbc.gridwidth = 1;
        panel.add(startButton, gbc);
        
        JButton exitButton = new JButton("Exit");
        exitButton.setFont(new Font("Arial", Font.BOLD, 18));
        exitButton.setPreferredSize(new Dimension(200, 50));
        exitButton.setBackground(Constants.SECONDARY_COLOR);
        exitButton.setForeground(Color.WHITE);
        exitButton.setFocusPainted(false);
        exitButton.addActionListener(e -> System.exit(0));
        gbc.gridy = 2;
        panel.add(exitButton, gbc);
        
        add(panel);
        setVisible(true);
    }
}