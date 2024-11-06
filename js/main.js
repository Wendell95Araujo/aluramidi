function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === "audio") {
    elemento.play();
  } else {
    alert("Elemento não encontrado ou seletor inválido");
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// Mapeamento das teclas 1-9 para os sons correspondentes
const teclaSomMap = {
    '1': '#som_tecla_psh',
    '2': '#som_tecla_tic',
    '3': '#som_tecla_tom',
    '4': '#som_tecla_puff',
    '5': '#som_tecla_splash',
    '6': '#som_tecla_toim',
    '7': '#som_tecla_pom',
    '8': '#som_tecla_clap',
    '9': '#som_tecla_tim'
};

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}

// Evento para capturar teclas numéricas (1-9) e tocar o som correspondente
document.addEventListener("keydown", function (evento) {
    const teclaPressionada = evento.key;

    if (teclaSomMap[teclaPressionada]) {
        tocaSom(teclaSomMap[teclaPressionada]);

        const nomeClasse = teclaSomMap[teclaPressionada].replace('#som_', '');
        const teclaElemento = document.querySelector(`.${nomeClasse}`);
        if (teclaElemento) {
            teclaElemento.classList.add("ativa");
        }
    }
});

// Remover a classe ativa quando a tecla é solta
document.addEventListener("keyup", function (evento) {
    const teclaPressionada = evento.key;

    if (teclaSomMap[teclaPressionada]) {
        const nomeClasse = teclaSomMap[teclaPressionada].replace('#som_', '');
        const teclaElemento = document.querySelector(`.${nomeClasse}`);
        if (teclaElemento) {
            teclaElemento.classList.remove("ativa");
        }
    }
});
