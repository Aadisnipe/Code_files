import java.util.*;
public class DupliBra {
	
	public static void main (String[] args) {
		Stack<Character> st = new Stack<>();
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter your Equation:");
		String eq=sc.nextLine();
		for(char ch : eq.toCharArray()){
			if(ch!=')'){
				st.push(ch);
			}
			else{
				int terms=0;
				while(st.peek()!='('){
					ch1=st.pop();
					terms++;
				}
				st.pop();
				if(terms==0){
					System.out.println("true");
					return;
				}
			}
		}
		System.out.print("false");
	}
}

