import java.util.*;
public class ArrayListDemo {

	public static void main(String[] args) {
//		// Arraylist is like better verssion of Array
//		ArrayList<String> fruits = new ArrayList<>();
//		// .add append the value at the last of the array we can also pass index to add at spefic index
//		fruits.add("Apple");
//		fruits.add("Mango");
//		fruits.add("Orange");
//		fruits.add(2,"Banana");
//		//.remove remove value from specific index
//		fruits.remove(0);
//		//.get() gives specific value at that index
//		System.out.println(fruits.get(0));
//		//.indexOf() gives the index of first matching item in the list
//		System.out.println(fruits.indexOf("Mango"));
//		//.set() takes two argument index and value and change the value at that index
//		fruits.set(1, "Kiwi");
//		System.out.println(fruits);
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter the number of food item:");
		int num;
		num=sc.nextInt();
		sc.nextLine();
		ArrayList<String> foods = new ArrayList<>();
		for (int i = 0; i < num; i++) {
			System.out.printf("Enter food %d: ",i+1);
			String food = sc.nextLine();
			foods.add(food);
		}
		System.out.println(foods);
		sc.close();
	}

}
