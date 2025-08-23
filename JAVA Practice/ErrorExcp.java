class ErrorExcp {
  public static void main(String[] args) {

    try {

      // code that generate exception
      int divideByZero = 5 / 0;
      System.out.println("Rest of code in try block");
    }
    
    catch (Exception e) {
      System.out.println("ArithmeticException => " + e.getMessage());
      System.out.println("error");
    }
    finally{
		System.out.println("it ran");
	}
  }
}
