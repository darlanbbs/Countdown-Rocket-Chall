function atualizarDigitos(digito){
    return `0${digito}`.slice(-2)
}
function atualizarDigitos2(digito){
   return `0${digito}`.slice(-3)
}

function temporizador(tempo){
    const segundos = document.querySelector('.segundoN')
    const minutos = document.querySelector('.minutoN')
    const horas = document.querySelector('.horaN')
    const dias = document.querySelector('.diaN')

    const Segundos = tempo % 60;
    const Minutos = parseInt(tempo % (60 * 60) / 60);
    const Horas = parseInt(tempo % (60 * 60 * 24) / (60 * 60) );
    const Dias = parseInt(tempo / (60 * 60 * 24));

    segundos.innerHTML = atualizarDigitos(Segundos)
    minutos.innerHTML = atualizarDigitos2(`${Minutos}:`)
    horas.innerHTML = atualizarDigitos2(`${Horas}:`)
    dias.innerHTML = atualizarDigitos2(`${Dias}:`)
}
function contagem(tempo){
    function contar(){
        temporizador(tempo)
        tempo--
        if(tempo < 0){
        clearInterval(interval)
    }
    }
 
    const interval =  setInterval(contar,1000)
}
function countdown(){
    const count = new Date ('2022-12-31 23:59:59')
    const agora = Date.now()
    return parseInt(( count - agora) / 1000)
}
contagem(countdown())


