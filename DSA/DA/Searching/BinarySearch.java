import java.util.Scanner;
class BinarySearch{
	public static void main(String args[]){
		int[] l = {1,2,3,4,5,6,7,8,9,10};
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter Number You Want to Search:");
		int num=sc.nextInt();
		int low=0, high=l.length-1;
		boolean found=false;
		String str="Not Found";
		while(low<=high){
			int mid=(low+high)/2;
			if(l[mid]==num){
				System.out.println("Found at index " + mid);
                found = true;
                break;
			}
			else if(l[mid]<num){
				low=mid+1;
			}
			else{
				high=mid-1;
			}
		}
		if(!found){
			System.out.println("Not Found");
		}
	}
}
