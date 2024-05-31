#include <stdio.h>

int main(){
	int A,B;
	scanf("%d %d",&A,&B);

	if(0<A && 0<B)
		printf("1");
	else if(A<0 && 0<B)
		printf("2");
	else if(A<0 && B<0)
		printf("3");
	else if(0<A && B<0)
		printf("4");
}