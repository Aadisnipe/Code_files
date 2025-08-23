//There are mainly 3 types of inheritance
//single
//multiple
//hieracy

class A{
	int a=1;
	void disp(){
		System.out.println("parent");
	}
}
class B extends A{
	int b=34;
	void show(){
		System.out.println("child");
	}
}
class Single{
	public static void main(String args[]){
		B obj = new B();
		obj.a=87;
		System.out.println("parent variable "+obj.a);
		obj.disp();
		System.out.println("parent variable "+obj.b);
		obj.show();
		
	}
}
