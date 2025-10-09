import java.util.*;
public class BarChart {
	
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter Number of building:");
		int n = sc.nextInt();
		System.out.println("Enter Size of each building");
		int[] floors = new int[n];
		for(int i=0;i<floors.length;i++){
			floors[i]=sc.nextInt();
		}
		int max=0;
		for(int i=0;i<floors.length;i++){
			if(max<floors[i]){
				max=floors[i];
			}
		}
		for(int i=max;i>0;i--){
			for(int floor : floors){
				if(i<=floor){
					System.out.print("b\t*");
				}
				else{
					System.out.print("\t");
				}
			}
			System.out.println();
		}
	}
}

