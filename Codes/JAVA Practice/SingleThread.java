import java.util.*;

//Single threading Using Inheritance

class Single extends Thread{
	@Override
	public void run(){
		for(int i=0;i<10;i++){
			System.out.println(i);
		}
	}
	
}

class SingleThread{
	public static void main(String args[]){
		// Since Single is a child class of Thread it will have all the methods of Thread class
		Single obj = new Single();
		obj.start(); //this will automatically call the .run() method
	};
}
