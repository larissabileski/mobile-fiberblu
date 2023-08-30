import api from '../src/api'

class GrupoProdutoService {
  async getAllGrupoProduto() {
    const response = await api.get('/gruposprodutos/')
    return response.data
  }
  async saveGrupoProduto(grupoproduto) {
    const response = await api.post('/gruposprodutos/', GrupoProduto)
    return response.data
  }
  async deleteGrupoProduto(grupoproduto) {
    const response = await api.delete(`/gruposprodutos/${grupoproduto.id}/`)
    return response.data
  }
}

export default new GrupoProdutoService()