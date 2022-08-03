const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let psw1 = document.getElementById("passInput")
let psw2 = document.getElementById("passInput2")
    

function pswdGenerator(){
    let password1 = ""
    let password2 = ""
    let passwordLength = 14
       
    for (i=0; i <= passwordLength; i++){
        let randomCharacter = Math.floor(Math.random()* characters.length)
        password1 += characters[randomCharacter]
     
          }
    
 psw1.textContent = password1
 
  for (i=0; i <= passwordLength; i++){
        let randomCharacter = Math.floor(Math.random()* characters.length)
        password2 += characters[randomCharacter]
          }

 psw2.textContent = password2
}
pswdGenerator()

function copyClickButton() {
    let textCopy = psw2.textContent
    
    navigator.cliboard.writeText(textCopy.textContent)
    
}

copyClickButton()

function copyClickButton2() {
    let textCopy2 = psw1.textContent
    
    navigator.cliboard.writeText(textCopy2.textContent)
    
}

copyClickButton2()




