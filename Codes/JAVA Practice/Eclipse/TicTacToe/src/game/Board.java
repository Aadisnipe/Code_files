package game;

import utils.Constants;

public class Board {
    private String[][] grid;
    private int movesCount;
    
    public Board() {
        grid = new String[3][3];
        reset();
    }
    
    public void reset() {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                grid[i][j] = Constants.EMPTY;
            }
        }
        movesCount = 0;
    }
    
    public boolean makeMove(int row, int col, String symbol) {
        if (row >= 0 && row < 3 && col >= 0 && col < 3 && grid[row][col].equals(Constants.EMPTY)) {
            grid[row][col] = symbol;
            movesCount++;
            return true;
        }
        return false;
    }
    
    public String getCell(int row, int col) {
        return grid[row][col];
    }
    
    public boolean isFull() {
        return movesCount == 9;
    }
    
    public String checkWinner() {
        // Check rows
        for (int i = 0; i < 3; i++) {
            if (!grid[i][0].equals(Constants.EMPTY) && 
                grid[i][0].equals(grid[i][1]) && 
                grid[i][1].equals(grid[i][2])) {
                return grid[i][0];
            }
        }
        
        // Check columns
        for (int j = 0; j < 3; j++) {
            if (!grid[0][j].equals(Constants.EMPTY) && 
                grid[0][j].equals(grid[1][j]) && 
                grid[1][j].equals(grid[2][j])) {
                return grid[0][j];
            }
        }
        
        // Check diagonals
        if (!grid[1][1].equals(Constants.EMPTY)) {
            if (grid[0][0].equals(grid[1][1]) && grid[1][1].equals(grid[2][2])) {
                return grid[1][1];
            }
            if (grid[0][2].equals(grid[1][1]) && grid[1][1].equals(grid[2][0])) {
                return grid[1][1];
            }
        }
        
        return null;
    }
}