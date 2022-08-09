const downloadButton = document.getElementById("buttonSaveFile")

class Pessoa
{
    constructor(nome, idade, bairro, rua, telefone, curso, turno, matricula, numero)
    {
        this.nome = nome
        this.idade = idade
        this.bairro = bairro
        this.rua = rua
        this.telefone = telefone
        this.curso = curso
        this.turno = turno
        this.matricula = matricula
        this.numero = numero
    }

}

function downloadFile(form)
{
    const nome =form.elements['nome'].value
    const idade = form.elements['idade'].value
    const bairro = form.elements['bairro'].value
    const rua = form.elements['rua'].value
    const telefone = form.elements['telefone'].value
    const curso = form.elements['curso'].value
    const turno = form.elements['turno'].value
    const matricula = form.elements['matricula'].value
    const numero = form.elements['número'].value

    const pessoa = new Pessoa(nome, idade, bairro, rua, telefone, curso, turno, matricula, numero)
    saveFile(pessoa)
}

function saveFile(pessoa)
{

    let info = 
    'nome=' + pessoa.nome + '\r\n' +
    'idade=' + pessoa.idade + '\r\n' +
    'matricula=' + pessoa.matricula + '\r\n' +
    'curso=' + pessoa.curso + '\r\n' +
    'turno=' + pessoa.turno + '\r\n' +
    'número=' + pessoa.numero + '\r\n' +
    'bairro=' + pessoa.bairro + '\r\n' +
    'rua=' + pessoa.rua + '\r\n' +
    'telefone=' + pessoa.telefone + '\r\n' 

    let saveBlob = new Blob([info], {type:"text/plain"})
    let nomeArquivo = 'Aluno.txt'
    let link = document.createElement("a")

    link.href= window.webkitURL.createObjectURL(saveBlob)
    link.download = nomeArquivo
    link.style.display = "none"
    document.body.appendChild(link)

    link.click()
    }
