import java.awt.Color;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
// we gonna create our entire GUI in this class and make object in the main class
public class MyFrame extends JFrame {
	MyFrame(){
		this.setTitle("GUI in Java"); //this title name
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // completly close the this
		this.setResizable(false); // fix size
		this.setSize(520,520); // this size
		this.setVisible(true);  // by deafault visibilty is false
		
		ImageIcon image = new ImageIcon("logo.png"); // creat a image icon object
		this.setIconImage(image.getImage());
		Color color = new Color(242,33,222); // color object
		this.getContentPane().setBackground(color);
	}
}
