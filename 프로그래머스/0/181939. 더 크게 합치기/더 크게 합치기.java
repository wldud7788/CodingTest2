class Solution {
    public int solution(int a, int b) {
        String A = "" + a + b;
        String B = "" + b + a;
        
        int result1 = Integer.parseInt(A);
        int result2 = Integer.parseInt(B);
        
        if(result1 < result2){
            return result2;
        }
        else{
            return result1;
        }
        
    }
}