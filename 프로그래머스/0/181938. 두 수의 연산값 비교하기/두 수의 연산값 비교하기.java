class Solution {
    public int solution(int a, int b) {
        String A = "" + a + b ;
        int result1 = Integer.parseInt(A);
        int result2 = 2 * a * b;
        if(result1 < result2)
            return result2;
        else if (result1 > result2)
            return result1;
        else 
            return result1;
    }
}