class A {
	// method overloading
    void add() {
        int a = 12, b = 32;
        int c = a + b;
        System.out.println("SUM: " + c);
    }
    
    void add(int a, int b) {
        System.out.println("SUM: " + (a + b));
    }
}
class B {
	// contruction is a method with no return type and named same as class name
	B(){
		System.out.println("Hello");
	}
	B(int a){
		System.out.println("Number="+a);
	}
	
}
class Coverloading {
    public static void main(String args[]) {
        A obj = new A();
    
        B obj2 = new B();
        B obj3 = new B(69); //constructor overloading
        
        obj.add();
        obj.add(10, 20); // Calling the overloaded method
        
        int x=98,y=12;
        
        System.out.println("output="+x+y);  //concatinate
        System.out.println("output="+(x+y)); //add //operator overloading
    }
}
