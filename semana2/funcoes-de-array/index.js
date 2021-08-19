//EXERCÍCIOS DE LEITURA DE CÓDIGO

//1) A) Serão impressos três arrays exatamente iguais ao original.

//2) a) Será impresso um array que contem apenas os nomes dos objetos do array original

//3) Será impresso um array contendo apenas os objetos que não tem Chijo como apelido. Ou seja, só Amanda e Laís


//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1)


//a)------------------------------------------------------------------------------
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

// const nomesPets = pets.map((item, i, array) => {
//     return item.nome 
// })

// console.log(nomesPets)


//b)------------------------------------------------------------------------------------------

// const validaSalsichas = pets.filter((item, i, array) => {
//     return item.raca === "Salsicha"
// })

// console.log(validaSalsichas)


//c)-------------------------------------------------------------------------------------------

// const validaPoodle = pets.filter((item, i, array) => {
//     return item.raca === "Poodle"
// })

// const formaMensagem = validaPoodle.map((item, i, array) =>{
//     const mensagem = `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
//     return mensagem
// })

// console.log(formaMensagem)



//2)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a)-------------------------------------------------------------------

// const formaArrayNomes = produtos.map((item, i, array) =>{
//     return item.nome
// })

// console.log(formaArrayNomes)


//b)------------------------------------------------------------------

// const formaArrayNomePreco = produtos.map((item, i, array) =>{
//     const precoItem = item.preco - (item.preco * 0.05)
//     const novaArray = {nome: item.nome, preco: precoItem.toFixed(2)}
//     return novaArray

// })

// console.log(formaArrayNomePreco)

//c)------------------------------------------------------------------

// const formaArrayBebidas = produtos.filter((item) => {
//     const arrayBebidas = item.categoria === "Bebidas"
//     return arrayBebidas
// })

// console.log(formaArrayBebidas)

//d)---------------------------------------------------------------

// const formaNovoArray = produtos.filter((item, i, array)=>{
//    return item.nome.includes("Ypê") 
// })

// console.log(formaNovoArray)

//e)---------------------------------------------------------------


// const formaNovoArray = produtos.filter((item, i, array) =>{
//     let novoArray = item.nome.includes("Ypê")
//     return novoArray  
    
// }).map((item)=>{
//     return `Compre ${item.nome} por ${item.preco}`

// })

// console.log(formaNovoArray)

