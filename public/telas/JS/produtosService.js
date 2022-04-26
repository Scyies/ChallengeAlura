const listaProdutos = async () => {
    const resposta = await fetch(`http://localhost:3000/produtos`);
    return await resposta.json();
};

const criaProduto = async (imagem, nome, preco, descricao, row) => {
    const resposta = await fetch(`http://localhost:3000/produtos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imagem: imagem,
            nome: nome,
            preco: preco,
            descricao: descricao,
            row: row
        })
    });
    return resposta.body;
}

const removeProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
    })
}


//funções para atualizar o produto editado
export const detalhaProduto = async (id) => {
    const resposta = await fetch(`http://localhost:3000/produtos/${id}`);
    return await resposta.json();
}

const atualizaProduto = async (id, nome, preco, imagem, descricao, row) => {
    const resposta = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem,
            descricao: descricao,
            row: row
        })
    });
    return await resposta.json();
}

export const produtosService = {
    listaProdutos,
    criaProduto,
    removeProduto,
    detalhaProduto,
    atualizaProduto
}
