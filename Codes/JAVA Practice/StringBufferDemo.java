class StringBufferDemo
{
//StringBuffer is better than String because they make string mutable
//changes are made in the same obj, no new obj is created
	public static void main(String args[])
	{
		StringBuffer strb = new StringBuffer("Hello");
		System.out.println(strb);
		//.append()= add two string together
		System.out.println(strb.append(" Java"));
		//changes are final
		System.out.println(strb);
		//.insert()= add string to given index
		System.out.println(strb.insert(1,"test"));
		//.delete()=remove chars from bounded index
		System.out.println(strb.delete(1,7));
		//.reverse()=reverse the string
		System.out.println(strb.reverse());
		//.length()=gives length of the string
		//System.out.println(strb.length());
		strb.replace(0,9,"HEllo");
		System.out.println(strb.length());
		//.indexOf()=gives index of that first matching string
		System.out.println(strb.indexOf("H"));
		//.charAt()=gives index of give string
		System.out.println(strb.charAt(3));
		//.substring()=gives substring
		//it actually return a string and this string can be used with other string
		System.out.println(strb.substring(0,4));
		System.out.println(strb); 
		//give charsequence 
		System.out.println(strb.subSequence(0,4)); 
		System.out.println(strb); 

		
		
	}
}
