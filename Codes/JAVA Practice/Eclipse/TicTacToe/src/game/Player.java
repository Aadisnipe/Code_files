package game;

public class Player {
    private String symbol;
    private String name;
    
    public Player(String symbol) {
        this.symbol = symbol;
        this.name = symbol.equals("X") ? "Player 1" : "Player 2";
    }
    
    public String getSymbol() {
        return symbol;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
}