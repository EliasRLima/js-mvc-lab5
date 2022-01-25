# js-mvc-lab5
 
Projeto de boletim feito com MVC em Javascript de backend para a disciplina de LPWEB.

Regras da app:
* Entrada: Na tela o usuário deverá informar o nome do aluno, primeira nota, segunda nota, percentual de frequência e prova final (caso necessário).
Importante: Todos os dados informados deverão ser validados e notificados.

* Regras de Negócio: O sistema deve efetuar o cálculo da aprovação de alunos, sendo que, para ser aprovado, deve-se ter frequência mínima de 75%. Além disso, para aprovação sem prova final, a média das notas parciais deve ser maior ou igual a 70. Para reprovação direta, esta média deve ser menor que 30. Médias entre 30 (inclusive) e 70 (exclusive) colocam o aluno em prova final. Se a média da prova final com a média anterior for menor que 50, o aluno está reprovado, caso contrário, aprovado.

* Saída: Uma tabela informando o nome do aluno, primeira nota, segunda nota, percentual de frequência, prova final, a média final e situação (Aprovado ou Reprovado). Na mesma tabela terá um rodapé (tfoot) com o número de aprovados, reprovados e a média geral da turma.

Tela inicial:
![tela inicio](https://github.com/EliasRLima/js-mvc-lab5/tree/main/screenshots/inicio.PNG)

Telas com dados:
![tela inicio](https://github.com/EliasRLima/js-mvc-lab5/tree/main/screenshots/cadastrando2.PNG)
