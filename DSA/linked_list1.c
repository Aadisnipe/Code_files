#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
};
int count(struct node *head);
struct node *create_list(int n)
{
    if (n <= 0)
    {
        return NULL;
    }
    struct node *head = NULL, *temp = NULL, *ptr = NULL;
    int value;
    for (int i = 0; i < n; i++)
    {
        printf("Enter value for %d Node=> ", (i + 1));
        scanf("%d", &value);
        temp = (struct node *)malloc(sizeof(struct node));
        temp->data = value;
        temp->next = NULL;

        if (head == NULL)
        {
            head = temp;
        }
        else
        {
            ptr->next = temp;
        }
        ptr = temp;
    }
    return head;
}
void display(struct node *head)
{
    struct node *ptr = head;
    if (head == NULL)
    {
        printf("List is empty\n");
        return;
    }

    while (ptr != NULL)
    {
        printf("%d\n", ptr->data);
        ptr = ptr->next;
    }
    printf("Total NO. of nodes-> %d\n", count(head));
}
void del_beg(struct node **head)
{
    if (*head == NULL)
    {
        printf("List is Empty\n");
        return;
    }

    struct node *temp = *head;
    *head = (*head)->next;
    free(temp);
}
void del_end(struct node **head)
{
    if (count(*head) == 1)
    {
        free(*head);
        *head = NULL;
        return;
    }
    if (count(*head) == 0)
    {
        printf("Link is empty\n");
        return;
    }

    struct node *ptr = *head;
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
    int len = count(*head); // IMPROVEMENT: Added boundary check
    if (index < 0 || index >= len)
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
void insert_end(struct node **head, int value)
{
    struct node *temp = malloc(sizeof(struct node));
    temp->data = value;
    if ((*head) == NULL)
    {
        *head = temp;
        (*head)->next = NULL;
        return;
    }

    struct node *ptr = *head;
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
    if (index < 0 || index > count(*head))
    {
        printf("Invalid index\n");
        return;
    }
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

int count(struct node *head)
{
    struct node *ptr = head;
    int i = 0;
    while (ptr != NULL)
    {
        ptr = ptr->next;
        i++;
    }
    return i;
}
void free_list(struct node **head)
{
    while (*head != NULL)
    {
        del_beg(head);
    }
}
int main()
{
    struct node *head = NULL;
    int choice;
    printf("1. Create list\n"
           "2. Insert at the beginning\n"
           "3. Insert at the given index\n"
           "4. Insert at the end\n"
           "5. Delete at the beginning\n"
           "6. Delete at the given index\n"
           "7. Delete at the end\n"
           "8. Display list\n"
           "9. Count nodes\n"
           "10. Free list\n"
           "11. EXIT\n");

    while (1)
    {
        int value, index, n;
        printf("Enter a choice=>");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            printf("Enter Number of Node=>");
            scanf("%d", &n);
            head = create_list(n);
            break;
        case 2:
            printf("Enter value to insert at beginning=>");
            scanf("%d", &value);
            insert_beg(&head, value);
            break;
        case 3:
            printf("Enter value to insert at given index=>");
            scanf("%d", &value);
            printf("Enter index=>");
            scanf("%d", &index);
            insert(&head, value, index);
            break;
        case 4:
            printf("Enter value to insert at end=>");
            scanf("%d", &value);
            insert_end(&head, value);
            break;
        case 5:
            del_beg(&head);
            break;
        case 6:
            printf("Enter index to delete=>");
            scanf("%d", &index);
            del(&head, index);
            break;
        case 7:
            del_end(&head);
            break;
        case 8:
            display(head);
            break;
        case 9:
            printf("Total NO. of linked list-> %d\n", count(head));
            break;
        case 10:
            printf("Freeing the list...\n");
            free_list(&head);
            printf("List freed successfully.\n");
            break;
        case 11:
            free_list(&head);
            return 0;

        default:
            printf("Invalid choice. Please try again.\n");
            break;
        }
    }

    return 0;
}