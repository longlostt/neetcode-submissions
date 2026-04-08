class Solution {
    reorganizeString(s) {
        let freqMap = new Map();
        let maxVal = 0;
        let maxElement = '';

        for (let char of s) {
            freqMap.set(char, (freqMap.get(char) || 0) + 1);
            if (freqMap.get(char) > maxVal) {
                maxVal = freqMap.get(char);
                maxElement = char;
            }
        }

        if (maxVal > Math.ceil(s.length / 2)) return "";

        let result = new Array(s.length);
        let idx=0;

        while (freqMap.get(maxElement) > 0) {
            result[idx] = maxElement;
            freqMap.set(maxElement, freqMap.get(maxElement) - 1);
            idx += 2;
        }

        for(const [key, value] of freqMap.entries()){
            let count = value;
            while(count > 0){
                if(idx >= s.length) idx = 1;
                result[idx] = key;
                idx += 2;
                count--;
            }
        }

        return result.join('')
    }
}