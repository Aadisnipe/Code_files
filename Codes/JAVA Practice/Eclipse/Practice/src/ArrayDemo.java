import java.util.Arrays;
public class ArrayDemo {

	public static void main(String[] args) {
		String[] Arr = {"apple","banana","orange","mango"};
		Arrays.sort(Arr);
		//Enhanced for loop
		for (String string : Arr) {
			System.out.println(string);
		}
		
		

	}

}
