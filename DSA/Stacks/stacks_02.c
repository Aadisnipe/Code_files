#include <stdio.h>
#include <stdlib.h>
#define Max 10 //preprocessor also used for macros

//implementing stacks with array keeping top element at index 0

int stack_arr[Max];
int first=-1;

// all stacks function
void push(int x);
int pop();
void peek();
int isempty();
void size();

