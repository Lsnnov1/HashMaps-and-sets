const myMap = new Map()
myMap.set('sixforty', 640)
myMap.set('sevenTwenty', 720)
const emptyArr = []
myMap.set(emptyArr, 'empty array')

// Map func as keys
const add = (x,y) => x + y;
const multiply = (x,y) => x * y;

const funcCalls = new Map;
funcCalls.set(add, 2)
funcCalls.set(multiply, 4)

// MAP BUILT-INS

// MAKE MAP FROM GIVEN 
const bandData = [[3,'3 DOORS DOWN'],
['THREE', 'THREE DOG NIGHT'],
['NINE','NINE INCH NAILS'],
['FOUR', 'THE FOUR SEASONS'],
[41, 'SUM 41']]

const bandMap = new Map(bandData);
// CAN TURN MAP BACK INTO ARRAY WITH SPREAD OPERATOR 

// const unMap = [...bandMap]

// SETS
 const bannedHashTags = new Set(['noFilter', 'yolo', 'justSaying', 'winning'])  

 function filterTags(tags){
   return tags.filter((tag) => !bannedHashTags.has(tag))
 }
    

    
 