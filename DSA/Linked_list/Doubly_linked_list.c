#include <stdio.h>
#include <stdlib.h>
struct Node *insert_End(struct Node *head, int data);
struct Node *a_empty_list(int data);
struct Node *insert_Begin(struct Node *head, int data);
struct Node *insert_at_index(struct Node *head, int index, int data);
struct Node*delete_index(struct Node*head,int index);
struct Node *delete_beg(struct Node *head);
struct Node *delete_end(struct Node *head);
struct Node
{
    struct Node *prev;
    int data;
    struct Node *next;
};
struct Node *create_new_list(int n)
{
    if (n <= 0)
    {
        return NULL;
    }
    int data;
    struct Node *head;
    printf("Enter the data of the 1 node=>");
    scanf("%d", &data);
    head = a_empty_list(data);
    for (int i = 1; i < n; i++)
    {
        printf("Enter the data of the %d node=>", i + 1);
        scanf("%d", &data);
        head = insert_End(head, data);
    }
    return head;
}
struct Node *a_empty_list(int data)
{
    struct Node *temp = malloc(sizeof(struct Node));
    temp->prev = NULL;
    temp->data = data;
    temp->next = NULL;
    return temp;
}
struct Node *insert_End(struct Node *head, int data)
{
    if (head == NULL)
    {
        head = insert_Begin(head, data);
        return head;
    }

    struct Node *temp = malloc(sizeof(struct Node));
    struct Node *tp;
    tp = head;
    while (tp->next != NULL)
    {
        tp = tp->next;
    }
    temp->prev = tp;
    tp->next = temp;
    temp->next = NULL;
    temp->data = data;
    return head;
}
struct Node *insert_Begin(struct Node *head, int data)
{
    struct Node *temp;
    temp = a_empty_list(data);
    if (head != NULL)
    {
        temp->prev = NULL;
        temp->next = head;
        head->prev = temp;
    }
    return temp;
}
struct Node *insert_at_index(struct Node *head, int index, int data)
{
    if (index == 0) // at intial postion
    {
        return insert_Begin(head, data);
    }
    struct Node *ptr = head;
    int i = 0;
    while (i != index && ptr != NULL)
    {
        ptr = ptr->next;
        i++;
    }
    if (ptr == NULL)
    {
        if (i == index)
        {
            return insert_End(head, data);
        }
        else
        {
            printf("index out of bound for %d insertion\n", data);
            return head;
        }
    }
    struct Node *temp = a_empty_list(data);
    struct Node *ptr2 = ptr->prev;
    temp->next = ptr;
    ptr->prev = temp;
    temp->prev = ptr2;
    ptr2->next = temp;
    return head;
}
struct Node *delete_beg(struct Node *head)
{
    if (head == NULL)
    {
        return NULL;
    }
    struct Node *temp = head;
    if (head->next==NULL)
    {
        free(temp);
        return NULL;
    }
    
    head = head->next;
    head->prev = NULL;
    free(temp);
    return head;
}
struct Node *delete_end(struct Node *head)
{
    struct Node *ptr = head;
    if (ptr->prev==NULL)
    {
        free(ptr);
        return NULL;
    }
    while (ptr->next != NULL)
    {
        ptr = ptr->next;
    }
    ptr = ptr->prev;
    free(ptr->next);
    ptr->next = NULL;
    return head;
}
struct Node*delete_index(struct Node*head,int index)
{
    if (index==0)
    {
        return delete_beg(head);
    }
    struct Node*ptr=head;
    struct Node*ptr2;
    int i=0;
    while (i != index && ptr != NULL)
    {
        ptr=ptr->next;
        i++;
    }
    if (ptr==NULL)
    {
        if (i==index)
        {
            return delete_end(head);
        }
        else
        {
            printf("Deletion out of bound for %d index\n",index);
            return head;
        }
        
    }
    else
    {
        ptr2=ptr->prev;
        ptr2->next=ptr->next;
        free(ptr);
        return head;
    }
    
}
struct Node*free_list(struct Node*head)
{
    printf("Freeing List.......\n");
    while (head!=NULL)
    {
        head=delete_beg(head);
    }
    printf("List freed");
    return NULL;
}
struct Node*reverse(struct Node*head) // watch video in order to revise it again https://youtu.be/-vWXY57N5xU?si=o104J-1_DQY259y8
{
    struct Node*ptr,*ptr2;
    ptr=head;
    ptr2=ptr->next;
    ptr->next=NULL;
    ptr->prev=ptr2;
    while (ptr2!=NULL)
    {
        ptr2->prev=ptr2->next;
        ptr2->next=ptr;
        ptr=ptr2;
        ptr2=ptr->prev;
    }
    head=ptr;
    return head;
}
int main()
{
    struct Node *head = NULL;
    struct Node *ptr;
    int n;
    printf("Enter no of nodes=>");
    scanf("%d", &n);
    head = create_new_list(n);
    /*head = insert_Begin(head, 0);
    head = insert_End(head, 99);
    head = insert_at_index(head,4564, 566);*/
    //head = delete_beg(head);
    //head=delete_index(head,5454);
    //head=free_list(head);
    ptr = head;
    while (ptr != NULL)
    {
        printf("%d\n", ptr->data);
        ptr = ptr->next;
    }
    head=reverse(head);
    ptr = head;
    while (ptr != NULL)
    {
        printf("%d\n", ptr->data);
        ptr = ptr->next;
    }

    return 0;
}