//There are mainly 3 types of inheritance
//single 
//multiple level<---
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
		System.out.println("child1");
	}
}
class C extends B{
	int b=84;
	void show(){
		System.out.println("child2");
	}
}
class Multiple{
	public static void main(String args[]){
		// {} each pair of curly parenthhesis is a new scope in java 
		{
			B obj = new B();
			obj.a=87;
			System.out.println("parent variable "+obj.a);
			obj.show();
		}
		{
			C obj = new C();
			System.out.println("parent variable "+obj.b);
			obj.show();
	    }
	}
}
