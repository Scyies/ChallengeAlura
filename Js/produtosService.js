const listaProdutos = () => {
    return fetch(`http://localhost:3000/produtos`)
    .then (resposta => {
        return resposta.json()
    })
};

const criaProduto = (imagem, nome, preco, descricao, row) => {
    return fetch(`http://localhost:3000/produtos`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            imagem: imagem,
            nome: nome,
            preco: preco,
            descricao: descricao,
            row: row
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


//funções para atualizar o produto editado
export const detalhaProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`)
    .then(resposta => {
        return resposta.json();
    })
}

const atualizaProduto = (id, nome, preco, imagem, descricao, row) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem,
            descricao: descricao,
            row: row
        })
    })
    .then (resposta => {
        return resposta.json()
    })
}

export const produtosService = {
    listaProdutos,
    criaProduto,
    removeProduto,
    detalhaProduto,
    atualizaProduto
}