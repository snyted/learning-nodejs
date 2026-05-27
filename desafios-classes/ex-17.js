class QueryBuilder {
    select(campos) {
        this.campos = campos;
        return this;
    }

    where(condicao) {
        this.condicao = condicao;
        return this;
    }

    limit(quantidade) {
        this.quantidade = quantidade;
        return this;
    }

}

const QUERY = new QueryBuilder().select('*').where('id=1').limit('10')

console.log(QUERY);