// ========================================
// CARROSSEL COM BOTÕES - ANÚNCIO DE PRODUTO
// ========================================

const carrosselProduto = {
    imagens: document.querySelectorAll("#carrossel-produto .img"),
    indice: 0,
    intervaloId: null,
    
    init() {
        this.mostrar();
    },

    mostrar() {
        this.imagens.forEach(img => img.classList.remove("ativa"));
        this.imagens[this.indice].classList.add("ativa");
    },

    proximo() {
        this.indice++;
        if (this.indice >= this.imagens.length) {
            this.indice = 0;
        }
        this.mostrar();
    },

    voltar() {
        this.indice--;
        if (this.indice < 0) {
            this.indice = this.imagens.length - 1;
        }
        this.mostrar();
    }
};


const carrosselFilmes = {
    imagens: document.querySelectorAll("#carrossel-filmes .img"),
    indice: 0,
    intervaloId: null,
    intervalo: 3000, // 3 segundos

    init() {
        this.mostrar();
        this.iniciarAutoPlay();
    },

    mostrar() {
        this.imagens.forEach(img => img.classList.remove("ativa"));
        this.imagens[this.indice].classList.add("ativa");
    },

    proximo() {
        this.indice++;
        if (this.indice >= this.imagens.length) {
            this.indice = 0;
        }
        this.mostrar();
    },

    iniciarAutoPlay() {
        this.intervaloId = setInterval(() => {
            this.proximo();
        }, this.intervalo);
    },

    pausarAutoPlay() {
        clearInterval(this.intervaloId);
    }
};


document.addEventListener("DOMContentLoaded", function() {
    carrosselProduto.init();
    carrosselFilmes.init();
    
    document.getElementById("carrossel-filmes").addEventListener("mouseenter", () => {
        carrosselFilmes.pausarAutoPlay();
    });
    document.getElementById("carrossel-filmes").addEventListener("mouseleave", () => {
        carrosselFilmes.iniciarAutoPlay();
    });
});

const produtos = [
    { nome: "Produto Premium", preco: "R$ 199,90" },
    { nome: "Camiseta Especial", preco: "R$ 89,90" },
    { nome: "Mochila Deluxe", preco: "R$ 259,90" }
];

function atualizarInfoProduto(indice) {
    if (produtos[indice]) {
        document.getElementById("produto-nome").textContent = produtos[indice].nome;
        document.getElementById("produto-preco").textContent = produtos[indice].preco;
    }
}

const originalProximo = carrosselProduto.proximo;
const originalVoltar = carrosselProduto.voltar;

carrosselProduto.proximo = function() {
    originalProximo.call(this);
    atualizarInfoProduto(this.indice);
};

carrosselProduto.voltar = function() {
    originalVoltar.call(this);
    atualizarInfoProduto(this.indice);
};

atualizarInfoProduto(0);