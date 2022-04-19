function AtivarLasers(){
    let ternario = prompt('0 ou 1 : ');
    if(ternario === 0){
        alert("Não");
    } else if (ternario === 1){
        alert("Sim");
    } else{
        alert("Inválido!");
    }
}

export default AtivarLasers;