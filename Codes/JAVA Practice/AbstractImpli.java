abstract class Test{
	//abstract class is a class having atleast on abstract method...........
	//actually IRL we don't need anstract method for a abstract class
	//no object can be create for this class
	abstract void display();                            //Only Name no meaning
	void show(){
		System.out.println("This is a abstract");
	};
}
class Tester extends Test {
	//this will be the class in which we will write abstract methods meaning
	@Override
	void display(){
		System.out.println("Implementing");
	};
	@Override
	void show(){
		System.out.println("Concrete");
	};
}
class AbstractImpli{
	public static void main(String args[]){
		Tester obj = new Tester();
		obj.display();
		obj.show();
		//obj.speak();
	};
}
