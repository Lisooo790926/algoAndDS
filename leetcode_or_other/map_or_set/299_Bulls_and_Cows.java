class Solution {
    public String getHint(String secret, String guess) {
        
        // create the map of secret, key = char, value = count
        char[] secrets = secret.toCharArray();
        char[] guesses = guess.toCharArray();
        int a = 0;
        int b = 0;
        Map<Character, Integer> secretMap = new HashMap<>();
        final int size = secrets.length;
        
        for(int i=0;i<size;i++) {
            if(secrets[i] == guesses[i]) a++;
            secretMap.put(secrets[i], secretMap.containsKey(secrets[i]) ? secretMap.get(secrets[i])+1 : 1);
        }
        
        // count the b result
        for(char curChar : guesses) {
           if(secretMap.containsKey(curChar) && secretMap.get(curChar) > 0){
               b++;
               secretMap.put(curChar, secretMap.get(curChar)-1);
           }
        }
        
        return a + "A" + (b-a) + "B";
        
    }
}


// god solution 
class Solution {
    public String getHint(String secret, String guess) {

        // loop once time then get the cow and bull
        // create array for record appeared number count
        // for secret ++, for guess --, then if secret appear again(guess already appeared)
        // then ++ and -- will be elimnate! 
        
        int[] record = new int[10];
        int bulls = 0;
        int cows = 0;

        for(int i=0;i<secret.length();i++) {
            int se = Character.getNumericValue(secret.charAt(i));
            int gu = Character.getNumericValue(guess.charAt(i));
            if(se == gu) bulls++;
            else {
                if(record[se] < 0) cows++;
                if(record[gu] > 0) cows++;
                record[se] = record[se] + 1;
                record[gu] = record[gu] - 1;
            }
        }

        return bulls + "A" + cows + "B";
    }
}