class Solution {
    public int solution(int a, int b) {
        int answer = ((a*1000000000l)%b == 0) ? 1 : 2;
        return answer;
    }
}