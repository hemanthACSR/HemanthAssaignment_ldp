//comands of local stograge and session storage 
localStorage.setItem('name',"hemanth")
sessionStorage.setItem('name',"chandra")
sessionStorage.setItem("id","1234")

console.log(localStorage.getItem('name'));
console.log(sessionStorage.getItem('id'));

console.log(`local storage length:${localStorage.length}`)
console.log(`session storage length:${sessionStorage.length}`)

localStorage.removeItem("name")
sessionStorage.removeItem("id")


