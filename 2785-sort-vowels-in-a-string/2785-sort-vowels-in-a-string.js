/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
    const freq = Array(10).fill(0)
    let ans = ''

    for(let a of s){
        let i = vowels.indexOf(a)
        
        if(i !== -1) freq[i]++
    }

    let cur = 0
    
    for(let a of s){
        if(vowels.includes(a)){
            while(freq[cur] === 0) cur++
            ans += vowels[cur]
            freq[cur]--
        }
        else ans += a
    }
    return ans 
}; 