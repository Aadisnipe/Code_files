class Parent{
	void display(){                                      //everthing about the 	FUCTION DECLARATION should be same
		System.out.println("I am Parent");
	};
}
class Child extends Parent{
	@Override
	void display(){
		System.out.println("I am Child");              // FUNCTION DEFINATION can be differnt
	};
}
class MethodOverriding{
	public static void main(String args[]){
		Child obj = new Child();
		obj.display();
	};
}
