const question = document.querySelectorAll("li")

for(i=0;i<=4;i++){
    const item = question[i]
    item.onclick = function(e){
        e.preventDefault()
        changeVisib()
        changeBg(item)
    }
}   

function changeBg(item){
    document.getElementById('about-reiki').style.backgroundImage=`url('../images/${item.id}.jpg')`
    document.getElementById(`p${item.id}`).style.visibility='visible'
} 

function changeVisib(){
    const itens = document.getElementsByClassName('parag')
    for(i=0;i<=4;i++){
    itens[i].style.visibility='hidden'
   }
}