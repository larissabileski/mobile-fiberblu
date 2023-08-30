import api from '../src/api'

class CategoriaEmpresaService {
  async getAllCategoriaEmpresa() {
    const response = await api.get('/categoriaempresas/')
    return response.data
  }
  async saveCategoriaEmpresa(categoriaempresa) {
    const response = await api.post('/categoriaempresas/', CategoriaEmpresa)
    return response.data
  }
  async deleteCategoriaEmpresa(categoriaempresa) {
    const response = await api.delete(`/categoriaempresas/${categoriaempresa.id}/`)
    return response.data
  }
}

export default new CategoriaEmpresaService()