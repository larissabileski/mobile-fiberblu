import api from '../src/api'

class CategoriaClienteService {
  async getAllCategoriaCliente() {
    const response = await api.get('/categoriaclientes/')
    return response.data
  }
  async saveCategoriaCliente(categoriacliente) {
    const response = await api.post('/categoriaclientes/', CategoriaCliente)
    return response.data
  }
  async deleteCategoriaCliente(categoriacliente) {
    const response = await api.delete(`/categoriaclientes/${categoriacliente.id}/`)
    return response.data
  }
}

export default new CategoriaClienteService()