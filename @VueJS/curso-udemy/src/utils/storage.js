import Usuario from "@/models/Usuario"

function salvarUsuarioStorage(usuario) {
    let usuarioString = JSON.stringify(usuario)
    localStorage.setItem('usuario', usuarioString)
}

function obterUsuarioStorage() {
    let usuarioString = localStorage.getItem('usuario')
    return new Usuario(JSON.parse(usuarioString))

}

function removerUsuarioStorage() {
    localStorage.removeItem('usuario')
}

function salvarTokenStorage(token) {
    localStorage.setItem('token', token)
}

function obterTokenStorage() {
    return localStorage.getItem('token')
}

function removerTokenStorage() {
    localStorage.removeItem('token')
}

export default {
    salvarUsuarioStorage,
    obterUsuarioStorage,
    removerUsuarioStorage,
    salvarTokenStorage,
    obterTokenStorage,
    removerTokenStorage
}