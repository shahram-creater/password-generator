let fighters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",]

let passwordBTN = document.getElementById("password-btn")
let passwordEL= document.getElementById("password-el")
let passwordEL2=document.getElementById("password-el2")


passwordBTN.addEventListener("click", function(){
    

    let randomIndexOne = Math.floor( Math.random() * fighters.length )
    let randomIndexTwo = Math.floor( Math.random() * fighters.length )
    let randomIndexthree = Math.floor( Math.random() * fighters.length )
    let randomIndexfour = Math.floor( Math.random() * fighters.length )
    let randomIndexfive = Math.floor( Math.random() * fighters.length )
    let randomIndexsix = Math.floor( Math.random() * fighters.length )
    let randomIndexseven = Math.floor( Math.random() * fighters.length )
    let randomIndexeight = Math.floor( Math.random() * fighters.length )
    let randomIndexnine = Math.floor( Math.random() * fighters.length )
    let randomIndexTen = Math.floor( Math.random() * fighters.length )
    passwordEL.textContent  = fighters[randomIndexOne] +  fighters[randomIndexTwo]+fighters[randomIndexthree]+fighters[randomIndexfour]+
    fighters[randomIndexfive]+fighters[randomIndexsix]+fighters[randomIndexseven]+fighters[randomIndexeight]+fighters[randomIndexnine]+
    fighters[randomIndexTen]
    
}
)
