
function mascRealPreFixo(valor) {
    if (isNaN(valor)) {
        return 0
    } else {

        return Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

}

export default {
    mascRealPreFixo
}