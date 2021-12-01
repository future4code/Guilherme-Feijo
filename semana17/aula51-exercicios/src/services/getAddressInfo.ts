// Crie uma pasta services, com uma função getAddressInfo que cumpra os seguintes requisitos:
// Receber como entrada um CEP (apenas dígitos numéricos)
// Fazer uma requisição para https://viacep.com.br/ws/:cep/json/
// Retornar o logradouro correspondente, juntamente com bairro, cidade e estado

import axios from 'axios'

type Adress = {
    logradouro: string,
    bairro: string,
    cidade: string,
    estado: string
}

export const getAddressInfo = async (cep: string): Promise<Adress> => {

    // validacao para saber se o cep só tem números
    // string é iterável, pq se comporta como array
    // "05424150"

    // utilizar lib para checar validação de cep

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    return {
        logradouro: response.data.logradouro,
        bairro: response.data.bairro,
        cidade: response.data.localidade,
        estado: response.data.uf
    }
}