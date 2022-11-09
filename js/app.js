// Function 1 (add 2 arguments together and multiply by 5)
function integers(num1, num2){
    let result = (num1 + num2) * 5;
    return result;
}

console.log(integers(2, 2, 5));
console.log(integers(3, 3, 5));
console.log(integers(4, 4, 5));

// Function 2 (return true if string length is > 10 characters)
function check(string){
    if (string.length > 10){
        return true;
    } else {
        return false;
    }
}

console.log(check(`victoristhebest`));
console.log(check(`victor`));
console.log(check(`victorisnotthebest`));

// Function 3 (Function to return first element in the array that starts with `ph`)
function firstelement(){
    let name = [`victor`, `kristy`, `phat`, `ava`, `photo`];
    
    for (let i = 0; i < name.length; i++){
        if (name[i].startsWith(`ph`) === true){
            return name[i];
        }
    }    
}

console.log(firstelement(`photo`));
console.log(firstelement(`victor`));
console.log(firstelement(`kristy`));