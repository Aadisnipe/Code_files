#include <iostream>

//using typedef

//typedef std::string text_t;

//using works the same

using text=std::string;
int main(){
	using namespace std;
	text t="helloworld";
	cout << t;
}

//bt-line
//alias in python is used with as but here using typedef and using
