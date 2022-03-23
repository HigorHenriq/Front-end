// MENU PARA MOBILE
const burgerIcon = document.querySelector("#burger")
const navbarMenu = document.querySelector("#nav-links")

// PARA ABRIR A NAVEGAÇÃO QUANDO ESTIVER EM LAYOYT MOBILE
burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle('is-active')
})

// TABS DE DETALHES E DIREITOS
const tabs = document.querySelectorAll(".tabs li")
const tabConteudos = document.querySelectorAll("#tab-conteudo > div")

// PERCORRE TODOS AS TABS PARA SER MAIS PRATICO E ADICIONAR EVENTOS NELAS
tabs.forEach((tab) => {
    // TAB SERÁ O ITEM SOLO, ADICIONANDO O EVENTO A AMBOS POR CAUSA DO LOOP
    tab.addEventListener('click', () => {

        tabs.forEach((item) => {
            // AQUI REMOVEMOS TODOS OS TABS QUE ESTEJAM ATIVOS, CASO ALGUM ESTEJA NO HTTML
            item.classList.remove('is-active')
        })

        // APÓS REMOVER CASO ALGUM ITEM ESTEJA ATIVO, ENTRA NA SEGUNDA CHAMADA DE NO ITEM QUE FOI CLICADO DEIXAR ATIVO
        tab.classList.add("is-active")

        // PARA O OBTER O DATA-TARGET LÁ DO HTML (LEMBRANDO QUE O TAB É AS .tabs li)
        const abaClicada = tab.dataset.target

        console.log("LOCAL DO DATA-TARGET - > " + abaClicada)

        // percorre a div de #tab-conteudo
        tabConteudos.forEach((conteudo) => {
            // Quando clicar em alguma aba retorna o id dela e compara com o nosso target
            if (conteudo.id == abaClicada) {
                console.log("ID DO CONTEUDO CLICADO - > " + conteudo.id)
                conteudo.classList.remove("is-hidden")

            } else {
                conteudo.classList.add("is-hidden")
            }
        })
    })
})

// MODAL
const btnConta = document.querySelector("#conta")
const modal = document.querySelector(".modal")
const fecharModal = document.querySelector(".modal-close")
const backgroundModal = document.querySelector(".modal-background")

function closeModal() {
    modal.classList.remove("is-active")
}

// ABRIR MODAL
btnConta.addEventListener('click', () => {
    modal.classList.add("is-active")
})

//FECHAR MODAL NO X
fecharModal.addEventListener('click', closeModal)

//FECHAR MODAL CLICANDO NO BACKGROUND
backgroundModal.addEventListener('click', closeModal)


// COUNT
const precoTela = document.querySelector("#preco")
const valorProd = document.querySelector("#preco").textContent.slice(2, 9)
const valorFiltrado = valorProd.replace(",", ".")

function precoTotal(e) {
    let valorInput = e


    let valorFinal = Number(valorFiltrado) * valorInput

    // console.log("Input: " + e)
    // console.log("Valor S/ Filtro: " + valorProd)
    // console.log("Valor C/ Filtro: " + valorFiltrado)
    // console.log("Valor Final: " + valorFinal)

    if (valorInput > 0) {

        return precoTela.innerHTML = `R$${valorFinal}`
    }
    else {
        return valorProd
    }
}