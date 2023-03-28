function validaCPF(cpf) {

    let cpfLimpo = Array.from(cpf.replace(/\D+/g, '')).reverse()
    // console.log(cpfLimpo)
    let final = []
    const filtro1 = cpfLimpo.map((e = 0, i, arr) => {
        e = e * i
        return e
    }).reverse()

    let acumulador = 0
    for (let i = 0; i < 9; i++) {
        acumulador += filtro1[i]
    }
    function digito(acumulador) {

        const operacao = 11 - (acumulador % 11)
        if (operacao > 9) return 0
        else return operacao
    }
    let digitoUm = digito(acumulador).toString()
    // console.log(digitoUm)
    const filtroDois = cpfLimpo.map((e, i) => {
        e = e * (i + 1)
        return e
    }).reverse()
    // console.log(filtroDois)
    let acumuladorDois = 0
    for (let i = 0; i < 10; i++) {
        acumuladorDois += filtroDois[i]
    }
    // console.log(acumuladorDois)
    let digitoDois = digito(acumuladorDois).toString()

    // console.log(digitoDois)
    final = [...cpfLimpo].reverse().splice(0, 9).concat(digitoUm, digitoDois)

    console.log(final)
    cpfLimpo.reverse()
    console.log(cpfLimpo)
    
    if (cpfLimpo.every((val, i) => val === final[i])) {
        return `CPF VÁLIDO`
    } else {
        return `CPF INVÁLIDO`
    }
}

console.log(validaCPF('189.269.220-14'))
