let musica = document.getElementById("music")
let imagem = document.getElementById("image")
let pausa = document.getElementById("pauseBotton")
let start = document.getElementById("startBotton")
let namemusic = document.getElementById("nomeMusica")
var i = 0



adicionarMusica = function(nomeDaMusica, imagem, faixa){this.nomeDaMusica=nomeDaMusica, this.imagem=imagem,
this.faixa=faixa}

let playlist = [ 
    
new adicionarMusica("Billy Raffoul - HellorHighWater", "./style/images/DaysGone.jpg", "./music/Billy Raffoul-HellorHighWater.mp3" ),
new adicionarMusica("Ellie's Song (Through the Valley ) - The Last Of Us Part II", "./style/images/tlou.jpg", "./music/Ellie's Song (Through the Valley ) - The Last Of Us Part II.mp3"),
new adicionarMusica("Red Dead Redemption 2 Performed Live","./style/images/rdr2.jpg","./music/Red Dead Redemption 2 Performed Live.mp3"),
new adicionarMusica("Old Gods of Asgard - Take Control", "./style/images/control.jpg", "./music/Old Gods of Asgard - Take Control.mp3"),
new adicionarMusica("Sonic Forces - Main Theme _Fist Bump","./style/images/sonic.jpg", "./music/Sonic Forces - Main Theme _Fist Bump.mp3" )
]





primeiraMusica = function(){ namemusic.innerHTML = playlist[i].nomeDaMusica
    imagem.src= playlist[i].imagem
    musica.src=playlist[i].faixa
    console.log(i)
} 

iniciarMusica = function(){
 musica.play()
 start.style = "display:none"
 pausa.style = "display:inline-block"} 


pausarMusica = function(){musica.pause()
 pausa.style = "display:none"
   start.style = "display:inline-block"
  
   }




proximaMusica = function(){ i++
namemusic.innerHTML = playlist[i].nomeDaMusica
imagem.src= playlist[i].imagem
musica.src=playlist[i].faixa

pausa.style = "display:none"
start.style = "display:inline-block"
 if(i==4){i=-1}

 console.log(i)
}


musicaAnterior =  function () {   if(i==0){alert("nâo a músicas para trás")} else{
    
    i--
    namemusic.innerHTML = playlist[i].nomeDaMusica
    imagem.src= playlist[i].imagem
    musica.src=playlist[i].faixa
   
    pausa.style = "display:none"
    start.style = "display:inline-block"
 
    console.log(i)
  
} }

