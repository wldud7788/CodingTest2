import java.util.*;

public class Main{
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);

		int X = sc.nextInt();
		int Y = sc.nextInt();

		System.out.println(X*(Y%10));
		System.out.println(X*(Y/10%10));
		System.out.println(X*(Y/100));
		System.out.println(X*Y); 
	}
}