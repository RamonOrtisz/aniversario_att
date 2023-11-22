AOS.init();

const dataDoAniver = new Date("Mar 23, 2024 20:00:00");
const timeStampDoAniver = dataDoAniver.getTime();

const  contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distaciaAteOEvento = timeStampDoAniver - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distaciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distaciaAteOEvento % diaEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distaciaAteOEvento % horasEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distaciaAteOEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distaciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Ops, Já passou!'
    }
},1000)