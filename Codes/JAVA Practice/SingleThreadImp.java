import java.util.*;

//Single threading Using interface and implements
// we will use Runnable interface

class SingleImp implements Runnable{
	@Override
	public void run(){
		for(int i=0;i<10;i++){
			System.out.println(i);
		}
	}
	
}

class SingleThreadImp{
	public static void main(String args[]){
		// Since SingleImp is a implements of Runnable Interface
		// so to access Thread class we will pass it to Thread class
		SingleImp obj = new SingleImp();
		Thread t = new Thread(obj);
		t.start(); //this will automatically call the .run() method
	};
}
