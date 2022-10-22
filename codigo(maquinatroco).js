var mensagem = document.getElementById('msg')

function resul() {

    var n = document.getElementById('botao1')
    var p = document.getElementById('botao2')
    var preco = Number(p.value)
    var c = document.getElementById('botao3')
    var carteira = Number(c.value)

    if (p.value.length == 0 || c.value.length == 0 || n.value.length == 0) {
        window.alert('Campo(s) vazio(s)! Tente novamente...')
    }

    else if  (carteira > preco) {
        mensagem.innerHTML = `Compra do produto ${n.value} efetuada! Seu troco é de R$${carteira - preco}`

    } else if (carteira == preco && !preco.length == 0 && !carteira.length == 0) {
        mensagem.innerHTML = `Compra efetuada do ${n.value}! Dinheiro deu certinho rsrs`

    } else if (carteira < preco) {
        mensagem.innerHTML = `Ainda faltam R$${preco - carteira} para comprar o produto ${n.value}`

    }
}

function limpa() {

    document.getElementById('botao1').value=''
    document.getElementById('botao2').value=''
    document.getElementById('botao3').value=''
    mensagem.innerHTML = ''

}
