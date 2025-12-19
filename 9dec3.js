function withdraw(amount,balence){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(amount < balence){
                resolve(`transaction done ,balence :${balence - amount}`)
            }else{
                reject(`insufficient balence ${balence}`)
            }
        },2000)
    })
}

withdraw(4000,5000)
    .then((msg)=>{
        console.log(msg)
    })
    .catch((err)=>{
        console.log('Error:',err)
    })

/*promises with async and await  */
function foodorder(hotelopen){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(hotelopen){
                resolve("order placed ,on the way")
            }else{
                reject("sorry hotel closed")
            }
        },500)
    })
    
}
async function placeorder(){
    try{
        console.log('placing order');
        result = await foodorder(false);
        console.log(result);
    }
    catch(err){
        console.log(err);

    }
}

placeorder()