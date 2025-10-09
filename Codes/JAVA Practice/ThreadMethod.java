//This might look messy but read it carefully , this talks about basics of working of threads
import java.util.*;

//Single threading Using Inheritance

class Single extends Thread{
	@Override
	public void run(){
		Thread t=currentThread();  //it is like "this" which used to give current obj refernce but it give current thread refernce
		//sleep and join are static method means they can be use even without creating obj
		System.out.println("Thread is alive:"+ t.isAlive());
		try{
			for(int i=0;i<10;i++){
				//t.sleep(1000);
			    System.out.println(Thread.currentThread().getName() + " : " + i);
		    }
		}
		catch(Exception e){
			System.out.println(e.getMessage());
		}
	}	
	
}

class ThreadMethod{
	public static void main(String args[]){
		// Since Single is a child class of Thread it will have all the methods of Thread class
		Single obj = new Single(); // thread 1
		Single obj2 = new Single(); //thread 2
		Single obj3 = new Single(); //thread 2
		/*try{
			obj.sleep(3000);
		}
		catch(Exception e){
			System.out.println(e.getMessage());
		}*/
		obj.start(); //this will automatically call the .run() method
		try {
            obj.join();  // main thread wait untill obj thread complete
        } 
        catch (Exception e) {}
        System.out.println("Thread is alive:"+ obj.isAlive());
		obj2.start();
		/*System.out.println("Id="+obj.getId()); //gives the id of the thread
		System.out.println("Name="+obj.getName()); //gives the NAME of the thread , by deafult value is 0
		String str="My Thread";
		obj.setName(str); // set name of the thread with given strimg
		System.out.println("Name="+obj.getName());
		System.out.println("Priority of this thread is :"+obj.getPriority()); // default is 5
		//we can also change priority
		obj.setPriority(2);
		System.out.println("Changed Priority :"+obj.getPriority());*/	
	}
}
