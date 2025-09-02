// Preços dos produtos
const precos = {
    produto1: 49.90,
    produto2: 49.90,
    produto3: 99.90,
    produto4: 129.90,
    produto5: 99.90,
    produto6: 44.90,
    produto7: 49.90,
    produto8: 49.90,
    produto9: 49.90,
    produto10: 49.90,
    produto11: 34.90,
    produto12: 34.90
};

// Formatar valor em moeda
function formatarMoeda(valor) {
    return valor.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
}

// Aumentar quantidade
function aumentarQuantidade(id) {
    const input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
    calcularTotal();
}

// Diminuir quantidade
function diminuirQuantidade(id) {
    const input = document.getElementById(id);
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
        calcularTotal();
    }
}


//limpar carrinho//
function limpacarrinho() {
    
    document.getElementById('limparcarrinho').addEventListener('click', function () {        
        
        let p1 = document.getElementById('produto1')
        p1.value = 0
        let p2 = document.getElementById('produto2')
        p2.value = 0
        let p3 = document.getElementById('produto3')
        p3.value = 0
        let p4 = document.getElementById('produto4')
        p4.value = 0
        let p5 = document.getElementById('produto5')
        p5.value = 0
        let p6 = document.getElementById('produto6')
        p6.value = 0
        let p7 = document.getElementById('produto7')
        p7.value = 0
        let p8 = document.getElementById('produto8')
        p8.value = 0
        let p9 = document.getElementById('produto9')
        p9.value = 0
        let p10 = document.getElementById('produto10')
        p10.value = 0
        let p11 = document.getElementById('produto11')
        p11.value = 0
        let p12 = document.getElementById('produto12')
        p12.value = 0
        let total = document.getElementById('total')
        total.value = 0
        
        total.textContent = "Total: R$ 0,00";
    
    
    
    })      
}

// Calcular total
function calcularTotal() {
    let total = 0;
    for (let i = 1; i <= 12; i++) {
        const id = 'produto' + i;
        const quantidade = parseInt(document.getElementById(id).value) || 0;
        total += quantidade * precos[id];
    }
    document.getElementById('total').textContent = 'Total: R$ ' + formatarMoeda(total);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    limpacarrinho()
    // Botões aumentar
    document.querySelectorAll('.btn-aumentar').forEach(btn => {
        btn.addEventListener('click', function () {
            aumentarQuantidade(this.getAttribute('data-produto'));
        });
    });

    // Botões diminuir
    document.querySelectorAll('.btn-diminuir').forEach(btn => {
        btn.addEventListener('click', function () {
            diminuirQuantidade(this.getAttribute('data-produto'));
        });
    });

    // Inputs quantidade
    document.querySelectorAll('.quantidade').forEach(input => {
        input.addEventListener('change', calcularTotal);
    });

    // Comprar e modal
    document.getElementById('btn-comprar').addEventListener('click', function () {
        const nomes = {
            produto1: "Camiseta básica feminina",
            produto2: "Camiseta básica masculina",
            produto3: "Canguru FD - Farol",
            produto4: "Moletom FD - Farol",
            produto5: "Copo térmico",
            produto6: "Garrafa térmica inox preta",
            produto7: "Caneca FD",
            produto8: "Boné FD preto",
            produto9: "Boné FD branco",
            produto10: "Boné FD amarelo",
            produto11: "Agenda preta FD",
            produto12: "Agenda amarela FD"
        };

        let resumo = '';
        let total = 0;
        let algumProdutoSelecionado = false;

        for (let i = 1; i <= 12; i++) {
            const id = 'produto' + i;
            const quantidade = parseInt(document.getElementById(id).value) || 0;

            if (quantidade > 0) {
                const nome = nomes[id];
                const subtotal = quantidade * precos[id];
                total += subtotal;
                algumProdutoSelecionado = true;

                resumo += `${nome}\nQuantidade: ${quantidade} x R$ ${formatarMoeda(precos[id])} = R$ ${formatarMoeda(subtotal)}\n\n`;
            }
        }

        if (!algumProdutoSelecionado) {
            alert('Você ainda não selecionou nenhum produto.');
        } else {
            resumo += `Total: R$ ${formatarMoeda(total)}`;

            // Exibir modal
            const modal = document.getElementById('resumo-modal');
            const texto = document.getElementById('resumo-texto');
            texto.textContent = resumo;
            modal.style.display = 'flex';

            // Fechar modal
            document.getElementById('fechar-modal').addEventListener('click', function() {
                modal.style.display = 'none';
            });
        }
    });
   

    document.getElementById('btn-carrinho').addEventListener('click', function () {
        const nomes = {
            produto1: "Camiseta básica feminina",
            produto2: "Camiseta básica masculina",
            produto3: "Canguru FD - Farol",
            produto4: "Moletom FD - Farol",
            produto5: "Copo térmico",
            produto6: "Garrafa térmica inox preta",
            produto7: "Caneca FD",
            produto8: "Boné FD preto",
            produto9: "Boné FD branco",
            produto10: "Boné FD amarelo",
            produto11: "Agenda preta FD",
            produto12: "Agenda amarela FD"
        };

        let resumo = '';
        let total = 0;
        let algumProdutoSelecionado = false;

        for (let i = 1; i <= 12; i++) {
            const id = 'produto' + i;
            const quantidade = parseInt(document.getElementById(id).value) || 0;

            if (quantidade > 0) {
                const nome = nomes[id];
                const subtotal = quantidade * precos[id];
                total += subtotal;
                algumProdutoSelecionado = true;

                resumo += `${nome}\nQuantidade: ${quantidade} x R$ ${formatarMoeda(precos[id])} = R$ ${formatarMoeda(subtotal)}\n\n`;
            }
        }

        if (!algumProdutoSelecionado) {
            alert('Você ainda não selecionou nenhum produto.');
        } else {
            

            // Exibir modal
            const modal = document.getElementById('resumo-modal');
            const texto = document.getElementById('resumo-texto');
            texto.textContent = resumo;
            modal.style.display = 'flex';

            // Fechar modal
            document.getElementById('fechar-modal').addEventListener('click', function() {
                modal.style.display = 'none';
            });
        }
    });
   
    calcularTotal();
});




