#include <stdio.h>
#include <stdlib.h>
struct node
{
    int data;
    struct node *next;
};
struct node *empty_node(int data)
{
    struct node *temp = malloc(sizeof(struct node));
    temp->data = data;
    temp->next = temp;
    return temp;
}
struct node *insert_beg(struct node *tail, int data)
{
    if (tail == NULL)
    {
        return empty_node(data);
    }

    struct node *temp = empty_node(data);
    temp->next = tail->next;
    tail->next = temp;
    return tail;
}
struct node *insert_end(struct node *tail, int data)
{
    if (tail == NULL)
    {
        return empty_node(data);
    }

    struct node *temp = empty_node(data);
    temp->next = tail->next;
    tail->next = temp;
    return temp;
}
struct node *insert(struct node *tail, int index, int data)
{
    int i = 0;
    if (tail == NULL && index == 0)
    {
        return empty_node(data);
    }

    if (tail == NULL)
    {
        printf("Index is out of bounds\n");
        return NULL;
    }

    if (index == 0)
    {
        return insert_beg(tail, data);
    }

    // Traverse the list
    struct node *ptr = tail->next; // head
    while (i < index - 1 && ptr != tail)
    {
        ptr = ptr->next;
        i++;
    }

    if (i < index - 1 || ptr == NULL)
    {
        printf("Index is out of bounds\n");
        return tail;
    }

    // Insert in the middle or end
    struct node *temp = empty_node(data);
    temp->next = ptr->next;
    ptr->next = temp;

    // If we're inserting after tail, update tail
    if (ptr == tail)
    {
        tail = temp;
    }

    return tail;
}
struct node *delete_beg(struct node *tail)
{
    if (tail==NULL)
    {
        printf("Underflow\n");
        return NULL;
    }
    if (tail==tail->next)
    {
        free(tail);
        return NULL;
    }
    struct node*temp=tail->next->next;
    struct node*head=tail->next;
    tail->next=temp;
    free(head);
    return tail;
}
struct node *delete_end(struct node *tail)
{
    if (tail==NULL)
    {
        printf("Underflow\n");
        return NULL;
    }
    if (tail==tail->next)
    {
        free(tail);
        return NULL;
    }
    struct node*ptr=tail->next;
    while (ptr->next!=tail)
    {
        ptr=ptr->next;
    }
    ptr->next=tail->next;
    free(tail);
    return ptr;
}
struct node *delete(struct node *tail,int index)
{
    if (tail==NULL)
    {
        printf("Underflow\n");
        return NULL;
    }
    if (index==0)
    {
        return delete_beg(tail);
    }
    struct node*ptr=tail->next;
    int i=0;
    while (i<index-1 && ptr!=tail)
    {
        ptr=ptr->next;
        i++;
    }
    if ((i+1)==index && ptr->next==tail)
    {
        printf("end\n");
        return delete_end(tail);
    }
    if (i<index-1 || ptr->next==tail->next)
    {
        printf("Index out of bound\n");
        return tail;
    } 
    struct node*temp=ptr->next;
    ptr->next=temp->next;
    free(temp);
    //printf("to be deleted->%d\n",temp->data);
    printf("i->%d\n",i);
    return tail;
}
void count(struct node*tail)
{
    if (tail==NULL)
    {
        printf("Empty list");
    }
    int i=0;
    struct node *ptr = tail->next;
    do
    {
        i++;
        ptr=ptr->next;
    } while (ptr != tail->next);
    printf("Total list is->%d\n",i);
}
int main()
{
    struct node *tail;
tail = insert_beg(tail, 10);
tail = insert_beg(tail, 10);
tail = insert_beg(tail, 10);
tail = insert_beg(tail, 10);
tail = insert_beg(tail, 10);
count(tail);
  struct node *ptr = tail->next;
    do
    {
        printf("%d\n", ptr->data);
        ptr = ptr->next;
    } while (ptr != tail->next);
    
    return 0;
}