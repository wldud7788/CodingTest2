#include <stdio.h>

int main(){
	int H,M;
	scanf("%d %d",&H,&M);

	if(1<=H && H<24){
		if (M<45)
			printf("%d %d",H-1,M+15);
		else if (M>=45)
			printf("%d %d",H,M-45);
	}
	else if(H<=0){
		if (M<45)
			printf("%d %d",H+23,M+15);
		else if (M>=45)
			printf("%d %d",H,M-45);
	}
}