import java.util.Random;
public class RandomDemo {

	public static void main(String[] args) {
		Random rand = new Random();
		int number = rand.nextInt(1,7);   // [first_num , second_num)
		System.out.println(number);

	}

}
