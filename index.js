let savel=document.getElementById("save-el")
let countEl= document.getElementById("count-el")
let count = 0 

console.log(savel)
function increment()
{
    count=count+1
    countEl.innerText=count
} 
function save()
{
    let countSTR= count + " -  "
    savel.textContent += countSTR
    countEl.textContent = 0 
    count= 0
    console.log(count)
}




 