#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
};

struct node *create_list(int n){
	// n= number of nodes
	if(n<=0){
		return NULL;
	}
	struct node *head=NULL,*temp=NULL,*lasttract=NULL;
	int value;
	for(int i=0;i<n;i++){
		printf("Enter value for %d:",i+1);
		scanf("%d",&value);
		temp = (struct node *)malloc(sizeof(struct node));
		temp->data=value;
		temp->next=NULL;
		if(head==NULL){
			head=temp;
			lasttract=temp; //keep the address of last inserted element
		}
		else{
			lasttract->next=temp;
			lasttract=temp;    //keep the address of last inserted element
		}
	}
	return head;
}
void display(struct node*head){
	struct node*ptr=head;
	while(ptr!=NULL){
		printf("Node value:%d\n",ptr->data);
		ptr=ptr->next;
	}
}
int main(){
	struct node *head = NULL;
	head=create_list(3);
	display(head);
}
