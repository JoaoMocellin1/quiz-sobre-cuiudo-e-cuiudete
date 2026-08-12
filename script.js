const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Cuiudo e Cuiudete encontram um mapa misterioso na floresta azul. Por onde eles devem começar a exploração?",
        alternativas: [
            { texto: "Pela trilha das águas cristalinas.", afirmacao: "Cuiudo e Cuiudete preferiram seguir o fluxo das águas." },
            { texto: "Pela caverna dos ecos distantes.", afirmacao: "Eles decidiram desvendar os segredos da caverna sombria." }
        ]
    },
    {
        enunciado: "Dentro da caverna, eles encontram um baú trancado. Qual a estratégia de Cuiudete?",
        alternativas: [
            { texto: "Tentar abrir com uma chave antiga encontrada no caminho.", afirmacao: "Usaram a lógica e a chave antiga." },
            { texto: "Pedir ajuda aos espíritos da floresta.", afirmacao: "Confiaram na magia e intuição da floresta." }
        ]
    },
    {
        enunciado: "Ao abrir o baú, uma luz azul intensa ilumina o local. Qual a reação de Cuiudo?",
        alternativas: [
            { texto: "Ele protege Cuiudete e observa com cautela.", afirmacao: "Cuiudo se mostrou um protetor destemido." },
            { texto: "Ele corre para tocar na luz mágica.", afirmacao: "Cuiudo foi movido pela curiosidade pura." }
        ]
    }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";
    perguntaAtual.alternativas.forEach(opcao => {
        const botao = document.createElement("button");
        botao.textContent = opcao.texto;
        botao.onclick = () => {
            historiaFinal += opcao.afirmacao + " ";
            atual++;
            if (atual < perguntas.length) mostraPergunta();
            else mostraResultado();
        };
        caixaAlternativas.appendChild(botao);
    });
}

function mostraResultado() {
    caixaPerguntas.textContent = "O Destino Final:";
    caixaAlternativas.innerHTML = "";
    textoResultado.textContent = historiaFinal;
}

mostraPergunta();

