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
int isempty();
void size();

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
        printf("Pushed %d \n", x);
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
void size(){
    for (int i = top; i>-1; i--)
    {
        printf("%d\n",stack_arr[top]);
        top--;
    }
    
}
int main(){
    push(0);
    push(1);
    push(2);
    size();
}

