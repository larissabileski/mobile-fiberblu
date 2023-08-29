import api from '../screens/api'

class CompraService {
  async getAllCompra() {
    const response = await api.get('/compras/')
    return response.data
  }
  async saveCompra(compra) {
    const response = await api.post('/compras/', Compras)
    return response.data
  }
  async deleteCompras(compra) {
    const response = await api.delete(`/compras/${compra.id}/`)
    return response.data
  }
}

export default new CompraService()