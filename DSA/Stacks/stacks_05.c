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
int main(){
    push(35);
    push(95);
    push(985);
    push(05);
    struct stack*ptr=top;
    while (ptr!=NULL)
    {
        printf("%d\n",ptr->data);
        ptr=ptr->link;
    }
    
}


