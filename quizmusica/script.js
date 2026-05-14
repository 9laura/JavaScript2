let perguntas = [
  {
    pergunta: "A música Stateside é uma colaboração entre quais artistas?",
    fundo: "img/fundo-pink-zara.jpg",
    decoracoes: ["img/zara.png", "img/pink.png"],
    animacao: "tema-pop",
    cor: "#ff4f9a",
    respostas: [
      "PinkPantheress feat. Zara Larsson",
      "Zara Larsson feat. PinkPantheress",
      "PinkPantheress feat. Charli XCX",
      "Zara Larsson feat. Dua Lipa"
    ],
    correta: 0
  },
  {
    pergunta: "Qual banda britânica é conhecida por músicas como Creep, Karma Police e No Surprises?",
    fundo: "img/fundo-radiohead.jpg",
    animacao: "tema-rock",
    cor: "#4d6bff",
    respostas: ["Coldplay", "Oasis", "Radiohead", "Blur"],
    correta: 2
  },
  {
    pergunta: "Quais letras de músicas foram indicações ao Prêmio Nobel de Literatura?",
    fundo: "img/fundo-bts.jpg",
    animacao: "tema-flores",
    efeitoAcerto: "flores",
    cor: "#8b5cf6",
    respostas: [
      "Dynamite e Butter",
      "Wild Flower e Spring Day",
      "Fake Love e DNA",
      "Boy With Luv e Permission to Dance"
    ],
    correta: 1
  },
  {
    pergunta: "Qual cantor teve sua obra redescoberta por uma nova geração após músicas como Lover, You Should've Come Over viralizarem no TikTok?",
    fundo: "img/jeff.jpg",
    animacao: "tema-vinil",
    cor: "#b7791f",
    respostas: ["David Bowie", "Jeff Buckley", "Elton John", "George Michael"],
    correta: 1
  },
  {
    pergunta: "Purple Rain é uma das músicas mais marcantes de qual artista?",
    fundo: "img/purplerain.jpg",
    animacao: "tema-chuva",
    cor: "#7c3aed",
    respostas: ["Michael Jackson", "Stevie Wonder", "Prince", "Lenny Kravitz"],
    correta: 2
  },
  {
    pergunta: "Qual cantora lançou o álbum Eternal Sunshine em 2024?",
    fundo: "img/eternal.jpg",
    animacao: "tema-brilho",
    cor: "#ec4899",
    respostas: ["Dua Lipa", "Taylor Swift", "Ariana Grande", "Billie Eilish"],
    correta: 2
  },
  {
    pergunta: "Quais artistas vão se apresentar no show de intervalo da grande final da Copa do Mundo de 2026?",
    fundo: "img/copadomundo.jpg",
    animacao: "tema-estadio",
    cor: "#22c55e",
    respostas: [
      "Taylor Swift, The Weeknd e Dua Lipa",
      "Ariana Grande, Coldplay e Rihanna",
      "Madonna, BTS e Shakira",
      "Lady Gaga, Bruno Mars e Beyoncé"
    ],
    correta: 2
  },
  {
    pergunta: "Qual cantora lançou o álbum Lemonade, misturando pop, R&B, soul e fortes elementos visuais?",
    fundo: "img/lemonade.jpg",
    animacao: "tema-dourado",
    cor: "#f59e0b",
    respostas: ["Rihanna", "Beyoncé", "Nicki Minaj", "Alicia Keys"],
    correta: 1
  },
  {
    pergunta: "Qual artista lançou o álbum Man's Best Friend, marcado por uma fase mais pop em sua carreira?",
    fundo: "img/fundo-sabrina.jpg",
    animacao: "tema-azul",
    cor: "#38bdf8",
    respostas: [
      "Olivia Rodrigo",
      "Lana Del Rey",
      "Sabrina Carpenter",
      "Taylor Swift"
    ],
    correta: 2
  },
  {
  pergunta: "Qual foi o 1º álbum da história a passar 7 semanas consecutivas no topo da Billboard 200?",
  fundo: "img/arirang.jpg",
  animacao: "tema-neon",
  cor: "#9b87f5",
  respostas: [
    "Arirang",
    "SOS",
    "THE TORTURED POETS DEPARTMENT",
    "SOUR"
  ],
  correta: 0
}
];

let perguntaAtual = 0;
let pontuacao = 0;
let respondeu = false;

function mostrarPergunta() {
  respondeu = false;

  let pergunta = perguntas[perguntaAtual];

  document.body.className = pergunta.animacao;
  document.body.style.backgroundImage = `url('${pergunta.fundo}')`;
  document.documentElement.style.setProperty("--cor-botao", pergunta.cor);

  document.getElementById("contador").innerText =
    `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

  document.getElementById("pergunta").innerText = pergunta.pergunta;
  document.getElementById("resultado").innerText = "";

  let respostasDiv = document.getElementById("respostas");
  respostasDiv.innerHTML = "";

  pergunta.respostas.forEach(function(resposta, index) {
    respostasDiv.innerHTML += `
      <button onclick="verificarResposta(${index})">
        ${resposta}
      </button>
    `;
  });

  mostrarDecoracoes(pergunta);
}

function mostrarDecoracoes(pergunta) {
  let decoracao = document.getElementById("decoracao");

  if (!decoracao) {
    decoracao = document.createElement("div");
    decoracao.id = "decoracao";
    document.body.appendChild(decoracao);
  }

  decoracao.innerHTML = "";

  if (!pergunta.decoracoes) {
    return;
  }

  pergunta.decoracoes.forEach(function(img, index) {
    decoracao.innerHTML += `
      <img src="${img}" class="decor decor-${index + 1}" alt="">
    `;
  });
}

function verificarResposta(index) {
  if (respondeu) {
    return;
  }

  respondeu = true;

  let pergunta = perguntas[perguntaAtual];
  let resultado = document.getElementById("resultado");

  if (index === pergunta.correta) {
    resultado.innerText = "Resposta correta!";
    pontuacao++;

    if (pergunta.efeitoAcerto === "flores") {
      criarFloresCaindo();
    }
  } else {
    resultado.innerText = "Resposta incorreta!";
  }
}

function criarFloresCaindo() {
  for (let i = 0; i < 25; i++) {
    let flor = document.createElement("img");
    flor.src = "img/flor.png";
    flor.classList.add("flor-caindo");

    flor.style.left = Math.random() * 100 + "vw";
    flor.style.animationDuration = 3 + Math.random() * 3 + "s";

    document.body.appendChild(flor);

    setTimeout(function() {
      flor.remove();
    }, 6000);
  }
}

function proximaPergunta() {
  perguntaAtual++;

  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultadoFinal();
  }
}

function mostrarResultadoFinal() {
  document.body.className = "tema-final";
  document.body.style.backgroundImage = "url('img/fundo-final.jpg')";

  document.getElementById("container").innerHTML = `
    <h2 class="final">Quiz finalizado!</h2>
    <p class="pontuacao">Sua pontuação foi: ${pontuacao} de ${perguntas.length}</p>
    <button onclick="location.reload()">Reiniciar quiz</button>
  `;
}

mostrarPergunta();