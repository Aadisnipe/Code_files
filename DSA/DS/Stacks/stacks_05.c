// stack implemetation using linked list
#include <stdio.h>
#include <stdlib.h>

struct stack
{
    int data;
    struct stack*link;
}*top=NULL;
//Push Function
struct stack*push(int data){
    struct stack*temp=malloc(sizeof(struct stack));
    if (temp==NULL)
    {
        printf("Stack Overflow\n");
        exit(1);
    }
    temp->data=data;
    temp->link=top;
    top=temp;
    printf("Pushed %d\n",data);
}
struct stack*pop(){
    if (top==NULL)
    {
        printf("Underflow\n");
        exit(1);
    }
    struct stack*temp=top;
    printf("Poped:%d\n",top->data);
    top=temp->link;
    free(temp);
}
int peek(){
    if (top==NULL)
    {
        printf("underflow\n");
        exit(1);
    }
    printf("%d\n",top->data);   
}
/*int size(){
    int i=0;
    struct stack*ptr=top;
    while (ptr!=NULL)
    {
        
    }
    
}*/
int main(){
    push(35);
    peek();
    // struct stack*ptr=top;
    // while (ptr!=NULL)
    // {
    //     printf("%d\n",ptr->data);
    //     ptr=ptr->link;
    // }
    
}


