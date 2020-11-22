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

const item = document.body
item.onscroll = function(){area()}
item.onload = function(){area()}

function area(){
    const top = pageYOffset || document.body.scrollTop
    if(top<90){
        document.getElementById('hamburguer').style.display='none'
        document.getElementById('menu-icon').style.display='none'
        const itens = document.getElementsByClassName('a-menu')
        for(i=0;i<=5;i++){
            itens[0].style.display='none'
        }
        } else{
            document.getElementById('hamburguer').style.display='inline-block'
            document.getElementById('menu-icon').style.display='inline-block'
            
        }
    }

/*     const itensMenu = document.getElementsByClassName('a-menu')
    
    for(i=0;i<=5;i++){
        const item = itensMenu[0]
        
        item.onclick = function(){
            console.log('aqui')
            area()
        }

    } */