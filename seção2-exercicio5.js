function enviarBusca(texto) {
    console.log("Buscando por:", texto);
}

const buscaDebounce = debounce(enviarBusca, 1000);

buscaDebounce("c");
buscaDebounce("ca");
buscaDebounce("car");
buscaDebounce("carr");
buscaDebounce("carro");
