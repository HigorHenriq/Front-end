import axios from 'axios'
import utilsStorage from "@/utils/storage"

const api = axios.create({
    baseURL: "http://localhost:3400"
})

// config que virá antes do axios fazer as requisições
api.interceptors.request.use((config) => {
    let token = utilsStorage.obterTokenStorage()

    config.headers.Authorization = token

    return config
})

export default api