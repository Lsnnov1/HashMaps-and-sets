// Q1
new Set([1,1,2,2,3,4]);
// [1,2,3,4]

// Q2
[...new Set("referee")].join("");
// RETURNS "REF"

// Q3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// 0: {Array(3) => true}
// 1: {Array(3) => false}

// Q4
// WRITE HAS DUPLICATE FUNCTION
function hasDuplicate(arr){
  return new Set(arr).size !== arr.length
}
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

// Q5
// CREATE VOWEL COUNTER FUNCTION
const vowels = "aeiou"
// CREATE VARIABLE THAT CONTAINS VOWELS
function VowelCount(str){
    // CREATE NEW MAP
    const newMap = new Map();
    // CREATE FUNCTION TO CHECK IF VOWEL 
    function isVowel(char){
        return "aeiou".includes(char);
    }
    // LOOP THROUGH GIVEN STRING
    for(char of str){
    // LOWERCASE EACH CHARACTER
    let lowCaseChar = char.toLowerCase();
    // IF STRING CHARACTER IS VOWEL,
    if(isVowel(lowCaseChar)){
        // AND IF NEWMAP CONTAINS THAT CHARACTER,
        if(newMap.has(lowCaseChar)){
            // SET KEY TO CHAR, INCREMENT VALUE BY 1
          newMap.set(lowCaseChar, newMap.get(lowCaseChar) + 1);
        } else {
            // IF NOT, SET KEY TO CHAR, VALUE TO ONE
          newMap.set(lowCaseChar, 1);
      }
    }
  }
  return newMap;
}


VowelCount('awesome')
VowelCount("SixSevenSnakes")


