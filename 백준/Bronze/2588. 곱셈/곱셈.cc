#include <stdio.h>

int main() {
    int X,Y;
    scanf("%d %d",&X,&Y);
    
    printf("%d\n",X*(Y%10));
    printf("%d\n",X*(Y/10%10));
    printf("%d\n",X*(Y/100));
    printf("%d",X*Y);
}