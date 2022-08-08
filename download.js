const downloadButton = document.getElementById("buttonSaveFile")

let nome, idade, bairro, rua, telefone, curso, turno, cpf

function saveFile()
{

    nome = document.querySelector("input[name=nome]").value
    idade = document.querySelector("idade")
    bairro = document.querySelector("bairro")
    rua = document.querySelector("rua").value
    telefone = document.querySelector("número").value
    curso = document.querySelector("curso").value
    turno = document.querySelector("turno").value
    cpf = document.querySelector("cpf").value


    let info = 
    'nome=' + nome + '\r\n' +
    'idade=' + idade + '\r\n' +
    'bairro=' + bairro + '\r\n' +
    'rua=' + rua + '\r\n' +
    'telefone=' + telefone + '\r\n' +
    'curso=' + curso + '\r\n' +
    'turno=' + turno + '\r\n' +
    'cpf=' + cpf + '\r\n'

    let saveBlob = new Blob([info], {type:"text/plain"})
    let nomeArquivo = 'teste.txt'
    let link = document.createElement("a")

    link.href= window.webkitURL.createObjectURL(saveBlob)
    link.download = nomeArquivo
    link.style.display = "none"
    document.body.appendChild(link)

    link.click()
    }

    


