#include <stdio.h>
void bubbleSortDescending(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        // Last i elements are already in place
        for (int j = 0; j < n - i - 1; j++) {
            // Swap if the element is smaller than the next
            if (arr[j] < arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\n");
}
int main(){
	int arr[10];
	printf("Enter NOs.\n");
	for(int i=0;i<10;i++){
		printf("%d)",(i+1));
		scanf("%d",arr+i);
	}
	printf("Nos In Descending Order\n");
	bubbleSortDescending(arr,10);
	printArray(arr,10);
}

