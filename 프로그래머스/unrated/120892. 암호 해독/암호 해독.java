import java.util.stream.Collectors;
import java.util.stream.IntStream;

class Solution {
    public String solution(String cipher, int code) {
        
        return IntStream.range(code-1, cipher.length())
                .filter(value -> value%code == code-1)
                .mapToObj(c -> String.valueOf(cipher.charAt(c)))
                .collect(Collectors.joining());
    }
}