import java.util.*;

public class BalaBra {
	
	public static void main (String[] args) {
		Stack<Character> st = new Stack<>();
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter your Equation:");
		String eq=sc.nextLine();
		for(char ch : eq.toCharArray()){
			if(ch=='('){
				st.push(ch);
			}
			else if(ch==')'){
				if(st.isEmpty()){
					System.out.println("False");
					return;
				}
				st.pop();
			}
		}
		if (st.isEmpty()) {
            System.out.println("True");
        }
        else{
			System.out.println("False");
		}
	}
}



