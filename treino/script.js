let itens = [
    {
        nome: "iPhone 12",
        tipo: "smartphone",
        sistemaOperacional: "iOS",
        cor: "Preto",
        ram: "4",
        armazenamento: "128",
        preco: "6999.99"
    },
    {
        nome: "Samsung Galaxy Tab S7",
        tipo: "tablet",
        sistemaOperacional: "Android",
        cor: "Branco",
        ram: "6",
        armazenamento: "256",
        preco: "3499.99"
    },
    {
        nome: "Dell XPS 13",
        tipo: "notebook",
        sistemaOperacional: "Windows",
        cor: "Prata",
        ram: "16",
        armazenamento: "512",
        preco: "5499.99"
    }
];

// Função para renderizar a lista de itens
function renderizarTabela() {
    const listaItens = document.getElementById('listaItens');
    listaItens.innerHTML = '';

    itens.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        itemDiv.innerHTML = `
            <h3>${item.nome}</h3>
            <p><strong>Tipo:</strong> ${item.tipo}</p>
            <p><strong>Sistema Operacional:</strong> ${item.sistemaOperacional}</p>
            <p><strong>Cor:</strong> ${item.cor}</p>
            <p><strong>Memória RAM (GB):</strong> ${item.ram}</p>
            <p><strong>Armazenamento (GB):</strong> ${item.armazenamento}</p>
            <p><strong>Preço:</strong> R$ ${item.preco}</p>
        `;

        listaItens.appendChild(itemDiv);
    });
}

// Renderizar a lista quando a página carregar
document.addEventListener('DOMContentLoaded', renderizarTabela);