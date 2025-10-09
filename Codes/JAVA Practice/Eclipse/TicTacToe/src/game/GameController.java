package game;

import utils.Constants;

public class GameController {
    private Board board;
    private Player player1;
    private Player player2;
    private Player currentPlayer;
    private boolean gameOver;
    
    public GameController(String player1Symbol) {
        board = new Board();
        player1 = new Player(player1Symbol);
        player2 = new Player(player1Symbol.equals(Constants.SYMBOL_X) ? Constants.SYMBOL_O : Constants.SYMBOL_X);
        currentPlayer = player1Symbol.equals(Constants.SYMBOL_X) ? player1 : player2;
        gameOver = false;
    }
    
    public boolean makeMove(int row, int col) {
        if (gameOver) return false;
        
        if (board.makeMove(row, col, currentPlayer.getSymbol())) {
            String winner = board.checkWinner();
            if (winner != null) {
                gameOver = true;
                return true;
            }
            if (board.isFull()) {
                gameOver = true;
                return true;
            }
            switchPlayer();
            return true;
        }
        return false;
    }
    
    private void switchPlayer() {
        currentPlayer = (currentPlayer == player1) ? player2 : player1;
    }
    
    public Player getCurrentPlayer() {
        return currentPlayer;
    }
    
    public String getWinner() {
        return board.checkWinner();
    }
    
    public boolean isGameOver() {
        return gameOver;
    }
    
    public boolean isDraw() {
        return gameOver && board.checkWinner() == null;
    }
    
    public void resetGame() {
        board.reset();
        currentPlayer = player1.getSymbol().equals(Constants.SYMBOL_X) ? player1 : player2;
        gameOver = false;
    }
    
    public Board getBoard() {
        return board;
    }
}