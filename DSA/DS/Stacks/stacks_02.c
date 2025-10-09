#include <stdio.h>
#include <stdlib.h>
#define Max 5 //preprocessor also used for macros

//implementing stacks with array keeping top element at index 0

int stack_arr[Max];
int first=-1;

// all stacks function
void push(int data);
int pop();
void peek();
void size();
void display();

void push(int data){
    if (first==(Max-1))
    {
        printf("Stack Overflow\n");
        return;
    }
    int i;
    first+=1;
    for ( i = first; i >= 0; i--)
    {
        stack_arr[i]=stack_arr[i-1];
    }
    stack_arr[0]=data;
}

void display(){
    if (first==-1)
    {
        printf("Stack is empty\n");
    }
    
    for (int i = 0; i <= first; i++)
    {
        printf("%d\n",stack_arr[i]);
    }
    
}

void size(){
    int count=0;
    for (int i = 0; i <= first; i++)
    {
        count++;
    }
    printf("size: %d\n",count);
}

void peek(){
    if (first==-1)
    {
        printf("Stack is empty\n");
        return;
    } 
    printf("%d\n",stack_arr[0]);
}

int pop(){
    if (first==-1)
    {
        printf("Underflow\n");
        exit(1);
    }
    printf("pop:%d\n",stack_arr[0]);
    for (int i =0 ;i <=first; i++)
    {
        stack_arr[i]=stack_arr[i+1];
    }
    first--;
       
}
int main(){
    push(1);
    push(2);
    push(3);
    push(4);
    push(5);
    // push(6);
    pop();
    // pop();
    display();
    size();
    // printf("first->%d\n",first);
}

