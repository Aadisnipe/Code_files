package ui;

import utils.Constants;
import javax.swing.*;
import java.awt.*;

public class SelectionWindow extends JFrame {
    public SelectionWindow() {
        setTitle("Choose Your Symbol");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setResizable(false);
        
        JPanel panel = new JPanel();
        panel.setLayout(new GridBagLayout());
        panel.setBackground(Constants.BG_COLOR);
        GridBagConstraints gbc = new GridBagConstraints();
        gbc.insets = new Insets(10, 10, 10, 10);
        
        JLabel instructionLabel = new JLabel("Choose Your Symbol:");
        instructionLabel.setFont(new Font("Arial", Font.BOLD, 24));
        instructionLabel.setForeground(Constants.PRIMARY_COLOR);
        gbc.gridx = 0;
        gbc.gridy = 0;
        gbc.gridwidth = 2;
        panel.add(instructionLabel, gbc);
        
        JButton xButton = new JButton("X");
        xButton.setFont(new Font("Arial", Font.BOLD, 48));
        xButton.setPreferredSize(new Dimension(120, 120));
        xButton.setBackground(Constants.X_COLOR);
        xButton.setForeground(Color.WHITE);
        xButton.setFocusPainted(false);
        xButton.addActionListener(e -> {
            new GameWindow(Constants.SYMBOL_X);
            dispose();
        });
        gbc.gridx = 0;
        gbc.gridy = 1;
        gbc.gridwidth = 1;
        panel.add(xButton, gbc);
        
        JButton oButton = new JButton("O");
        oButton.setFont(new Font("Arial", Font.BOLD, 48));
        oButton.setPreferredSize(new Dimension(120, 120));
        oButton.setBackground(Constants.O_COLOR);
        oButton.setForeground(Color.WHITE);
        oButton.setFocusPainted(false);
        oButton.addActionListener(e -> {
            new GameWindow(Constants.SYMBOL_O);
            dispose();
        });
        gbc.gridx = 1;
        panel.add(oButton, gbc);
        
        JButton backButton = new JButton("Back to Menu");
        backButton.setFont(new Font("Arial", Font.PLAIN, 14));
        backButton.setPreferredSize(new Dimension(150, 40));
        backButton.setBackground(Constants.SECONDARY_COLOR);
        backButton.setForeground(Color.WHITE);
        backButton.setFocusPainted(false);
        backButton.addActionListener(e -> {
            new MenuWindow();
            dispose();
        });
        gbc.gridx = 0;
        gbc.gridy = 2;
        gbc.gridwidth = 2;
        panel.add(backButton, gbc);
        
        add(panel);
        setVisible(true);
    }
}