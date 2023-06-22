const alunos = [
    {
        name: "Fabio",
        notaP1: 6,
        notaP2: 6,
        notaSimulado: 6,
        notaTcOnline: 6,
        notaParticipacaoSala: 6,
    },
    {
        name: "Bruna",
        notaP1: 8,
        notaP2: 5,
        notaSimulado: 8,
        notaTcOnline: 7,
        notaParticipacaoSala: 7,
    },
    {
        name: "Matheus",
        notaP1: 5,
        notaP2: 6,
        notaSimulado: 8,
        notaTcOnline: 10,
        notaParticipacaoSala: 7,
    },
]

let mediaBimestral = []

for(let aluno of alunos){
    
    mediaBimestral = (((aluno.notaTcOnline+aluno.notaParticipacaoSala)/2)+((aluno.notaP1+aluno.notaP2+aluno.notaSimulado)/3))/2
    mediaBimestral = mediaBimestral.toFixed(1)
    if(mediaBimestral >= 7){
    alert("Olá " + aluno.name + " sua média é " + mediaBimestral + " Parabéns você foi aprovado")
} else {
    alert("Olá " + aluno.name + " sua média é " + mediaBimestral + " Você precisa estudar mais")
}
}



