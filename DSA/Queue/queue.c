#include <stdio.h>
#include <stdlib.h>

#define MAX 5   // maximum size of the queue

int queue[MAX];
int front = -1, rear = -1;

// Function to insert an element (enqueue)
void enqueue(int value) {
    if (rear == MAX - 1) {
        printf("Queue Overflow! Cannot insert %d\n", value);
    } else {
        if (front == -1) {
            front = 0; // first element inserted
        }
        rear++;
        queue[rear] = value;
        printf("%d inserted into the queue.\n", value);
    }
}

// Function to remove an element (dequeue)
void dequeue() {
    if (front == -1 || front > rear) {
        printf("Queue Underflow! Nothing to delete.\n");
    } else {
        printf("%d removed from the queue.\n", queue[front]);
        front++;
    }
}

// Function to display the queue
void display() {
    if (front == -1 || front > rear) {
        printf("Queue is empty.\n");
    } else {
        printf("Queue elements: ");
        for (int i = front; i <= rear; i++) {
            printf("%d ", queue[i]);
        }
        printf("\n");
    }
}

// Main program
int main() {
    int choice, value;
    while (1) {
        printf("\n--- Queue Menu ---\n");
        printf("1. Enqueue (Insert)\n");
        printf("2. Dequeue (Delete)\n");
        printf("3. Display\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter value to insert: ");
                scanf("%d", &value);
                enqueue(value);
                break;
            case 2:
                dequeue();
                break;
            case 3:
                display();
                break;
            case 4:
                exit(0);
            default:
                printf("Invalid choice! Try again.\n");
        }
    }
    return 0;
}
