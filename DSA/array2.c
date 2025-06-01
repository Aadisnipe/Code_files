#include <stdio.h>rd
void display(int a[],int size){
    for (int i = 0; i < size; i++)
    {
        printf("%d\n",a[i]);

    }
    printf("array ends\n");
    
}
int insert(int element,int a[],int index,int *size,int cap){
    if (cap<=*size)
    {
        printf("Array is filled!!!!!\nNo insertion possible\n");
        return -1;
    }
    else if (*size<=index)
    {
        a[index]=element;
        printf("insertion complete\n");
        (*size)++;
    }
    else
    {
        for (int i = *size; i >= index; i--)
        {
            a[i]=a[i-1];
        }
        a[index]=element;
        (*size)++;

        
    }
        
    
    
    
}

int main(){
    int a[4]={1,2,6,4};
    int index=5;
    int size=4;
    int cap=4;
    int element=9;
    display(a,size);
    insert(element,a,index,&size,cap);
    display(a,size);
return 0;
}