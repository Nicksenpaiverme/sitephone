document.addEventListener("DOMContentLoaded", function () {
    const listaCarrinho = document.getElementById("listaCarrinho");
    const totalElement = document.getElementById("total");

    // Supondo que você tenha informações do carrinho em algum formato, por exemplo, um array de objetos.
    const carrinhoItens = [
        { nome: "Modelo 1", quantidade: 2, preco: 999.99 },
        { nome: "Modelo 2", quantidade: 1, preco: 799.99 },
        // Adicione mais itens conforme necessário
    ];

    // Função para renderizar os itens do carrinho na página
    function renderizarCarrinho() {
        listaCarrinho.innerHTML = "";

        let total = 0;

        carrinhoItens.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `${item.nome} - Quantidade: ${item.quantidade} - R$${item.preco.toFixed(2)}`;
            listaCarrinho.appendChild(li);

            total += item.quantidade * item.preco;
        });

        totalElement.textContent = `Total: R$${total.toFixed(2)}`;
    }

    renderizarCarrinho();

    // Evento para finalizar a compra (simulação)
    const btnFinalizarCompra = document.getElementById("btnFinalizarCompra");
    btnFinalizarCompra.addEventListener("click", function () {
        alert("Compra finalizada! (Esta é uma simulação. Não há processamento real neste exemplo.)");
    });
});
