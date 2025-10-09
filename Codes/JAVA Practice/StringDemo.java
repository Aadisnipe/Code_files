class StringDemo

//string in java are immutable 
//a new string is made every time any changes
//are made
 //string waste lot of memory
{
	public static void main(String arg[])
	{
		String str= new String("Hello Java"); 
		System.out.println(str);
		//concatinaton = add two string             
		str=str.concat(" How are You");
		//.length()= gives the length if the string      
		System.out.println(str.length());
		//.indexOf()=gives the index of the first matching char      
		System.out.println("this is the index of the char "+str.indexOf("u"));
		//.charAt()=gives the char on that index
		System.out.println("Char="+str.charAt(21));
		//.toUpperCase()=convert to capital letter
		System.out.println(str.toUpperCase());
		str=str.toUpperCase();
		System.out.println(str);
		//.toLowerCase()=convert to small letter
		System.out.println(str.toLowerCase());
		//.compareTo() this give 0 , + , - based on string 
		//0 means string is equal
		str=" Hello  bobob";
		System.out.println(str.compareTo("Hello"));
		//.trim() remove intial space
		System.out.println(str.trim());		
	}
}
