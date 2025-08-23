class Instance{
	int a=69; //instance variable
	void display(){
		int a=70;
		System.out.println("Number="+a); //print local varibale
		System.out.println("Number="+this.a); //print instances variable
	};
	public static void main(String args[]){
		Instance obj = new Instance();
		obj.display();
	};
}
