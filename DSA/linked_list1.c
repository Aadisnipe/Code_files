#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
};

struct node* create_list(int n){
    if (n<=0)
    {
        return NULL;
    }
    struct node * head=NULL ,*temp=NULL ,*ptr=NULL;
    int value;
    for (int i = 0; i < n; i++)
    {
        printf("Enter value for %d Node=> ",(i+1));
        scanf("%d",&value);
        temp = (struct node*)malloc(sizeof(struct node));
        temp->data=value;
        temp->next=NULL;

        if (head==NULL)
        {
            head=temp;
        }
        else
        {
            ptr->next=temp;
        }
        ptr=temp;
    }
    return head;  
}
void display(struct node *head)
{
    struct node *ptr = head;
    while (ptr != NULL)
    {
        printf("%d\n", ptr->data);
        ptr = ptr->next;
    }
}
void del_beg(struct node **head)
{
    struct node *temp = *head;
    *head = (*head)->next;
    free(temp);
}
void del_end(struct node *head)
{
    struct node *ptr = head;
    struct node *temp;
    while (ptr->next != NULL)
    {
        temp = ptr;
        ptr = ptr->next;
    }
    temp->next = NULL;
    free(ptr);
}
void del(struct node **head, int index)
{
    struct node *ptr = *head;
    struct node *temp;

    // Handle deletion at index 0
    if (index == 0)
    {
        del_beg(head);
        return;
    }

    int i = 0;
    while (i != index && ptr->next != NULL)
    {
        temp = ptr;
        ptr = ptr->next;
        i++;
    }

    // If index is out of bounds
    if (ptr->next == NULL && i != index)
    {
        printf("Index out of bounds\n");
        return;
    }

    // Handle deletion of the last node
    if (ptr->next == NULL)
    {
        temp->next = NULL;
        free(ptr);
        return;
    }

    // General case: delete the node at the given index
    temp->next = ptr->next;
    free(ptr);
}
void insert_end(struct node *head, int value)
{
    struct node *temp = malloc(sizeof(struct node));
    temp->data = value;
    struct node *ptr = head;
    while (ptr->next != NULL)
    {
        ptr = ptr->next;
    }
    ptr->next = temp;
    temp->next = NULL;
}
void insert_beg(struct node **head, int value)
{
    struct node *temp = malloc(sizeof(struct node));
    temp->data = value;
    temp->next = *head;
    *head = temp;
}
void insert(struct node **head, int value, int index)
{
    if (index == 0)
    {
        insert_beg(head, value);
        return; // Exit the function after inserting at the beginning
    }

    struct node *temp = malloc(sizeof(struct node));
    temp->data = value;
    struct node *ptr = *head;
    int i = 0;
    while (i != (index - 1) && ptr != NULL)
    {
        i++;
        ptr = ptr->next;
    }
    if (ptr == NULL)
    {
        printf("Index out of bounds\n");
        return;
    }
    temp->next = ptr->next;
    ptr->next = temp;
}

int main()
{
    struct node *head;
    head=create_list(5);
    printf("Linked list\n");
    display(head);
    printf("Linked list after insertion\n");
    insert_end(head, 5);
    insert_beg(&head, 0);
    insert(&head, 4, 0);
    display(head);
    printf("Linked list after deleton\n");
    del(&head,0);
    del(&head,4);
    display(head);

    return 0;
}