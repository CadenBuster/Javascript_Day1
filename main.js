//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(strng,names){
    for (let myName of names){
        if (strng.toLowerCase().includes(myName.toLowerCase())){
            console.log(`matched ${myName}`)
        } else {
            console.log('No Match')
        }
    }
}

findWords(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i, 1, "even index")
        }
    };
    return arr
};

console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// =================Code Wars========================//

/* Code wars 1: https://www.codewars.com/kata/50654ddff44f800200000004
Solution:
function multiply(a, b){
  return a * b;
}


Code wars 2: https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript
Solutiion: function updateLight(current) {
  
  if (current == 'green'){
    return 'yellow'
  } else if (current == 'yellow'){
    return 'red'
  } else {
    return 'green'
  }

}
*/