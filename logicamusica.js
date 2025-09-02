// Função para mostrar letra ou cifra (imagem)
function mostrar(opcao) {
  let conteudo = document.getElementById("conteudo");

  let textos = {
    // Letras (texto)
    farolLetra: `Farol (Letra)
Compositor: Fabrício Dias

Eu acho que entendi quando eu vi você
Talvez você não tenha parado pra entender
Hoje a tempestade, o dia está ruim
Acho que eu precisava de você aqui

Eu olho nos teus olhos, voo tão distante
Enquanto eu te mostrava o quanto é importante
Espero que meus braços possam te aquecer
Se minhas palavras forem tão difíceis de entender

Refrão
Fui teu farol por um dia
Fui teu amigo que não te conhecia
Então guarda bem o que te falei, que um dia...
Eu vi tudo que você tinha e vi o que podia
Então guarda bem o que te falei, que um dia
Vai falar pra alguém`,

    ElaGostaletra: `Ela Gosta (Letra)
Compositor: Fabrício Dias

Ontem eu sonhei contigo
Foi tão bom eu ter te visto
Mas eu tenho medo de não agradar
Eu te vejo tão bonita
Eu queria isso pra minha vida
Uma vez viver um amor de verdade

Pré-Refrão
Porque eu venho de ilusões perdidas
De um peito quase apagado
Mas quando eu vi você, nasceu de novo aqui

Refrão
Ela gosta quando falo
Que é só dela o nosso quarto
Ela gosta quando eu deixo
O cabelo dela bagunçado
E ela gosta quando eu deixo
Ela me acordar com um beijo
Ela gosta quando lembra do nosso jeito`,

    Bandidaletra: `Bandida (Letra)
Compositor: Fabrício Dias

Cheia de marra, menina do cheiro bom
Marca a presa com seu batom
A melhor do baile não tem pra ninguém
O que elas querem, só ela que tem
E nem adianta ligar de manhã
O que passou, passou
E ela não tem fã

Refrão (2x)
Bandida ela é conhecida
Com ela nenhum homem brinca
Malvada, ela é especialista
Tem nipe de modelo, pinta de artista`,

    TudoNossoNadaDelesletra: `Tudo Nosso Nada Deles (Letra)
Compositor: Fabrício Dias

O nosso amor era tão lindo
Que eu cheguei a imaginar
Que a gente ia casar
Eu só pensava em serenata
Eu pensei que me amava

Pré-Refrão
A sua máscara caiu, caiu
Você não viu, não viu
E hoje chora o meu amor
Eu me reúno com os amigos
Numa balada escondido
Você que terminou comigo
Agora aceita o meu castigo

Refrão (2x)
Então deixa, deixa eu festejar
Deixa o pau torar
Então deixa que eu festeje
Que é tudo nosso e nada deles`,

    TanaCaraletra: `Ta na Cara (Letra)
Compositor: Fabrício Dias

Procurei tantas formas de te falar
Procurei tantos jeitos de te encontrar
Mas faltava coragem pra dizer
Que eu não consigo esconder

Pré-Refrão
Toda vez que eu olho pra você
Me perdoe o meu jeito de ser
É que eu não consigo mais viver

Refrão (2x)
Tá na cara que eu amo você
Tá na cara que eu só sei te querer
Eu joguei e me perdi na solidão
E você também não pode mentir
Seu olhar entrega tudo pra mim
Pra que esconder essa paixão`,

    // Cifras (imagem)
    farolCifra: `<img src="Farol imagem.png" alt="Farol - Cifra" class="cifra-img">`,
    ElaGostacifra: `<img src="Ela gosta imagem.png" alt="Ela Gosta - Cifra" class="cifra-img">`,
    Bandidacifra: `<img src="Bandida imagem.png" alt="Bandida - Cifra" class="cifra-img">`,
    TudoNossoNadaDelescifra: `<img src="TNND imagem.png" alt="Tudo Nosso Nada Deles - Cifra" class="cifra-img">`,
    TanaCaracifra: `<img src="Ta Na Cara imagem.png" alt="Tá na Cara - Cifra" class="cifra-img">`
  };

  // Aqui usamos innerHTML para permitir que as imagens sejam exibidas
  conteudo.innerHTML = textos[opcao];
}

// ---------------------- Áudio ----------------------

function setupAudio(audioId, playId, pauseId) {
  const audio = document.getElementById(audioId);
  const playBtn = document.getElementById(playId);
  const pauseBtn = document.getElementById(pauseId);

  playBtn.addEventListener('click', () => audio.play());
  pauseBtn.addEventListener('click', () => audio.pause());
}

// Configura todos os áudios
setupAudio('audio', 'play', 'pause');
setupAudio('audio1', 'play1', 'pause1');
setupAudio('audio2', 'play2', 'pause2');
setupAudio('audio3', 'play3', 'pause3');
setupAudio('audio4', 'play4', 'pause4');
