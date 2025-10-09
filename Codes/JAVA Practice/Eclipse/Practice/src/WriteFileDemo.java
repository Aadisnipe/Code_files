import java.io.FileWriter;
import java.io.IOException;

public class WriteFileDemo {

	public static void main(String[] args) {
		try {
			FileWriter file = new FileWriter("test.txt");
			file.write("MY First File");
			System.out.println("File has been written");
			file.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
