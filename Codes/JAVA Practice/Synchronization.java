import java.util.*;
 //There are three ways to Sync threads
 //1.synchronized keyword
 //2.synchronized block ,in this we have to pass current working thread reference with this keyword 
 //3.synchronized static function (no object required in this method)
 
 class Example{
	synchronized static void display(){
		 Thread t = Thread.currentThread();
		 try{
			 for(int i=0;i<5;i++){
				 t.sleep(1000);
				 System.out.println(t.getName()+"-"+i);
			 }
		 }
		 catch(Exception e){}		 
	 }
 }
 
 class T extends Thread{
	 @Override
	 public void run(){
		 Example.display();
	 };
 }
 
class Synchronization {
	public static void main(String args[]){
		// Since Single is a child class of Thread it will have all the methods of Thread class
		T t1 = new T();
		T t2 = new T();
		T t3 = new T();
		t1.start(); //this will automatically call the .run() method
		t2.start();
		t3.start();
	};
}
 
