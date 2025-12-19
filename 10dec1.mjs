import {diff} from '/Users/zemoso/Desktop/practice java script/10dec.mjs'
console.log(diff(3,2))

//closer

function outer(){
    let val = 'heamnth'
    function inner(){
        console.log(`hi ${val}`)
    }
    return inner

}
outer('hemanth')()