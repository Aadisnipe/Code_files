class BubbleSort{
	public static void main(String args[]){
		int[] l = {23,43,2345,1,4,75,336,12,1221,12};
		int temp;
		for(int i=0;i<l.length-1;i++){
			for(int j=0;j<l.length- 1-i;j++){
				if(l[j]>l[j+1]){
					temp=l[j];
					l[j]=l[j+1];
					l[j+1]=temp;
				}
			}
		}
		for(int i=0;i<l.length;i++){
			System.out.println(l[i]);
		}
	}
}
