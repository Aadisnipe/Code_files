#include <stdio.h>
#include <stdlib.h>

#define MAX 10
int sarray[MAX];
int top;

void push(int x);
int pop();
void peek();

void push(int x){
	if (top==(MAX-1)){
		printf("Overflow");
		return;
	}
	else{
		top++;
		sarray[top]=x;
		printf("Value pushed %d\n",x);
	}
}
int pop(){
	if(top==-1){
		printf("underflow");
		exit(1);
	}
	else{
		printf("Valued poped %d\n",sarray[top]);
		top--;
	}
}
void peek(){
	if(top==-1){
		printf("Stack empty");
	}
	else{
		printf("Top element is %d",sarray[top]);
	}
}
int main(){
	push(1);
	push(2);
	push(3);
	push(4);
	push(5);
	pop();
	pop();
	peek();
}
