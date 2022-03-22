function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO]verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade <= 10) {
            //criança
            img.setAttribute('src', 'bebeH.png')
        } else if (idade < 21) {
            //adolescente
            img.setAttribute('src', 'adolescenteH.png')
        } else if (idade < 60) {
            //adulto
            img.setAttribute('src', 'adultoH.png')
        } else {
            //idoso
            img.setAttribute('src', 'idoso.png')
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade <= 10) {
            //criança
            img.setAttribute('src', 'bebeM.png')
        } else if (idade < 21) {
            //adolescente
            img.setAttribute('src', 'adolescenteM.png')
        } else if (idade < 60) {
            //adulto
            img.setAttribute('src', 'adultoM.png')
        } else {
            //idoso
            img.setAttribute('src', 'idosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}