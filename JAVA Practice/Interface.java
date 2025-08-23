interface Calling{
	void calling();
}
interface Video{
	void record();
}
class VideoCalling implements Video, Calling{
	@Override
	public void record(){
		System.out.println("Started video recording");
	}
	@Override
	public void calling(){
		System.out.println("Started calling");
	}
	void call(){
		record();
		calling();
		
	};
}
class Interface{
	public static void main(String args[]){
		VideoCalling app = new VideoCalling();
		app.call();
	};
}
//java does not allow method inside a method although we create a method inside a method by first create a class inside a method
//and then creating a obj of that class in the outter method
