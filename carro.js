//código do carro

let xCarros = [730, 730, 730, 730, 730, 730];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.3, 5, 4, 3];
let comprimentoCarro = 30;
let alturaCarro = 30;

function mostraCarro(){
    for (let i = 0; i < imagemCarros.length; i = i + 1){
     image(imagemCarros[i], xCarros[i], yCarros[i], 40, 40);
    }
}

function movimentaCarro(){
  //xCarro = xCarro - 5; ou xCarro -= 5;
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
    for (let i = 0; i < imagemCarros.length; i = i + 1){
        if (passouTodaATela(xCarros[i])){
            xCarros[i] = 730;
        }
    }
}

function passouTodaATela(xCarros){
    return xCarros < -50;
}