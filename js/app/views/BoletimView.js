class BoletimView extends View {

    constructor(elemento) {
        super(elemento );
    }

    _template(boletim) {

        const aprovado = aluno => aluno.getSituacao() == 'Aprovado'
        const reprovado = aluno => aluno.getSituacao() == 'Reprovado'
        const soma = (total, aluno) => (Number(total) + Number(aluno.getNotas().getMediaFinal()))

        return `
        <table class="table table-hover table-bordered branco">
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>FREQUENCIA</th>
                    <th>Nota 1</th>
                    <th>Nota 2</th>
                    <th>Nota final</th>
                    <th>Situacao</th>
                </tr>
            </thead>
        
            <tbody>
                ${boletim.getAlunos().map(aluno => `
                    
                    <tr>
                    <td>${aluno.getNome()}</td>
                    <td>${aluno.getFrequencia().getFrequencia()}</td>
                    <td>${aluno.getNotas().getNota1()}</td>
                    <td>${aluno.getNotas().getNota2()}</td>
                    <td>${aluno.getNotas().getNota3()}</td>
                    <td>${aluno.getSituacao()}</td>
                    </tr>
                    
                `).join('')}         
            </tbody>

            <tfoot>
                <td>Aprovados</td>
                <td>${boletim.getAlunos().filter(aprovado).length}</td>
                <td>Reprovados</td>
                <td>${boletim.getAlunos().filter(reprovado).length}</td>
                <td>Media da Turma</td>
                <td>${(Number(boletim.getAlunos().reduce(soma,0.0)) / boletim.getAlunos().length).toFixed(2)}</td>
            </tfoot>
            
        </table>
        `;
    }
}