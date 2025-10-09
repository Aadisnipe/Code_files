#include <iostream>

// namespace can help to resolve naming conflict for same name variable from diff scope
// "::" => this is called scope resolution operator it finds scope of a variable 

namespace  first{
	int x=10;
}
namespace second{
	int x=13;
}
int main(){

	using namespace std; //with this it automatically gives a scope to those variable whose scope is not set
	
	//std:: cout << x << '\n'; // gives 12
	//std:: cout << first::x << "\n"; // gives 10 
	//std:: cout << second::x << '\n'; // gives 13
	string ba="gfcgfc";
	cout << ba << endl;
	return 0;
}
 //bt-line
 //namespace helps to locate scope and :: is scope operator 
