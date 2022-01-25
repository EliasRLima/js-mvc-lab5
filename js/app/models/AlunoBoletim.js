class AlunoBoletim{
    
    constructor(nome,notas, frequencia) {
        this._nome = nome
        this._notas = notas
        this._frequencia = frequencia
        
        let aprovacao = this._notas.getAprovacao()
        console.log('Aprovado por nota?')
        console.log(aprovacao)
        let aprovacaoFrequencia = this._frequencia.getAprovacao()
        console.log('Aprovado por frequencia?')
        console.log(aprovacaoFrequencia)

        if(aprovacao && aprovacaoFrequencia){
            this._situacao = 'Aprovado'
        }else{
            this._situacao = 'Reprovado'
        }
    }

    getNome(){
        return this._nome
    }

    getSituacao() {
       return this._situacao
    }

    getNotas(){
        return this._notas
    }

    getFrequencia(){
        return this._frequencia
    }
}