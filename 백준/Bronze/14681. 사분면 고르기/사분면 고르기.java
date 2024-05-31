import java.util.*;

public class Main{
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);

		int A = sc.nextInt();
		int B = sc.nextInt();

		if (0<A && 0<B)
			System.out.println("1");
		else if(A<0 && 0<B)
			System.out.println("2");
		else if(A<0 && B<0)
			System.out.println("3");
		else if(0<A && B<0)
			System.out.println("4");
	}
}