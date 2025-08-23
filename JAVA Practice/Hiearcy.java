//There are mainly 3 types of inheritance
//single 
//multiple 
//hieracy <---

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
class C extends A{
	int b=84;
	void show(){
		System.out.println("child2");
	}
}
class Hiearcy{
	public static void main(String args[]){
		// {} each pair of curly parenthhesis is a new scope in java 
		B obj = new B();
		obj.disp();
		C obj2= new C();
		obj2.disp();
	}
}
