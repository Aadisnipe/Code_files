package ui;

import game.GameController;
import utils.Constants;
import javax.swing.*;
import java.awt.*;

public class GameWindow extends JFrame {
    private GameController controller;
    private JButton[][] buttons;
    private JLabel statusLabel;
    
    public GameWindow(String playerSymbol) {
        controller = new GameController(playerSymbol);
        buttons = new JButton[3][3];
        
        setTitle("Tic-Tac-Toe Game");
        setSize(500, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setResizable(false);
        
        JPanel mainPanel = new JPanel();
        mainPanel.setLayout(new BorderLayout(10, 10));
        mainPanel.setBackground(Constants.BG_COLOR);
        mainPanel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        
        statusLabel = new JLabel(getCurrentPlayerText(), SwingConstants.CENTER);
        statusLabel.setFont(new Font("Arial", Font.BOLD, 20));
        statusLabel.setForeground(Constants.PRIMARY_COLOR);
        mainPanel.add(statusLabel, BorderLayout.NORTH);
        
        JPanel gridPanel = new JPanel();
        gridPanel.setLayout(new GridLayout(3, 3, 10, 10));
        gridPanel.setBackground(Constants.BG_COLOR);
        
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                buttons[i][j] = new JButton("");
                buttons[i][j].setFont(new Font("Arial", Font.BOLD, 48));
                buttons[i][j].setFocusPainted(false);
                buttons[i][j].setBackground(Color.WHITE);
                buttons[i][j].setBorder(BorderFactory.createLineBorder(Constants.PRIMARY_COLOR, 2));
                
                final int row = i;
                final int col = j;
                buttons[i][j].addActionListener(e -> handleCellClick(row, col));
                
                gridPanel.add(buttons[i][j]);
            }
        }
        mainPanel.add(gridPanel, BorderLayout.CENTER);
        
        JPanel buttonPanel = new JPanel();
        buttonPanel.setLayout(new FlowLayout(FlowLayout.CENTER, 10, 10));
        buttonPanel.setBackground(Constants.BG_COLOR);
        
        JButton resetButton = new JButton("New Game");
        resetButton.setFont(new Font("Arial", Font.BOLD, 16));
        resetButton.setPreferredSize(new Dimension(150, 40));
        resetButton.setBackground(Constants.PRIMARY_COLOR);
        resetButton.setForeground(Color.WHITE);
        resetButton.setFocusPainted(false);
        resetButton.addActionListener(e -> resetGame());
        buttonPanel.add(resetButton);
        
        JButton menuButton = new JButton("Main Menu");
        menuButton.setFont(new Font("Arial", Font.BOLD, 16));
        menuButton.setPreferredSize(new Dimension(150, 40));
        menuButton.setBackground(Constants.SECONDARY_COLOR);
        menuButton.setForeground(Color.WHITE);
        menuButton.setFocusPainted(false);
        menuButton.addActionListener(e -> {
            new MenuWindow();
            dispose();
        });
        buttonPanel.add(menuButton);
        
        mainPanel.add(buttonPanel, BorderLayout.SOUTH);
        
        add(mainPanel);
        setVisible(true);
    }
    
    private void handleCellClick(int row, int col) {
        if (controller.makeMove(row, col)) {
            updateBoard();
            
            if (controller.isGameOver()) {
                if (controller.isDraw()) {
                    statusLabel.setText("It's a Draw!");
                    JOptionPane.showMessageDialog(this, "Game Over - It's a Draw!", "Game Over", JOptionPane.INFORMATION_MESSAGE);
                } else {
                    String winner = controller.getWinner();
                    statusLabel.setText("Winner: " + winner + "!");
                    JOptionPane.showMessageDialog(this, winner + " Wins!", "Game Over", JOptionPane.INFORMATION_MESSAGE);
                }
            } else {
                statusLabel.setText(getCurrentPlayerText());
            }
        }
    }
    
    private void updateBoard() {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                String symbol = controller.getBoard().getCell(i, j);
                buttons[i][j].setText(symbol);
                
                if (symbol.equals(Constants.SYMBOL_X)) {
                    buttons[i][j].setForeground(Constants.X_COLOR);
                } else if (symbol.equals(Constants.SYMBOL_O)) {
                    buttons[i][j].setForeground(Constants.O_COLOR);
                }
            }
        }
    }
    
    private void resetGame() {
        controller.resetGame();
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                buttons[i][j].setText("");
            }
        }
        statusLabel.setText(getCurrentPlayerText());
    }
    
    private String getCurrentPlayerText() {
        return "Current Player: " + controller.getCurrentPlayer().getSymbol();
    }
}