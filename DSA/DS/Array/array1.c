#include <stdio.h>
#include <stdlib.h>
struct myarray {
    int tsize;
    int usize;
    int*ptr;
};
void cjarray(struct myarray*a,int n,int m){
    a->tsize=n;
    a->usize=m;
    a->ptr=(int*)malloc(n*(sizeof(int))); // a->ptr = *(a).ptr since a is pointer so it only point address and to get value we first need to derefernce it using * this then we can access every element of structure which we have created using . operator but we are asking for memory address we don't need to derefence structure pointer
}
void entervalue(struct myarray*a){
    for(int i=0;i<a->usize;i++){
        printf("Enter value %d.",i);
        scanf("%d",((a->ptr)+i));
    }
}
void showvalue(struct myarray*a){
    for(int i=0;i<a->usize;i++){
        printf("%d",a->ptr[i]);     //a->ptr[i] == *(((*a).ptr)+i) or (*a).ptr[i]
        printf("\n");
    }
}
int main() {
    struct myarray arr1;
    cjarray(&arr1,10,2);
    entervalue(&arr1);
     showvalue(&arr1);

    return 0;
}
