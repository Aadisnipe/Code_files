import java.applet.*;
import java.awt.*;
/*<applet code=AppletDemo width=500 height=600> </applet>*/
//class with init must be public
//init is like main function in normal java file
public class AppletDemo extends Applet{
	public void init(){
		setBackground(Color.red);
	}
	public void paint(Graphics g){
		 g.setColor(Color.white);
		g.drawString("Hello World",250,300);
	};
	
}
