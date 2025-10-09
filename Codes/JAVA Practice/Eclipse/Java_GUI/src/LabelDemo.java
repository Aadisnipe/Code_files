import java.awt.Color;
import java.awt.Font;
import java.awt.Image;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class LabelDemo {

    public static void main(String[] args) {
        // Load the image
        ImageIcon image = new ImageIcon("image.png");

        // Get the Image object from ImageIcon
        Image image1 = image.getImage();

        // Desired dimensions
        int newWidth = 300;
        int newHeight = 300;

        // Scale the image
        Image scaledImage = image1.getScaledInstance(newWidth, newHeight, Image.SCALE_SMOOTH);

        // Wrap scaled Image in ImageIcon
        ImageIcon scaledIcon = new ImageIcon(scaledImage);

        // Create label
        JLabel label = new JLabel("My first Label");
        label.setIcon(scaledIcon);
        label.setHorizontalTextPosition(JLabel.CENTER); // horizontal position of label text
        label.setVerticalTextPosition(JLabel.TOP); //vertical position of label text
        label.setHorizontalAlignment(JLabel.CENTER);
        label.setForeground(new Color(255, 0, 51)); //label text color
        label.setFont(new Font("MV Boli",Font.BOLD,25)); //label font style
        label.setIconTextGap(20); // gap between text and  icon
        label.setBackground(Color.black); //this 
        label.setOpaque(true); // make label opaq
        //label.setBounds(0, 0, 300, 300);
        // Create frame
        JFrame frame = new JFrame();
        frame.setTitle("LabelDemo");
        //frame.setSize(300, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.add(label);
        //by deafult label take full space in the frame if not set
        //frame.setLayout(null);       
        frame.setVisible(true);
        frame.pack(); // pack automatically pack everything and manage size and layout automatically
    }
}
