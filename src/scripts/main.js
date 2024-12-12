AOS.init();

const dataDoEvento = new Date('Dec 17, 2024 19:00:00');
const timeStampDoEvento = dataDoEvento.getTime();  

console.log(timeStampDoEvento);

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();


    const tempoAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasAteOEvento = Math.floor(tempoAteOEvento / (1000 * 60 * 60 * 24)); 
    const horasAteOEvento = Math.floor((tempoAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosAteOEvento = Math.floor((tempoAteOEvento % (1000 * 60 * 60)) / (1000 * 60));
    const segundosAteOEvento = Math.floor((tempoAteOEvento % (1000*60)) / 1000);

    document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m e ${segundosAteOEvento}s`;

    if (tempoAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "Evento expirado"
    }
}, 1000);