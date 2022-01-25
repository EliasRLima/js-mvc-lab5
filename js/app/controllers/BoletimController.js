class BoletimController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document)

        this._inputNome = $('#nome')
        this._inputNota1 = $('#nota1')
        this._inputNota2 = $('#nota2')
        this._inputFrequencia = $('#frequencia')
        this._inputNota3 = $('#nota3')

        // model
        this._boletim = new Boletim()

        // view
        this._boletimView = new BoletimView($('#js-boletimView') )
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#js-mensagem-view') )
        this._mensagemView.update(this._mensagem )

    }
    
    adiciona(event ) {
        
        event.preventDefault();

        let aluno = this._criarAluno()
        this._boletim.adiciona(aluno)

        this._boletimView.update(this._boletim)
        this._limpaFormulario();
        this._mensagem.texto = `Aluno(a) ${aluno.getNome()} foi adicionado com sucesso.`;
        this._mensagemView.update(this._mensagem );
    }

    _criarAluno(){
        return new AlunoBoletim(this._inputNome.value,
                                new NotasBoletim(
                                    this._inputNota1.value,
                                    this._inputNota2.value,
                                    this._inputNota3.value  
                                ),
                                new FrequenciaBoletim(
                                    this._inputFrequencia.value
                                )
                )
    }

    _limpaFormulario() {
        this._inputNome.value = ''
        this._inputNota1.value = ''
        this._inputNota2.value = ''
        this._inputFrequencia.value = ''
        this._inputNota3.value = ''

    }
}