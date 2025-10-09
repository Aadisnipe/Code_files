#include <stdio.h>
#include <stdlib.h>

struct myarray {
	int tsize;
	int usize;
	int*ptr;
};
void carray(struct myarray*a,int tsize,int usize){
	a->tsize=tsize;
	a->usize=usize;
	a->ptr=(int*)malloc(tsize*(sizeof(int)));
}
void entervalue(struct myarray*a){
	for(int i=0; i< a->usize;i++){
		printf("Enter value of %d:",i+1);
		scanf("%d",(a->ptr)+i);
	}
	printf("\n");
}
void printvalue(struct myarray*a){
	for(int i=0; i< a->usize;i++){
		printf("Entered value at %d:%d\n",i+1,a->ptr[i]);
	}
	printf("\n");
}
int main(){
	struct myarray arr;
	carray(&arr,15,3);
	entervalue(&arr);
	printvalue(&arr);
	return 0;
}
