const listaProdutos = () => {
    return fetch(`http://localhost:3000/produtos`)
    .then (resposta => {
        return resposta.json()
    })
};

const criaProduto = (imagem, nome, preco, descricao) => {
    return fetch(`http://localhost:3000/produtos`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            imagem: imagem,
            nome: nome,
            preco: preco,
            descricao: descricao
        })
    })
    .then(resposta => {
        return resposta.body
    });
}

const removeProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
    })
}

export const produtosService = {
    listaProdutos,
    criaProduto,
    removeProduto
}