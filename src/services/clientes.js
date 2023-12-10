import api from '../api/api'

class ClienteService {
    async getAllClientes(){
        const response = await api.get('/empresas/')
        return response.data
    }
    async saveCliente(empresa) {
        const response = await api.post('/empresas/', empresa)
        return response.data
    }
}
export default new ClienteService();