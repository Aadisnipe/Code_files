// Main.java
import ui.MenuWindow;
import javax.swing.SwingUtilities;

public class Main {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new MenuWindow();
        });
    }
}








