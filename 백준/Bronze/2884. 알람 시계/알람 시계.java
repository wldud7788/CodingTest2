import java.util.*;

public class Main{
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		int H = sc.nextInt();
		int M = sc.nextInt();

		if(1<=H && H<24){
		if (M<45)
			System.out.printf("%d %d",H-1,M+15);
		else if (M>=45)
			System.out.printf("%d %d",H,M-45);
		}
		else if(H<=0){
			if (M<45)
				System.out.printf("%d %d",H+23,M+15);
			else if (M>=45)
				System.out.printf("%d %d",H,M-45);
		}
	}
}
