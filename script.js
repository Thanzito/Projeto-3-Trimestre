const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é um residente dentro de uma nave espacial, todos estão desaparecidos, e uma criatura estranha está circulando pelas seções da nave, seu objetivo é enfrentar a criatura de forma inteligente a fim de buscar uma saída e retornar para casa. Em sua frente há 2 equipamentos, uma lanterna e um radar, qual você escolhe pegar?",
        alternativas: [
            {
                texto: "Pegar a lanterna",
                afirmacao: "Você optou pela visibilidade de ver com a lanterna. "
            },
            {
                texto: "Pegar o Radar",
                afirmacao: "Você optou pela segurança em meio a um ambiente hostil. "
            }
        ]
    },
    {
        enunciado: "Andando pelos corredores você escuta um forte barulho de garras arranhando as paredes, oque você irá fazer?",
        alternativas: [
            {
                texto: "Correr daquele local",
                afirmacao: "E depois se desesperou e não hesitou em sair daquele local o mais rápido possível. "
            },
            {
                texto: "Seguir com cautela",
                afirmacao: " E depois manteve a calma e continuou o seu trajeto. "
            }
        ]
    },
    {
        enunciado: "Chegando no setor que escutou os barulhos você se depara com seus colegas de nave estirados ao chão já sem sinais vitais, o que você fará?",
        alternativas: [
            {
                texto: "Averiguar a área.",
                afirmacao: "Ao chegar no setor onde todos estavam mortos, você decidiu averiguar toda a sala, e não encontrou nada que fosse útil. "
            },
            {
                texto: "Revistar os corpos",
                afirmacao: "Ao chegar no setor onde todos estavam mortos, você decidiu revistar os corpos no chão, e só encontrou alguns trocados. "
            }
        ]
    },
    {
        enunciado: "Depois disso, você escuta mais barulhos de garras nas paredes, mas dessa vez acima de você , aparentemente dentro das tubulações o que você fará?",
        alternativas: [
            {
                texto: "Recuar para trás",
                afirmacao: "O teto começa a rachar, e uma criatura cai sobre o chão e como você recuou para trás a criatura não te percebeu. "
            },
            {
                texto: " Observar atentamente",
                afirmacao: "O teto começa a rachar, e uma criatura cai sobre o chão , e para sua sorte, o barulho do impacto a fez não perceber sua presença. "
            }
        ]
    },
    {
        enunciado: "De repente, uma criatura cai sobre o chão da sala, sorte a sua que ela não te percebeu, mas agora você precisa agir rápido antes que algo ruim aconteça, o que você fará?",
        alternativas: [
            {
                texto: "Esconder-se",
                afirmacao: "Você preferiu não chamar atenção e se escondeu atrás do balcão onde estava, a criatura acaba não te encontrando e pouco tempo depois ela sai da sala onde vocês estavam. "
            },
            {
                texto: "Confrontar",
                afirmacao: "Sem pensar duas vezes, você pega uma de suas ferramentas e corre para cima da criatura, conseguindo acertar um golpe bem em sua cabeça, ela então foge de volta para dentro das tubulações, agora parecendo muito mais furiosa do que antes. "
            }
        ]
    },
    {
        enunciado: "Você definitivamente não está bem, seu coração está batendo rápido, e seu corpo está tremendo, você está tendo um ataque de pânico depois de tanto estresse, agora você precisa se acalmar antes que tudo piore, o que você fará?",
        alternativas: [
            {
                texto: "Sentar e relaxar",
                afirmacao: "Você não estava aguentando andar, por isso você encosta na parede e lentamente vai se deitando, parando um pouco para respirar, tudo vai melhorando, depois de calmo, você se levanta e continua seu caminho. "
            },
            {
                texto: "Tomar água",
                afirmacao: "Você está passando mal, com a garganta seca, você então decide tomar um pouco de água para te aliviar daquela situação, foi a melhor água que você já tomou na vida, aliviado, você se prepara e continua seu caminho. "
            }
        ]
    },
    {
        enunciado: "Seguindo em frente, finalmente uma luz de esperança, as cápsulas de fuga já podem ser avistadas, você só precisa dar um jeito de chegar até elas, na sua frente há um elevador e um segmento de escadas, o elevador parece mais rápido, porém o que garante que ele ainda está funcionando? As escadas são longas e demoradas, porém são muito mais seguras do que o elevador, o quê você fará?",
        alternativas: [
            {
                texto: "Pegar o elevador",
                afirmacao: "Agora não temos tempo a perder, você decide pegar o elevador em direção as cápsulas, você entra e aperta o botão, ele vai descendo normalmente, mas de repente, o elevador estrala, e começa a descer rapidamente, desesperado, você se agarra às barras do elevador, e ele enfim acerta o chão, a queda foi brusca, e você foi jogado ao chão, levantando-se a porta se abre, tudo foi assustador mais você chegou no andar certo. "
            },
            {
                texto: "Descer as escadas",
                afirmacao: "Você está com pressa, mas não ao ponto de se arriscar, por isso você decide descer pelas escadas, o caminho é muito longo, sendo preciso fazer várias pausas para descansar, quando finalmente termina você nem consegue acreditar que desceu tanto, mas pelo menos, você chegou ao andar certo. "
            }
        ]
    },
    {
        enunciado: "enfim chegamos ao andar certo, no caminho até às cápsulas de fuga, você encontra mais um problema, uma parede de fogo está bloqueando a passagem, chegamos muito longe para desistir, com ânimo você percebe que existe um extintor, mas que também será possível ligar o sistema de sprinklers para apagar o fogo, o que você fará?",
        alternativas: [
            {
                texto: "Usar o extintor",
                afirmacao: "Você não queria correr o risco de queimar no fogo, então você decide pegar o extintor de incêndio para dar conta do recado, sendo sua primeira vez utilizando um desses, você lança os jatos de forma desajeitada, a cena se mostra ridícula, mas pelo menos o fogo foi apagado. "
            },
            {
                texto: "Ligar os sprinklers",
                afirmacao: "Você não queria correr o risco de queimar no fogo, e como nunca tinha utilizado um extintor antes, você decidiu ligar os sprinklers, o sistema estava todo quebrado, então foi necessário um pouco de tempo para arrumar tudo, e quando finalmente termina, você se sente até mesmo orgulhoso de si, o fogo foi apagado e você está todo(a) molhado(a). "
            }
        ]
    },
    {
        enunciado: "Finalmente você chega às cápsulas de fuga, inserindo seu ID o sistema te prepara uma nave para escapar, o que vai demorar um pouco. Você finalmente encontra paz, mas não por muito tempo, barulhos começam a ecoar pelo teto, um buraco se abre e a criatura sai de dentro dele, e o pior, ela te percebeu e parece furiosa, as cápsulas ainda não estão prontas e você não tem para onde correr, será preciso bater de frente contra a criatura. Dentro da sala você percebe que tem uma escopeta segurada por um cadáver, por outro lado, a criatura está do lado de fios desencapados e você vê um galão de gasolina, é hora de agir e não tem tempo para pegar as duas coisas, o que você fará?",
        alternativas: [
            {
                texto: "Pegar a escopeta",
                afirmacao: "A nave de fuga não está pronta e a criatura está se aproximando, rapidamente você pega a escopeta, a criatura avança e você dispara contra ela, foi um tiro bem dado, porém não foi suficiente para acabar com ela, a nave está quase pronta e a criatura tenta investir novamente, você dá outro tiro e ela cai ainda viva, não tem jeito, você descarrega o pente inteiro sobre a criatura…de repente, tudo está em silêncio, a criatura está morta, sua nave chegou e você entra nela desacreditado sobre tudo que aconteceu. "
            },
            {
                texto: "Causar um incêndio",
                afirmacao: "A nave de fuga não está pronta e a criatura está se aproximando, rapidamente você pega o galão de gasolina, abre o tampão e joga sobre os fios, a criatura tenta agir, mas no momento em que ela tenta fazer algo o galão encosta nos fios e explode em labaredas de fogo, um grito ardido ecoa pela nave, a criatura está em chamas se debatendo pelas paredes, sua nave chegou e você entra nela sem olhar para trás, deixando a criatura para morrer consumida pelas chamas. "
            }
        ]
    },
    {
        enunciado: "Será que tudo finalmente acabou? Você está dentro da nave a caminho de casa, é difícil de acreditar em tudo que aconteceu, mas por agora tudo foi resolvido, aquela nave podia ser pequena, mas era o lugar mais confortável naquele tempo, você decide que era hora de relaxar e agradecer por tudo ter dado certo, procurando pelos suprimentos da nave você encontra algumas besteiras para comer, uns doces e salgadinhos, depois de tanto sofrimento você merece uma recompensa, o que você fará?",
        alternativas: [
            {
                texto: "Pegar os doces",
                afirmacao: "Agora você finalmente está dentro da nave a caminho de casa, parando para descansar, você decide pegar os doces para aproveitar a viagem, era uma verdadeira bomba de açúcar, estavam deliciosos e você finalmente encontrou um pouco de paz, você se acomoda e pacientemente espera chegar em casa… FIM"
            },
            {
                texto: "Pegar os salgadinhos",
                afirmacao: "Agora você finalmente está dentro da nave a caminho de casa, parando para descansar, você decide pegar os salgadinhos para aproveitar a viagem, você queria salgar a boca depois de tanto tempo sem comer, estavam deliciosos e você finalmente encontrou um pouco de paz, você se acomoda e pacientemente espera chegar em casa… FIM"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em retrospectiva...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();