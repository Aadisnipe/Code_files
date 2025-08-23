class Parent{
	int Roll;
	String Name;
	Parent(int Roll,String Name){ //parent class constructor
		this.Roll=Roll;
		this.Name=Name;
	};
	void displayP(){
		System.out.println("I am Parent");
	};
	void speak(){
		System.out.println("Parent speaking");
	};
}

class Child extends Parent{
	String Class;
	Child(int Roll,String Name,String Class){ //child class constructor
		super(Roll,Name);
		this.Class= Class;
	};
	void displayC(){
		System.out.println("My name is "+Name+" and my roll no is "+Roll+" and I study in class "+Class);
	};
	void speak(){
		System.out.println("Child speaking");
		super.speak();
	};
}
class Super{
	public static void main(String args[]){
		Child obj = new Child(69,"BOb","9th");
		obj.displayC();
		obj.speak();
	};
}
