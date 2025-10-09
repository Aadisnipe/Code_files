// stacks implemtation with array

#include <stdio.h>
#include <stdlib.h>
#define Max 10 // preprocessor directive
int stack_arr[Max];
int top = -1; // stack is empty

// all stacks function
void push(int x);
int pop();
void peek();
int prime_fac(int num);

void push(int x)
{
    if (top == Max - 1)
    {
        printf("Overflow\n");
        return;
    }
    else
    {
        top++;
        stack_arr[top] = x;
    }
}

int pop(){
    if (top==-1)
    {
        printf("underflow\n");
        exit(1);
    }
    printf("%d\n",stack_arr[top]);
    top--;
}

void peek(){
    if (top==-1)
    {
        printf("Stack Empty\n");
    }
    printf("%d\n",stack_arr[top]);    
}

int isempty(){
    if (top==-1)
    {
        return 1;
    }
    else
    {
        printf("Not empty");
    }
}

int prime_fac(int num){
    int i =2;
    printf("Prime Factor of %d as Follow:\n",num);
    while (num!=1)
    {
        while (num%i==0)
        {
            push(i);
            num=num/i;
        }
        i++;
    }
    while (top!=-1)
    {
        pop();
    }   
}
int main(){
    prime_fac(8986896);
}

