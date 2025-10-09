import java.util.Scanner;
class LinearSearch{
	public static void main(String args[]){
		int[] l = {3,2,5,43,34,38,394,3};
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter Number You Want to Search:");
		int num=sc.nextInt();
		String str="Not Found";
		for(int i=0;i<l.length;i++){
			if(l[i]==num){
				str="Found";
				break;
			}
		}
		System.out.println(str);
	}
}
