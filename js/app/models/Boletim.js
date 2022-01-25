class Boletim {
   
    constructor() {
        this._alunos = []
    }

    adiciona(aluno){
        this._alunos.push(aluno)
    }

    getAlunos(){
        return this._alunos
    }

}