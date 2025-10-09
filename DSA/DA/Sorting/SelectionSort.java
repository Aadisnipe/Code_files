class SelectionSort{
	public static void main(String args[]){
		int[] l = {23,43,2345,1,4,75,336,12,1221,12};
		int temp=l[0];
		for(int j=0;j<l.length-1;j++){
			for(int i=0;i<l.length-1;i++){
			if(l[i]>l[i+1]){
				temp=l[i];
				l[i]=l[i+1];
				l[i+1]=temp;
			}
		}
		}
		for(int i=0;i<l.length;i++){
			System.out.println(l[i]);
		}
	}
}
