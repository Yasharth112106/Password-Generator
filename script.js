let b1=document.querySelector("#b1");
let b2=document.querySelector("#b2");
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



function genPass(){
    let rand1='',rand2='';
    for(let i=1;i<15;i++){
        rand1+=characters[Math.floor(Math.random()*characters.length)];
        rand2+=characters[Math.floor(Math.random()*characters.length)];
    }
    b1.textContent=rand1;
    b2.textContent=rand2;
}