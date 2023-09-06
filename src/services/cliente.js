import api from '../src/api'

class ClienteService {
  async getAllCliente() {
    const response = await api.get('/clientes/')
    return response.data
  }
  async saveCliente(cliente) {
    const response = await api.post('/clientes/', Cliente)
    return response.data
  }
  async deleteCliente(cliente) {
    const response = await api.delete(`/clientes/${cliente.id}/`)
    return response.data
  }
}

export default new ClienteService()