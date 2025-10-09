#include <stdio.h>
#include <stdlib.h>

struct node {
    int data;
    struct node *prev;
    struct node *next;
};

struct node* create_new_list(int n) {
    if (n <= 0) {
        return NULL;
    }

    int value;
    struct node *head = NULL, *temp = NULL, *newNode = NULL;

    for (int i = 0; i < n; i++) {
        newNode = (struct node*)malloc(sizeof(struct node));
        if (newNode == NULL) {
            printf("Memory allocation failed\n");
            return head;
        }

        printf("Enter value for node %d: ", i + 1);
        scanf("%d", &value);

        newNode->data = value;
        newNode->prev = NULL;
        newNode->next = NULL;

        if (head == NULL) {
            // First node
            head = newNode;
            temp = newNode;
        } else {
            // Link with previous
            temp->next = newNode;
            newNode->prev = temp;
            temp = newNode;
        }
    }

    return head;
}

// Function to display list forward
void display_forward(struct node *head) {
    struct node *temp = head;
    printf("List (forward): ");
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

// Function to display list backward
void display_backward(struct node *head) {
    struct node *temp = head;
    if (temp == NULL) return;

    // go to last node
    while (temp->next != NULL) {
        temp = temp->next;
    }

    printf("List (backward): ");
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->prev;
    }
    printf("\n");
}

int main() {
    int n;
    printf("Enter number of nodes: ");
    scanf("%d", &n);

    struct node *head = create_new_list(n);

    display_forward(head);
    display_backward(head);

    return 0;
}
