class Solution {
    public int solution(int n) {
        int answer = 0;
        int j = n;
        if(n%2 == 1){
            for(int i = 1; i <= n; i+=2){
                answer += i;
            }
        }
        else {
            for(int a = 2; a <= n; a+=2){
                answer += a*a;
            }
        }
        return answer;
    }
}